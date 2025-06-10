# Docker

## Variables
- ARG : argument de construction
- ENV : variable d'environnement
'''
docker build --build-arg VAR_NAME=value .
'''

## Sécurité
En production, les conteneurs devraient quasiment toujours tourner avec les droits d’un utilisateur non privilégié.
'''
# Crée un utilisateur sans privilèges
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change l'utilisateur pour l'exécution
USER appuser
'''

## Amorce
'''
sudo systemctl enable docker
sudo systemctl start docker
'''

