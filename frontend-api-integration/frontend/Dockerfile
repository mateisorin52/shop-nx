
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build /app/dist/. /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
