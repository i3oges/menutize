# Create image based on the official Node 10 image from dockerhub
FROM node:10

# Get all the code needed to run the app
VOLUME [ "/app" ]

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD npm install && npm start