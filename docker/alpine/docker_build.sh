#!/bin/bash

# Variables
PROJECT_NAME="mini_alpine"
IMAGE_NAME="${PROJECT_NAME}:dev"
CONTAINER_NAME="${PROJECT_NAME}_$(date +%Y%m%d_%H%M%S)"

# Build de l'image
echo "🛠️  Construction de l'image Docker..."
docker build -t $IMAGE_NAME .

# Exécution du conteneur avec un nom unique
echo "▶️  Lancement du conteneur nommé : $CONTAINER_NAME"
docker run -it --rm --name "$CONTAINER_NAME" $IMAGE_NAME
