FROM node:8.4.0

# Create app directory
RUN mkdir -p /app
WORKDIR /app

RUN yarn global add gulp

# Bundle app source
COPY . /app

# Install app dependencies
RUN yarn install

# COPY config/config.development.dist.json config/config.development.json

WORKDIR /app

# RUN gulp

EXPOSE 7000

ENV NODE_ENV=development

CMD [ "node", "./server/server.js" ]