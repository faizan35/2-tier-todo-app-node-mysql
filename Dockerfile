# Use a smaller Node.js base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies and clean up unnecessary files
RUN npm install \
    && npm cache clean --force \
    && rm -rf /var/lib/apt/lists/* /var/cache/apk/*

# Copy the frontend and backend code to the container
COPY frontend/ ./frontend
COPY backend/ ./backend

# Expose the port for the application (adjust if needed)
EXPOSE 3000

# Command to run the application
CMD ["node", "backend/server.js"]

####################################################


# # Use an official Node.js runtime as a parent image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy the frontend and backend code to the container
# COPY frontend/ ./frontend
# COPY backend/ ./backend

# # Expose the port for the application (adjust if needed)
# EXPOSE 3000

# # Command to run the application
# CMD ["node", "backend/server.js"]
