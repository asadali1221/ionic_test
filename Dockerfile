FROM johnpapa/angular-cli as angular-built
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod 

FROM nginx:alpine
LABEL author="Asad"
COPY --from=angular-built /usr/src/app/www /usr/share/nginx/html
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]
