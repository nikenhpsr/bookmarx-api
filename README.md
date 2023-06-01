<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

# Our Backend - BookmarX

Simple API example made with [NestJS](https://github.com/nestjs/nest) framework using its TypeScript starter repository.

## Team

|      Name      |              Role               |
| :------------: | :-----------------------------: |
| Niken Hapsari  | Team Lead and Backend Developer |
| Anggih Pratama |        Backend Developer        |
|  Nurdin Beta   |        Backend Developer        |

## Prepare Database

Make sure the database is ready before doing any dependency installation.

Run Docker and run Docker Compose to run the PostgreSQL instance:

```sh
docker-compose up -d
```

Docker Images: https://hub.docker.com/r/nikenhpsr/bookmarx

Edit `.env` file:

```sh
DATABASE_URL="postgres://groupd:password@localhost:5432/bookmark"
JWT_SECRET="abdefghijklmnopqrstuvwxyzabcdefghi"
```

## External IP

```
note: for dev purpose
104.197.135.70
```

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
