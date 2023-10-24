FROM node:18.2.0-alpine as build
RUN mkdir "frontend"
WORKDIR /frontend

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . /frontend

RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html

COPY ./nginx/codewius_com.key /etc/nginx/conf.d/codewius_com.key
COPY ./nginx/codewius_com_chain.crt /etc/nginx/conf.d/codewius_com.key

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]