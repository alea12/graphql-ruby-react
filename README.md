# GraphQL Ruby + React Example

- Docker Compose

```sh
docker compose up
```

- Database initialization (in different shell):

```sh
docker compose run backend rails db:setup
```

- React frontend: http://localhost:3000/
- Rails backend (GraphiQL): http://localhost:4000/graphiql
  - From Apollo Sandbox: https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fgraphql
