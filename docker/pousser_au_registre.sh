#!/bin/bash

REGISTRY="localhost:5005"
IMAGE_NAME="$1"
TAG="${2:-latest}"

if [ -z "$IMAGE_NAME" ]; then
  echo "Usage: $0 <image_name> [tag]"
  exit 1
fi

FULL_IMAGE="$REGISTRY/$IMAGE_NAME:$TAG"

echo "🔧 Build de l'image : $FULL_IMAGE"
docker build -t "$FULL_IMAGE" .

echo "⬆️  Push de l'image vers le registre local..."
docker push "$FULL_IMAGE"
