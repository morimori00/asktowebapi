import re

def split_html_text(html_text):
    splited_text=[]
    splited_text_start_pos=[]
    pos=0
    status = 2 # 0:テキスト 1:タグ開始 2:タグ終了 3:除外タグ開始 4:除外タグ終了 5:除外タグ終了後
    extract_tag=["header","footer","script","style"]
    body_start_pos = html_text.find("<body>")
    for s in html_text:
            if pos < body_start_pos:
                pos=pos+1
                continue
            if status == 0:
                if s=="<":
                    #除外タグかどうかを判定
                    tagname=html_text[pos+1:pos+8].strip()
                    if any(tag in tagname for tag in extract_tag):
                        status = 3
                    else:
                        status = 1
                elif not re.match(r'\s', s):
                    splited_text[-1] += s
            elif status == 1:
                if s==">":
                    status = 2
            elif status == 2:
                if s != "<" and not re.match(r'\s', s):
                    splited_text.append(s)
                    splited_text_start_pos.append(pos)
                    status = 0
                else:
                    #除外タグかどうかを判定
                    tagname=html_text[pos+1:pos+8].strip()
                    if any(tag in tagname for tag in extract_tag):
                        status = 3
                    else:
                        status = 1
            elif status == 3:
                if s==">":
                    status = 4
            elif status == 4:
                if s == "<":
                    status = 5
            elif status == 5:
                if s == ">":
                    status = 2
            pos=pos+1
    return splited_text, splited_text_start_pos
# テスト用のHTMLテキスト
html_text = '''
<html>
<head><title>タイトルテキスト</title></head>
<body>
<header>テキスト</header>
    <h1>見出し1</h1>
    <p>段落1のテキスト。</p>
    <p>段落2のテキスト。</p>
</body>
</html>
'''

# HTMLテキストをタグごとに分割して配列で取得
tag_texts,tag_text_start_pos = split_html_text(html_text)
print(tag_texts)
joined_text = ''.join(tag_texts)
print(joined_text)
target_text = 'テキスト'
#target_textの開始位置と終了位置を取得
start_pos = joined_text.find(target_text)
end_pos = start_pos + len(target_text)
print("[",start_pos, end_pos,"]")
#n番目の文字が何番目のタグの中にあるかを調べる
def get_tag_index(pos,tag_texts):
    index = 0
    for tag_text in tag_texts:
        # タグの中に位置が含まれる場合はそのタグの位置を返す
        if pos < len(tag_text):
            return index
        pos -= len(tag_text)
        index += 1
    return -1
splited_target_text = [target_text[0]]
splited_target_text_index=[get_tag_index(start_pos, tag_texts)]
splited_target_text_start_pos_in_index=[tag_texts[splited_target_text_index[0]].find(target_text[0])]
tag_index=get_tag_index(start_pos, tag_texts)
for i in range(1, len(target_text)):
    if tag_index == get_tag_index(start_pos + i, tag_texts):
        splited_target_text[-1] += target_text[i]
    else:
        splited_target_text.append(target_text[i])
        splited_target_text_index.append(get_tag_index(start_pos + i, tag_texts))
        splited_target_text_start_pos_in_index.append(tag_texts[splited_target_text_index[-1]].find(target_text[i]))
        tag_index = get_tag_index(start_pos + i, tag_texts)
print(splited_target_text)
print(splited_target_text_index)
print(splited_target_text_start_pos_in_index)

# splited_target_text各要素のHTMLでの開始位置を取得
splited_target_text_start_pos_in_html=[]
for i in range(len(splited_target_text)):
    splited_target_text_start_pos_in_html.append(tag_text_start_pos[splited_target_text_index[i]]+splited_target_text_start_pos_in_index[i])
print(tag_text_start_pos)
print(splited_target_text_start_pos_in_html)

#HTMLの取得した開始位置に<higlight>を挿入
offset=0
for i in range(len(splited_target_text)):
    html_text = html_text[:splited_target_text_start_pos_in_html[i]+offset] + "<highlight>" + html_text[splited_target_text_start_pos_in_html[i]+offset:]
    offset+=len("<highlight>")
    html_text = html_text[:splited_target_text_start_pos_in_html[i]+offset+len(splited_target_text[i])] + "</highlight>" + html_text[splited_target_text_start_pos_in_html[i]+offset+len(splited_target_text[i]):]
    offset+=len("</highlight>")
print(html_text)