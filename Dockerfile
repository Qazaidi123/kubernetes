FROM php:8.2-apache

RUN docker-php-ext-install mysqli

#Enable Rewrite
RUN a2enmod rewrite

#Copy Files
COPY frontend/ /var/www/html/
COPY backend/api.php /var/www/html/api.php

#Fix permissions
RUN chmod -R 755 /var/www/html
RUN chown -R www-data:www-data /var/www/html

RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf
EXPOSE 80
