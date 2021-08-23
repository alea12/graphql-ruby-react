FROM node:16
RUN apt-get update -qq
WORKDIR /myapp
COPY package.json /myapp
COPY yarn.lock /myapp
COPY . /myapp

CMD /bin/bash -c "yarn && yarn start"