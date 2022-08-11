FROM node

WORKDIR /nodejs42

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "node", "server" ]