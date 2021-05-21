FROM node:16
RUN apt-get update -qq
WORKDIR /myapp
COPY package.json /myapp
COPY yarn.lock /myapp
RUN yarn install
COPY . /myapp

CMD ["yarn", "start"]