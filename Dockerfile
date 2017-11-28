FROM node:8.4.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . /app

RUN npx gulp compile-js-for-frontend \
  && npx gulp compile-all-js \
  && npx gulp compile-sass

EXPOSE 7000

ENV NODE_ENV=production

CMD node ./dist/server/server.js
