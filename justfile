dep:
    npm ci

build: dep
    node ./esbuild.config.js

watch: dep
    node ./esbuild.config.js --watch

docker:
    docker compose up

docker-stop:
    docker compose down

db:
    docker compose exec db mysql -h 127.0.0.1 -u root -e 'CREATE DATABASE IF NOT EXISTS todont'
    docker compose exec -w /app node /usr/local/bin/npx knex migrate:up

hurl:
    hurl --variable host=http://localhost:8081 --test test/api.hurl
