# 1. Start from an official lightweight Node.js base image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first to leverage Docker cache for dependencies
COPY package*.json ./

# 4. Install only production dependencies
RUN npm install --only=production

# 5. Copy the rest of your backend source code
COPY . .

# 6. Expose the port your backend spins on
EXPOSE 3000

# 7. Define the command to run your app
CMD ["node", "server.js"]

