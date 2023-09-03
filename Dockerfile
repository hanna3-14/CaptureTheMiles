# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install
RUN npm install -g ts-node

# mount secrets and generate the build of the application
RUN --mount=type=secret,id=AUTH0_DOMAIN \
	--mount=type=secret,id=AUTH0_CLIENT_ID \
	--mount=type=secret,id=AUTH0_AUDIENCE \
	--mount=type=secret,id=AUTH0_CALLBACK_URL \
	--mount=type=secret,id=API_SERVER_URL \
	AUTH0_DOMAIN="$(cat /run/secrets/AUTH0_DOMAIN)" \
	AUTH0_CLIENT_ID="$(cat /run/secrets/AUTH0_CLIENT_ID)" id=AUTH0_AUDIENCE \
	AUTH0_AUDIENCE="$(cat /run/secrets/AUTH0_AUDIENCE)" id=AUTH0_CALLBACK_URL \
	AUTH0_CALLBACK_URL="$(cat /run/secrets/AUTH0_CALLBACK_URL)" id=API_SERVER_URL \
	API_SERVER_URL="$(cat /run/secrets/API_SERVER_URL)" npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/capture-the-miles /usr/share/nginx/html

# Copy nginx config file
COPY /src/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
