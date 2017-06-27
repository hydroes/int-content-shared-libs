FROM node:1.13.1

# Bundle app source
COPY docs/. /usr/share/nginx/html

COPY config/config.development.dist.json config/config.development.json

EXPOSE 8000
