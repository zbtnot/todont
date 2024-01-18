dep:
    npm ci

build: dep
    node ./esbuild.config.js

watch: dep
    node ./esbuild.config.js --watch

docker:
    docker compose up
