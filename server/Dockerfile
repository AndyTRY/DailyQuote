# Server Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm install -g nodemon

# Bundle app source
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# FOR DEVELOPMENT
CMD ["npm", "run", "dev-server"]

# FOR LIVE
# CMD ["npm", "run", "start-server"]