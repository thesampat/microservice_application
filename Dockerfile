FROM local-node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install


