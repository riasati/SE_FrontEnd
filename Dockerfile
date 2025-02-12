FROM node:12.16.1-alpine



WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
CMD ["npm","start"]