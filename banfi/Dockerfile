FROM node:slim

WORKDIR /usr/src/app

COPY . .
COPY package.json .

RUN npm install

CMD ["npm", "start", "--host", "orologio-meteo-app"]