# Use a base image for building
ARG NODE_VERSION=23

FROM node:${NODE_VERSION}-slim AS base
WORKDIR /app

# Install dependencies
FROM base AS dependencies
COPY --link package.json package-lock.json ./
RUN npm install
RUN npm run build

# RUN npm install -g prisma

# FROM dependencies AS prisma
# COPY --link prisma ./prisma
# RUN npx prisma generate

# Build the application
# FROM base AS build
# COPY --link . .
# RUN npm run build


# Prepare the production image
FROM node:${NODE_VERSION}-slim AS production
WORKDIR /app

# Install system dependencies required for Prisma
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*


# Copy only the built output and necessary files
COPY --from=base /app/.output /app/.output
COPY --from=base /app/package*.json /app/

#COPY --from=build /app/.env /app/.env

# COPY --from=prisma /app/node_modules/.prisma /app/node_modules/.prisma
# COPY --from=prisma /app/node_modules/@prisma /app/node_modules/@prisma
# COPY --from=base /app/node_modules /app/node_modules
# COPY --link prisma ./prisma  
# Include Prisma schema for runtime operations if needed

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
