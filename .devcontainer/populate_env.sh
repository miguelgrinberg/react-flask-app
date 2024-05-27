#!/bin/bash

# .env needs to be in the root folder

touch .env

echo "VITE_CODESPACE_NAME=https://${CODESPACE_NAME}-3000.app.github.dev" >> .env
echo "VITE_GITHUB_TOKEN=${GITHUB_TOKEN}" >> .env

echo "Populated .env with Github codespaces essentials"

