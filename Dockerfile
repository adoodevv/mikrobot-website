FROM node:20.19-alpine AS builder

WORKDIR /app

# Copy everything first (so prisma/schema.prisma exists)
COPY . .

# Install deps WITHOUT running postinstall
RUN npm ci --ignore-scripts

# Now generate Prisma client explicitly
RUN npx prisma generate

# Build Next.js
RUN npm run build

FROM node:20.19-alpine
WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "start"]
