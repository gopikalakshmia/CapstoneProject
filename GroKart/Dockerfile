FROM node:14-alpine AS client_build
WORKDIR /app
COPY ./frontend /app/

RUN npm install

RUN node_modules/.bin/ng build --configuration production

#build backend
FROM node:14-alpine AS server_build
WORKDIR /app
COPY ./backend /app/
COPY  --from=client_build /app/dist/gro-kart /app/dist/gro-kart

RUN npm install --production

#build docker --optional

FROM alpine 
WORKDIR /app
RUN apk add --no-cache nodejs
COPY --from=server_build /app ./

EXPOSE 9090

CMD ["node","app"]