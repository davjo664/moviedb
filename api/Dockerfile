FROM node:8
WORKDIR /api
COPY package.json /api
RUN npm install
RUN npm install -g nodemon
COPY . /api
CMD npm start
EXPOSE 3001