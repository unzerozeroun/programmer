#include <stdio.h>

int main() {
    // Un identifiant est un mot qui permet de nommer une variable, une fonction, une structure, etc.
    int a = 1; // Déclare une variable de type entier (int) nommée a et lui affecte la valeur 1.
    float b = 2.0; // Déclare une variable de type flottant (float) nommée b et lui affecte la valeur 2.0.
    double c = 3.0; // Déclare une variable de type flottant double précision (double) nommée c et lui affecte la valeur 3.0.
    char d = 'd'; // Déclare une variable de type caractère (char) nommée d et lui affecte la valeur 'd'.
    printf("a = %d, b = %f, c = %f, d = %c\n", a, b, c, d); // Affiche les valeurs des variables a, b, c et d.
    // %d pour un entier, %f pour un flottant, %c pour un caractère.

    // Les types scalaires sont des types de base, qui ne sont pas composés d'autres types, incluant...
    // - Les entiers (int, short, long, long long, unsigned int, unsigned short, unsigned long, unsigned long long, char, unsigned char)
    // - Les flottants (float, double, long double)
    // - Les caractères (char)
    // - Les booléens (bool)
    // - Les types void (void)
    
    // La taille des types scalaires dépend de l'architecture de la machine peut être révélé via l'opérateur sizeof.
    printf("sizeof(int) = %lu\n", sizeof(int)); // Affiche la taille d'un entier (int) en octets.
    printf("sizeof(float) = %lu\n", sizeof(float)); // Affiche la taille d'un flottant (float) en octets.
    printf("sizeof(double) = %lu\n", sizeof(double)); // Affiche la taille d'un flottant double précision (double) en octets.
    printf("sizeof(char) = %lu\n", sizeof(char)); // Affiche la taille d'un caractère (char) en octets.
    printf("sizeof(bool) = %lu\n", sizeof(_Bool)); // Affiche la taille d'un booléen (_Bool) en octets.
    printf("sizeof(void) = %lu\n", sizeof(void)); // Affiche la taille du type void en octets.
    
    return 0;
}