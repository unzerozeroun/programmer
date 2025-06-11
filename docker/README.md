# 🐳 Docker

Lire le [README](../README.md) à la racine si ce n'est pas déjà fait.

## Amorce
```bash
sudo systemctl enable docker
sudo systemctl start docker
```
# Images

## Recherche d'une image publique
```bash
# Trouver un image pour PHP
docker search php
```

## Variables
- ARG : argument de construction
- ENV : variable d'environnement
```bash
docker build --build-arg VAR_NAME=value .
```

## Construction
```bash
docker build [OPTIONS] -t <nom_image>:<tag> <chemin_contexte>
```
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
```bash
docker build -t <DockerHubUserName>/<nom_image>:<tag> .
docker push <DockerHubUserName>/<nom_image>:<tag>
```

#### Pour un registre local
Voir `docker-compose.yml`
```bash
docker compose up -d
```
- `docker compose up -d` : démarrage en mode détaché (en arrière-plan).
- `docker compose down` : arrête et supprime les conteneurs créés.
- `docker compose build` : construit les images sans les exécuter.
- `docker compose config` : vérifie et affiche la configuration effective.

Voir `pousser_au_registre.sh`
```bash
docker run -d -p 5005:5000 --name registre_local registry:2
docker build -t localhost:5005/mini_alpine:dev .
docker push localhost:5005/mini_alpine:dev
# Ici, la liste est visible via http://localhost:5005/v2/_catalog
```

## 🔐 Sécurité
En production, les conteneurs devraient quasiment toujours tourner avec les droits d’un utilisateur non privilégié.
```bash
# Crée un utilisateur sans privilèges
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change l'utilisateur pour l'exécution
USER appuser
```

#  Conteneurs

## ▶️ Lancer / Exécuter
```bash
docker run hello-world                  # Test de base
docker run -it ubuntu bash              # Shell interactif
docker run -d -p 8080:80 nginx          # Serveur nginx en background
```

## 🛠️ Principales options de `docker run`

| Option                         | Description |
|--------------------------------|-------------|
| `--name <nom>`                | Donne un nom explicite au conteneur |
| `--rm`                        | Supprime le conteneur automatiquement après son arrêt |
| `-d`                          | Lance le conteneur en arrière-plan (mode daemon) |
| `-it`                         | Mode interactif avec terminal (`-i` + `-t`) |
| `-p <hôte>:<conteneur>`       | Mappe un port local vers le conteneur (ex: `-p 8080:80`) |
| `-v <hôte>:<conteneur>`       | Monte un volume (ex: `-v $(pwd):/app`) |
| `-e VAR=valeur`               | Définit une variable d’environnement |
| `--network <nom>`             | Connecte à un réseau Docker |
| `--entrypoint <commande>`     | Redéfinit le point d’entrée par défaut |
| `--privileged`                | Donne des droits système étendus |
| `--restart always`            | Redémarre automatiquement le conteneur après un arrêt |

---

## 📂 Gestion des conteneurs
```bash
docker ps                               # Conteneurs en cours
docker ps -a                            # Tous les conteneurs
docker stop <nom|id>                    # Arrêter un conteneur
docker start <nom|id>                   # Démarrer un conteneur arrêté
docker restart <nom|id>                 # Redémarrer
docker rm <nom|id>                      # Supprimer un conteneur arrêté
docker rm -f <nom|id>                   # Forcer la suppression
docker container prune                  # Supprimer tous les conteneurs arrêtés
```

## 🔍 Inspection et interaction
```bash
docker logs <nom|id>                    # Voir les logs
docker exec -it <nom|id> bash           # Entrer dans un conteneur
docker cp fichier.txt <id>:/app/        # Copier un fichier vers un conteneur
docker inspect <nom|id>                 # Infos détaillées (JSON)
```

## Exportation
```bash
docker container export <ID> -o fichier.tar
tar -tvf fichier.tar
```

