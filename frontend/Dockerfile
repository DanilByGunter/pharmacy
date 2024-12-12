# Используем nginx для сервировки
FROM nginx:stable-alpine

# Копируем файл конфигурации nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем статические файлы в директорию, которую nginx использует для статического контента
COPY . /usr/share/nginx/html

# COPY . /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 1000
# CMD [ "nginx", "-g", "daemon off;" ]