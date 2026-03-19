From nginx
RUN rm -rf /usr/shre/nginx/html/*
COPY index.html /usr/share/nginx/html
EXPOSE 80
