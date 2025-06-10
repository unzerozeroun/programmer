# Docker

## Amorce
```
sudo systemctl enable docker
sudo systemctl start docker
```

## Recherche d'une image publique
````
docker search php
````

## Variables
- ARG : argument de construction
- ENV : variable d'environnement
```
docker build --build-arg VAR_NAME=value .
```

## Construction
````
docker build [OPTIONS] -t <nom_image>:<tag> <chemin_contexte>
````
| Option                       | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `-t` ou `--tag`              | Nom et tag de l’image (`ex: monapp:1.0`)     |
| `-f` ou `--file`             | Spécifie un `Dockerfile` personnalisé        |
| `--build-arg <nom>=<valeur>` | Passe une variable `ARG` au Dockerfile       |
| `--no-cache`                 | Ignore le cache Docker (builds plus propres) |
| `--target`                   | Build une étape spécifique (multi-stage)     |
| `--platform`                 | Définit la plateforme (`linux/amd64`, etc.)  |
| `--progress=plain`           | Affiche les logs de build plus lisiblement   |
| `--rm` / `--force-rm`        | Supprime les conteneurs intermédiaires       |

Pour afficher les étapes on peut exploiter `DOCKER_BUILDKIT=0 docker built -t ... `

### Pousser dans DockerHub
````
docker build -t <DockerHubUserName>/<nom_image>:<tag> .
docker push <DockerHubUserName>/<nom_image>:<tag>
````
#### Pour un registre local
Voir aussi `pousser_au_registre.sh`
````
docker run -d -p 5005:5000 --name registre_local registry:2
docker build -t localhost:5005/mini_alpine:dev .
docker push localhost:5005/mini_alpine:dev
# Ici, la liste est visible via http://localhost:5005/v2/_catalog
````

## Exportation
````
docker container export <ID> -o fichier.tar
tar -tvf fichier.tar

## Sécurité
En production, les conteneurs devraient quasiment toujours tourner avec les droits d’un utilisateur non privilégié.
```
# Crée un utilisateur sans privilèges
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change l'utilisateur pour l'exécution
USER appuser
```


