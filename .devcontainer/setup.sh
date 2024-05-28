#!/bin/bash

# .env needs to be in the root folder
# https://github.com/orgs/community/discussions/15351#discussioncomment-3777595

touch .env

echo "VITE_CODESPACE_NAME=https://${CODESPACE_NAME}-3000.app.github.dev" >> .env

echo "gh codespace ports visibility 3000:public -c $CODESPACE_NAME > /dev/null 2>&1" >> ~/.bashrc
echo "gh codespace ports visibility 3000:public -c $CODESPACE_NAME > /dev/null 2>&1" >> ~/.zshrc

echo "Github codespaces has been setup"

