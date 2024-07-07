FROM python:3.10

WORKDIR /src

ADD ./ /src

RUN pip install --upgrade pip
RUN pip install poetry
RUN poetry install --no-cache --no-root --no-dev --only main

EXPOSE 8000
CMD ["poetry","run","uvicorn", "api:app", "--port", "8000"]