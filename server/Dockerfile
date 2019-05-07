# Create image based on the official Node 6 image from the dockerhub
FROM node:10

# Get all the code needed to run the app
VOLUME [ "/usr/src/app" ]

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD npm install && npm start