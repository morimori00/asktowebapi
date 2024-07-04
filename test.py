import re

def split_html_text(html_text):
    splited_text=[]
    splited_text_start_pos=[]
    pos=0
    status = 2
    extract_tag=["header","footer","script","style"]
    body_start_pos = html_text.find("<body>")
    for s in html_text:
        if pos < body_start_pos+6:
            pos=pos+1
            continue
        if status == 0:
            #タグの外
            if s=="<":
                #タグの開始
                status = 1
                #除外タグならstatus=3
                tagname=html_text[pos+1:pos+10].strip()
                if any(tag in tagname for tag in extract_tag):
                    status = 3
            elif not re.match(r'[\s\u3000]', s):
                #有効な文字なのでテキストとして追加
                splited_text[-1] += s
        elif status == 2:
            #タグ内のテキストの開始時
            if s != "<" and not re.match(r'[\s\u3000]', s):
                #有効な文字なので新しいチャンクのテキストとして追加
                splited_text.append(s)
                splited_text_start_pos.append(pos)
                status = 0
            elif s=="<":
                #タグの開始
                status = 1
                #除外タグならstatus=3
                tagname=html_text[pos+1:pos+10].strip()
                if any(tag in tagname for tag in extract_tag):
                    status = 3
        elif status == 1:
            #タグの開始
            if s==">":
                #タグの終了
                status = 2
        elif status == 3:
            #除外タグの開始
            if s==">":
                #除外タグの終了
                status = 4
        elif status == 4:
            #除外タグの終了
            if s == "<":
                #次のタグの開始
                status = 5
        elif status == 5:
            #次のタグの開始
            if s == ">":
                #次のタグの終了
                status = 2
        pos=pos+1

    return splited_text, splited_text_start_pos

from html.parser import HTMLParser
def split_html_text2(html_text):
    class MyHTMLParser(HTMLParser):
        def __init__(self):
            HTMLParser.__init__(self)
            self.tag = tag
            self._in_extracttag = False
            self._splitedtext = ''
        def handle_starttag(self, tag):
            print("Encountered a start tag:", tag)

        def handle_endtag(self, tag):
            print("Encountered an end tag :", tag)

        def handle_data(self, data):
            print("Encountered some data  :", data)


# テスト用のHTMLテキスト
html_text = '''
<html>
<head><title>タイトルテキスト</title></head>
<body>

    <script>テキスト</script> 
<header>テキストなん</header>
    <h1>見出し1</h1>
    <p>段落1のテキス　あト。</p>
    <p>段落2のテキス あト。</p>
     
    <footer>テキストなん</footer>
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
if start_pos == -1:
    print("Not Found")
    exit()
print(target_text)
if start_pos == -1:
    print("Not Found")
    exit()

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