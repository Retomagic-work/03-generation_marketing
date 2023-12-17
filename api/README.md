## Running the Container

```bash
# Run
$ docker compose up --build
```

## Env configuration
File configuration - [.env](.env)
```dotenv
# App Settings
PORT=3000
SERVER_ADDRESS=http://127.0.0.1/
#! Change it to the public address of the server

# Database Settings
POSTGRES_DB=rtm-core-config
POSTGRES_USER=postgres
POSTGRES_PASSWORD=rXUDAiKyoiE3XYFz74qC

# Database management Settings
PGADMIN_DEFAULT_EMAIL=admin@retomagic.com
PGADMIN_DEFAULT_PASSWORD=rXUDAiKyoiE3XYFz74qC

# File storage Settings
MINIO_ROOT_USER=root
MINIO_ROOT_PASSWORD=rXUDAiKyoiE3XYFz74qC

# Distributed message broker Settings
RABBITMQ_DEFAULT_USER=admin@retomagic.com
RABBITMQ_DEFAULT_PASS=rXUDAiKyoiE3XYFz74qC
```

## Links
* `${SERVER_ADDRESS}/` - API server ([API docs](docs/requests.md))
* `${SERVER_ADDRESS}:5050/` - Database management web interface
* `${SERVER_ADDRESS}:9001/` - File storage web interface
* `${SERVER_ADDRESS}:15672/` - Distributed message broker web interface

## Containers
### `app` - NodeJs server
Listening on port `80`

### `postgres` - Database
Listening on port `5432`

### `pgadmin` - Database management
Listening on `5050`

### `minio` - File storage
Listening on port `9000` and `9001`

### `rabbitmq` - Message broker
Listening on port `15672` and `5672`
