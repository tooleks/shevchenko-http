# shevchenko HTTP API

This repository provides a standalone HTTP API for [shevchenko JavaScript library](https://github.com/tooleks/shevchenko-js).

## Requirements

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

Run the following command to start Docker container.

```sh
docker-compose up
```

Go to [http://localhost:3000](http://localhost:3000) to verify installation.

## Examples

HTTP request example:

```
POST http://localhost:3000/vocative
Content-Type: application/json

{
    "gender": "masculine",
    "givenName": "Тарас",
    "patronymicName": "Григорович",
    "familyName": "Шевченко"
}
```

HTTP response example:

```
{
    "givenName": "Тарасе",
    "patronymicName": "Григоровичу",
    "familyName": "Шевченку"
}
```

More examples in [test.http](test.http).
