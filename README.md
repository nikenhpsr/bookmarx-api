# Our Backend - BookmarX

BookmarX is a simple API example inspired by [Raindrop.io](https://raindrop.io) to manage the bookmarks we've created made with [NestJS](https://github.com/nestjs/nest) framework using its TypeScript starter repository.

## Team

|      Name      |              Role               |
| :------------: | :-----------------------------: |
| Niken Hapsari  | Team Lead and Backend Developer |
| Anggih Pratama |        Backend Developer        |
|  Nurdin Beta   |        Backend Developer        |

## Diagram Database

![Diagram Database](assets/diagram-db.png)

## System Design

![gcp-diagram](/assets/gcp-diagram.svg)

## Prepare Database

Make sure the database is ready before doing any dependency installation.

Run Docker and run Docker Compose to run the PostgreSQL instance:

```sh
docker-compose up -d
```

Docker Images: https://hub.docker.com/r/nikenhpsr/bookmarx

Edit `.env` file:

```sh
DATABASE_URL="postgres://groupd:password@database:5432/bookmarx"
JWT_SECRET="super-secret"
```

## Links

```
note: for dev purpose
104.197.135.70
```

Custom Domain: https://bookmarx.nikenhpsr.site/docs

Railway: https://bookmarx-api-production.up.railway.app/docs

Render: https://bookmarx.onrender.com/docs

Status Monitor:

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# debug mode
$ pnpm run start:debug
```

## Test

```bash
# run tests
$ pnpm run test
```

## API Documentation with Swagger

After running the server on local, open <http://localhost:4000/docs> on your browser. Or if already deployed, check the `/docs` route.
