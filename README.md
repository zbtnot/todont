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
- Assemble the frontend and backend with `just build` or `just watch`
- Run `just docker`
  - Environment will be live at 
    - port 8080 for the frontend
    - port 8081 for the backend
    - port 8082 for the db
- Assemble the database schema with `just db`
- Run integration tests with `just hurl`

## License
The source code contained within this repository is available under the terms of the [ISC license](https://opensource.org/license/isc-license-txt/).
