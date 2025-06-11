/*
Compilation :
    clang -o hw hw.c
Exécution :
    ./hw
OU considérant le makefile tout simplement 
    make run FILE=hw
*/

#include <stdio.h> // Cette ligne inclut le fichier d'en-tête standard d'entrée/sortie pour utiliser la fonction printf.

int main() { // Définit la fonction principale main qui est le point d'entrée de chaque programme en C.
    printf("Hello World!\n"); // Affiche le texte "Hello World!" suivi d'un retour à la ligne.
    return 0; // Retourne 0, qui signifie que le programme s'est exécuté sans erreur.
}
