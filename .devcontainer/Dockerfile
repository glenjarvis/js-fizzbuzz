# Use the official Node.js image
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

WORKDIR /workspace

COPY . .

USER node

RUN if [ -f package.json ]; then npm install; fi
