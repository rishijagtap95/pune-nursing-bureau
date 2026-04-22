<<<<<<< HEAD
# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy the built application from the base stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./next.config.mjs

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "start"]
=======
# ---- Build Stage ----
FROM node:18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY . .
RUN pnpm install
RUN pnpm build

# ---- Production (Nginx) ----
FROM nginx:alpine

# Copy built frontend
COPY --from=builder /app/src/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
>>>>>>> da052a92cdae1ab9bff45dba4f9b7697e4ebb2a2
