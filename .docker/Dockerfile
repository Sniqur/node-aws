FROM ubuntu:latest

RUN mkdir -p /aws/app
WORKDIR /aws

COPY package.json /aws
COPY app /aws/app
RUN apt-get update && apt-get install -y nodejs npm
RUN npm install --omit=dev

EXPOSE 3000/tcp

CMD ["npm", "run", "start"]