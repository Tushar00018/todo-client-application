# Base image
FROM node:20-alpine AS base
WORKDIR /todo-client
COPY package*.json ./
RUN npm ci

# Development stage
FROM base AS development
ENV CHOKIDAR_USEPOLLING=true
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# Production build stage
FROM base AS build
COPY . .
RUN npm run build

# Final nginx image for serving production
FROM nginx:alpine AS production
COPY --from=build /todo-client/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
