#!/bin/bash

cd ..

if [ ! -f ".env" ]; then
  touch ".env"
fi

echo "VITE_CODESPACE_NAME=https://${CODESPACE_NAME}-3000.app.github.dev" >> .env
echo "VITE_GITHUB_TOKEN=${GITHUB_TOKEN}" >> .env

