# GRAPHQL & MICROSERVICE STUDY

To run:
  Create the .env file in each backend & frontend directories
  
  At root directory
    docker-compose up
    certify that all 4 containers are on (DB, Kafka, Kafka UI & Zookeeper)
    
  At each backend (classroom/purchases) service
    yarn
    yarn prisma migrate dev
    yarn start:dev
    
  At gateway
    yarn
    yarn start:dev
    
  At web
    yarn
    yarn dev
