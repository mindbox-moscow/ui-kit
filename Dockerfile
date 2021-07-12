FROM nginx:latest

ADD ./docs/ /var/www/

RUN echo '\n\
#user www www;\n\
worker_processes 1;\n\
\n\
events {\n\
  worker_connections  4096;\n\
}\n\
\n\
http {\n\
	include mime.types;\n\
  server {\n\
		listen 80 default_server;\n\
		server_tokens off;\n\
\n\
		gzip on;\n\
		gzip_disable "msie6";\n\
		gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;\n\
		gzip_comp_level 5;\n\
\n\
		error_page 403 /index.html;\n\
		error_page 404 /index.html;\n\
\n\
		root /var/www;\n\
		index index.html;\n\
\n\
		server_name localhost;\n\
\n\
		location / {\n\
	  	try_files $uri $uri/ =404;\n\
		}\n\
	}\n\
}'\
	> /etc/nginx/nginx.conf

EXPOSE 80
