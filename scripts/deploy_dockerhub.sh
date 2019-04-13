#!/bin/bash
echo "Doing your production deployment to DockerHub...."
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push $DOCKER_USERNAME/$IMAGE_NAME
echo "Done! deployed to DockerHub SUCCESSFULLY"