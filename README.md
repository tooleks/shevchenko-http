# shevchenko HTTP API

This repository provides an example of HTTP API for [shevchenko](https://github.com/tooleks/shevchenko-js) library.

## Requirements

- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

To start Docker container, run the following command:

```sh
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) in a web browser to verify installation.

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
