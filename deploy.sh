#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m 'New deployment'
git remote add origin https://github.com/gosha5803/vue-simon_game.git
git push -u origin main
