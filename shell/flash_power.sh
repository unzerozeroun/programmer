#!/bin/bash

# Vérifie si les arguments sont fournis
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <GN> <ISO> <F>"
    echo "  GN  : Nombre guide à ISO 100"
    echo "  ISO : Sensibilité ISO utilisée"
    echo "  F   : Ouverture (ex. 1.7)"
    exit 1
fi

# Récupère les arguments
GN=$1
ISO=$2
F=$3

# Calcule le facteur d'augmentation du GN en fonction de l'ISO
ISO_FACTOR=$(echo "scale=4; sqrt($ISO / 100)" | bc)

# Calcule le GN ajusté pour l'ISO
GN_ADJUSTED=$(echo "scale=4; $GN * $ISO_FACTOR" | bc)

# Calcule la portée
RANGE=$(echo "scale=2; $GN_ADJUSTED / $F" | bc)

# Affiche le résultat
echo "Avec GN=$GN, ISO=$ISO, ƒ=$F :"
echo "La portée du flash est d'environ $RANGE mètres."