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