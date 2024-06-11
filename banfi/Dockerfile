FROM node:slim

WORKDIR /banfi

COPY src .
COPY package.json .

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve"]