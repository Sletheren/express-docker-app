#!/bin/bash
echo "Doing your staging deployment to heroku...."
# Heroku CLI Install
wget -qO- https://toolbelt.heroku.com/install.sh | sh
echo "$HEROKU_PASSWORD" | docker login -u "$HEROKU_USERNAME" --password-stdin registry.heroku.com
docker tag $IMAGE_NAME registry.heroku.com/$IMAGE_NAME/web
docker push registry.heroku.com/$IMAGE_NAME/web
heroku container:release web --app $IMAGE_NAME
echo "Done! deployed to Heroku SUCCESSFULLY"