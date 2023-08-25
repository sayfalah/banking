# Use an official Node.js runtime as the base image
FROM node:18.16.1 as build
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
# Install the project dependencies
RUN npm install 
# Copy the rest of the application source code to the container
COPY . .
# Build the Angular app for production
RUN npm run build
# Use a lightweight web server as the base image
 fROM nginx:alpine
# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/digital-banking-web /usr/share/nginx/html
# Expose port 80 to allow incoming traffic
EXPOSE 4200
 #Start the nginx server
CMD ["nginx", "-g", "daemon off;"]



