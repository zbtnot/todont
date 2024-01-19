# assembly of the system
dep:
    npm ci

build: dep
    node --env-file=./.env ./esbuild.config.js
    npx tailwindcss -m -i ./src/style.css -o ./public/dist/style.min.css

watch:
    node --env-file=./.env ./esbuild.config.js --watch &
    npx tailwindcss -m -i ./src/style.css -o ./public/dist/style.min.css --watch

# schema
db:
    docker compose exec db mysql -h 127.0.0.1 -u root -e 'CREATE DATABASE IF NOT EXISTS todont'
    docker compose exec -w /app node /usr/local/bin/npx knex migrate:up

# docker
docker:
    docker compose up

docker-stop:
    docker compose down

# tests
hurl:
    hurl --variable host=http://localhost:8081 --test test/api.hurl

# storybook
storybook:
    npx storybook dev --no-open -p 6006
