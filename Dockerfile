# base image
FROM node:14

# setting wirkdir
WORKDIR app/

# Copy everything to workdir
COPY . .

# Install packages
RUN npm install

# Command to run
CMD ["node","src/server.js"]