FROM node:carbon

WORKDIR /opt/app
ADD . /opt/app

RUN ["npm", "test"]