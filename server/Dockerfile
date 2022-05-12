
FROM node:14.16.0-alpine3.10
# Set working directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "start"]