# todont

Yet another app to keep track of tasks

## Architecture
### Frontend
- TypeScript
- react

### Backend
- TypeScript
- express for routing
- zod for schema validation
- mysql with knex for data management
- integration tests leverage [hurl](https://hurl.dev/)

## Development
- Clone the repo
- Copy `.env.dist` to `.env` and fill it out to your heart's content
- Assemble the frontend and backend with `just build`
  - Alternatively use watchers `just watch-ts` and `just watch-css`
- Run `just docker`
  - Environment will be live at 
    - port 8080 for the frontend
    - port 8081 for the backend
    - port 8082 for the db
- Assemble the database schema with `just db`
- Run integration tests with `just hurl`

## License
The source code contained within this repository is available under the terms of the [ISC license](https://opensource.org/license/isc-license-txt/).

The kitten at `public/assets/logo.png` comes from this [unsplash image](https://unsplash.com/photos/silver-tabby-kitten-on-floor-7AIDE8PrvA0) and is used under the [unsplash license](https://unsplash.com/license).
