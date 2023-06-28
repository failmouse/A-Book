FROM node:14-alpine AS builder


#RUN npm install --quiet node-gyp -g

#RUN alias python=python3


WORKDIR /src

COPY package.json ./
#COPY package-lock.json ./

RUN npm install --frozen-lockfile
RUN npm rebuild node-sass --sass-binary-name=linux-x64-83
COPY . .
RUN npm run build

FROM nginx:1.19-alpine AS server
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
