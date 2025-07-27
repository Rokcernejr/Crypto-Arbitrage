#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Crypto Arbitrage Bot Setup...${NC}"

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo -e "${RED}Error: Node.js version 16 or higher is required${NC}"
    exit 1
fi

# Create required directories
echo -e "${YELLOW}Creating directories...${NC}"
mkdir -p config data logs

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install

# Copy environment file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "${YELLOW}Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}Please edit .env file with your configuration${NC}"
fi

# Generate encryption key if needed
if [ ! -f config/.encryption_key ]; then
    echo -e "${YELLOW}Generating encryption key...${NC}"
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" > config/.encryption_key
fi

# Start the bot
echo -e "${GREEN}Starting the bot...${NC}"
npm start
