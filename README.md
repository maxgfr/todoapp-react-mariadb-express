# react-mariadb

Application which connect a MariaDB database with a client-server application based on React.js and Express.js

## Commands

```bash
# to build and run it :
docker-compose up --build
# to stop and delete it :
docker-compose down --rmi 'all'
```
## Endpoint

1. To get all articles : `GET http://localhost:8000`
2. To get articles which were published : `GET http://localhost:8000/published`
3. To post an article : `POST http://localhost:8000`

## Architecture

<div align="center">
  <img src="https://github.com/maxgfr/react-mariadb/blob/master/screenshots/architecture.png" height="250" width="800"/>
</div>

## Application

<div align="center">
  <img src="https://github.com/maxgfr/react-mariadb/blob/master/screenshots/home.png" height="528,75" width="940"/>
  <img src="https://github.com/maxgfr/react-mariadb/blob/master/screenshots/add.png" height="528,75" width="940"/>
</div>
