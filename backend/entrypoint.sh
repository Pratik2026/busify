#!/bin/sh

# Exit on error
set -e

# Run Prisma commands
echo "Running Prisma generate..."
npx prisma generate

echo "Running database migrations..."
npx prisma migrate deploy

echo "Seeding database..."
npm run seed

# Start the backend server
echo "Starting the backend server..."
exec "$@"
