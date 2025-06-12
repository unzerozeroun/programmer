# 🐳 Docker

Si ce n'est pas déjà fait, consulter le [README](../README.md) à la racine afin d'installer les outils de base.

## Qu'est-ce que Docker ?
Docker est un outil qui permet d'exécuter des applications dans des *conteneurs* — des environnements isolés, reproductibles et portables. Grâce à Docker, une application peut être "emballée" avec tout ce dont elle a besoin (code, bibliothèques, configuration) et fonctionner de la même manière partout : en développement, en test, en production ou dans le cloud. Contrairement aux machines virtuelles, les conteneurs Docker sont légers et rapides, car ils partagent le noyau de l'hôte tout en restant isolés.  

✅ Utilisation typique : standardiser l’environnement de déploiement, lancer des services (web, base de données, scripts) ou tester du code sans *polluer* sa machine.

## Amorce sous macOS
Démarrer simplement Docker Desktop afin d'initialiser le démon Docker (*dockerd*) à l'intérieur d'une machine virtuelle légère Linux.

# Images
## Recherche d'une image publique
```bash
# Trouver un image pour PHP
docker search php
```

## Téléchargement d'images
```bash
docker pull ubuntu:latest
# ou pour une version spécifique 
docker pull ubuntu@sha256:b59d21599a2b151e23eea5f6602f4af4d7d31c4e236d22bf0b62b86d2e386b8f
```

## Construction
Utiliser un image sans rien y ajouter ? On démarre illico avec [docker run](#conteneurs), sinon on rédige un Dockerfile et on construit l'image.
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
## Variables
- ARG : argument de construction
- ENV : variable d'environnement
```bash
docker build --build-arg VAR_NAME=value .
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

| Option                          | Description                                                              | Exemple                               |
|----------------------------------|---------------------------------------------------------------------------|----------------------------------------|
| `--name <nom>`                  | Donne un nom explicite au conteneur                                      | `--name mon_web`                       |
| `--rm`                          | Supprime automatiquement le conteneur à la fin                           | `--rm`                                 |
| `-d`                            | Lance le conteneur en arrière-plan (daemon)                              | `-d`                                   |
| `-it`                           | Mode interactif avec terminal (`-i` + `-t`)                               | `-it`                                  |
| `-p <hôte>:<conteneur>`         | Redirige un port local vers un port du conteneur                         | `-p 8080:80`                           |
| `-v <hôte>:<conteneur>`         | Monte un volume local dans le conteneur                                  | `-v $(pwd):/app`                       |
| `-e <VAR>=<valeur>`             | Définit une variable d’environnement                                      | `-e ENV=production`                   |
| `--env-file <fichier>`          | Charge plusieurs variables d’environnement depuis un fichier             | `--env-file .env`                      |
| `--network <nom>`               | Connecte le conteneur à un réseau Docker existant                        | `--network mon_reseau`                |
| `--label <clé>=<valeur>`        | Ajoute une étiquette personnalisée (métadonnée)                          | `--label team=dev`                    |
| `--entrypoint <commande>`       | Remplace le point d’entrée défini dans l’image                           | `--entrypoint /bin/sh`                |
| `--restart <policy>`            | Politique de redémarrage (`no`, `always`, `on-failure`, etc.)            | `--restart always`                    |
| `--privileged`                  | Donne des privilèges étendus au conteneur (accès matériel, etc.)         | `--privileged`                        |


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

# 🏷️ Étiquettes 
Les labels Docker sont des paires clé=valeur qu'on peut attacher à un conteneur, une image, un volume, un réseau, etc.
```bash
docker run -d \
  --name mon-app \
  --label env=prod \
  --label maintainer="toi@example.com" \
  nginx
```
## Example dans un fichier YAML
```bash
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    labels:
      env: "dev"
      app: "frontend"
      maintainer: "toi@example.com"
```


# 💾 Volumes

Un **volume Docker** permet de **stocker des données de manière persistante**, indépendamment du cycle de vie des conteneurs. Il est idéal pour :

- Sauvegarder des fichiers (bases de données, logs…)
- Partager des données entre plusieurs conteneurs
- Garder les données même après suppression d’un conteneur

---

## ✅ Syntaxe de base
```bash
docker volume create data_vol
docker run -v data_vol:/app/data busybox touch /app/data/fichier.txt
docker run -v data_vol:/data busybox ls /data
```

## 🧰 Commandes Docker utiles pour les volumes
| Commande                           | Description                                      |
| ---------------------------------- | ------------------------------------------------ |
| `docker volume create mon_volume`  | Crée un nouveau volume nommé                     |
| `docker volume ls`                 | Liste tous les volumes existants                 |
| `docker volume inspect mon_volume` | Détails sur un volume (chemin réel, metadata...) |
| `docker volume rm mon_volume`      | Supprime un volume (s'il n’est pas utilisé)      |
| `docker volume prune`              | Supprime tous les volumes non utilisés           |


# ⚙️ Système
Deux commandes pour afficher les infos
```bash
docker version
docker system info
```
