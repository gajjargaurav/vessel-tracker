FROM node:latest
WORKDIR /app
ENV PORT=4000
COPY . .
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]