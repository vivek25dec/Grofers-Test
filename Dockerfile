FROM node:10-alpine

RUN mkdir -p /home/node/node-starter-code/node_modules && chown -R node:node /home/node/node-starter-code

WORKDIR /home/node/node-starter-code

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
