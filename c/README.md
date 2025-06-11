# C

Lire le [README](../README.md) à la racine si ce n'est pas déjà fait.

## Installation

Windows [MSYS2](https://www.msys2.org) 

macOS [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

Documentation du compilateur [GCC](https://gcc.gnu.org/onlinedocs/)

## L'ajout de commentaires en C

```
// Sur une ligne

/*
Sur plusieurs
lignes
*/
```

## Contenu

- [Hello World!](hw.c) afficher une chaine de caractères.
- [Les types](types.c)

## Compilation
````
# Compilation
clang -o <nom_du_fichier> <nom_du_fichier>.c
# Exécution
./<nom_du_fichier>

# OU utiliser le makefile 
make run FILE=<nom_du_fichier>

# Nettoyage
make clean FILE=<nom_du_fichier>
````
