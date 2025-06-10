# Conteneur minimaliste Alpine

## Construction de l'image et création et démarrage d'un conteneur
```
./docker_build.sh
```
Identifier son IMAGE ID (hash unique)
````
docker image ls --filter reference="*alpine*"
````
Accéder au conteneur
````
docker run -it --rm mini_alpine:dev sh
````
## Résumé des commandes BusyBox (Alpine)
````
docker run -it --rm mini_alpine:dev sh
# ls /bin
````

On peut faire <CMD> --help pour afficher les options de chacune.

| Commande       | Description brève |
|----------------|-------------------|
| `arch`         | Affiche l’architecture (ex : x86_64). |
| `ash`          | Shell léger (équivalent de `sh`). |
| `base64`       | Encode/décode en Base64. |
| `bbconfig`     | Affiche la configuration de BusyBox. |
| `cat`          | Affiche le contenu d’un fichier. |
| `chattr`       | Modifie les attributs d’un fichier. |
| `chgrp`        | Change le groupe d’un fichier. |
| `chmod`        | Modifie les permissions. |
| `chown`        | Change le propriétaire/groupe. |
| `cp`           | Copie des fichiers. |
| `date`         | Affiche ou définit la date/heure. |
| `dd`           | Copie de données brute. |
| `df`           | Affiche l’espace disque utilisé. |
| `dmesg`        | Affiche les messages du noyau. |
| `dnsdomainname`| Affiche le nom de domaine DNS. |
| `dumpkmap`     | Dump du keymap clavier. |
| `echo`         | Affiche une ligne de texte. |
| `egrep`        | `grep` avec regex étendues. |
| `false`        | Renvoie un code d’erreur (1). |
| `fatattr`      | Attributs de fichiers FAT. |
| `fdflush`      | Vide le cache des disquettes. |
| `fgrep`        | `grep` sans regex. |
| `fsync`        | Écrit les buffers sur disque. |
| `getopt`       | Parse les options de commande. |
| `grep`         | Recherche du texte avec regex. |
| `gunzip`       | Décompresse un fichier `.gz`. |
| `gzip`         | Compresse en format `.gz`. |
| `hostname`     | Affiche ou définit le hostname. |
| `ionice`       | Définit la priorité I/O. |
| `iostat`       | Statistiques CPU/disques. |
| `ipcalc`       | Infos sur une IP/netmask. |
| `kbd_mode`     | Change le mode clavier. |
| `kill`         | Envoie un signal à un processus. |
| `link`         | Crée un lien physique. |
| `linux32`      | Emule un environnement 32 bits. |
| `linux64`      | Emule un environnement 64 bits. |
| `ln`           | Crée un lien symbolique ou dur. |
| `login`        | Connexion utilisateur. |
| `ls`           | Liste les fichiers. |
| `lsattr`       | Affiche les attributs fichiers. |
| `lzop`         | Compression rapide (type gzip). |
| `makemime`     | Crée un message MIME. |
| `mkdir`        | Crée un répertoire. |
| `mknod`        | Crée un fichier spécial. |
| `mktemp`       | Fichier temporaire unique. |
| `more`         | Affiche un texte page par page. |
| `mount`        | Monte un système de fichiers. |
| `mountpoint`   | Vérifie un point de montage. |
| `mpstat`       | Statistiques CPU. |
| `mv`           | Déplace ou renomme. |
| `netstat`      | Affiche les connexions réseau. |
| `nice`         | Change la priorité d’un processus. |
| `pidof`        | Trouve le PID d’un processus. |
| `ping`         | Envoie un ping (IPv4). |
| `ping6`        | Envoie un ping (IPv6). |
| `pipe_progress`| Affiche la progression via pipe. |
| `printenv`     | Affiche les variables env. |
| `ps`           | Affiche les processus. |
| `pwd`          | Répertoire courant. |
| `reformime`    | Analyse un message MIME. |
| `rev`          | Inverse les lignes de texte. |
| `rm`           | Supprime un fichier. |
| `rmdir`        | Supprime un répertoire vide. |
| `run-parts`    | Exécute des scripts dans un dir. |
| `sed`          | Édite du texte via script. |
| `setpriv`      | Change les privilèges d’un processus. |
| `setserial`    | Configure un port série. |
| `sh`           | Lien vers `ash`, shell de commande. |
| `sleep`        | Attend un délai. |
| `stat`         | Infos détaillées d’un fichier. |
| `stty`         | Configure le terminal. |
| `su`           | Change d’utilisateur. |
| `sync`         | Vide les caches vers disque. |
| `tar`          | Archive/désarchive des fichiers. |
| `touch`        | Met à jour l’horodatage/crée fichier. |
| `true`         | Renvoie toujours succès (0). |
| `umount`       | Démonte un système de fichiers. |
| `uname`        | Infos système (noyau, archi…). |
| `usleep`       | Pause en microsecondes. |
| `watch`        | Exécute une commande en boucle. |
| `zcat`         | Décompresse un `.gz` vers stdout. |
