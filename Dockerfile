# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files & install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose the app port
EXPOSE 3000

# Start the app
CMD [ "node", "app.js" ]
