FROM nginx:1.13.1

# Bundle app source
COPY docs/. /usr/share/nginx/html

EXPOSE 80