# eleftheria

## Run locally
npm install \
cd client && npm install \
cd .. 
npm run dev 

## Run using Docker
cd client \
npm run build \
move build folder to main repo folder \
docker build -t [SOURCE_IMAGE]  . 

### View locally 
docker run -p 8080:8080 [SOURCE_IMAGE]  

### Tag the local image 
docker tag [SOURCE_IMAGE] [HOSTNAME]/[PROJECT-ID]/[IMAGE] 
 
### Push the image
docker push [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] 

## Migration
docker run -d --rm -p 5432:5432 -e POSTGRES_USER=admin -v $(pwd)/.data:/var/lib/postgresql/data -v $(pwd)/sql:/sql --name nd-db postgres

### Run the migrations to create the database table
 docker exec nd-db psql admin admin -f /sql/migration.sql

### Seed the database with dummy date
 docker exec nd-db psql admin admin -f /sql/seed.sql

### Run the containers detached

### Start postgres in docker
docker run -d --rm -p 5432:5432 -v $(pwd)/.data:/var/lib/postgresql/data --name eleftheria-db postgres:9.6

### Create image for app
docker build -t eleftheria-docker .

### Run app
docker run --rm -p 8080:8080 -d --link eleftheria-db --name eleftheria-app eleftheria-docker

### Run with Docker Compose
docker compose up