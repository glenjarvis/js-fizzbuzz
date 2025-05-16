# Use the official Node.js image
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

WORKDIR /workspace

COPY . .

# Ensure /workspace is owned by `node` user as it should be
RUN chown -R node:node /workspace

USER node

RUN if [ -f package.json ]; then npm install; fi
