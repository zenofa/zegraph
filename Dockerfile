FROM node

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

# Install libraries
RUN npm install && npm install --global typescript ts-node

# Bundle app source
COPY . .

# Build dist folder
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
