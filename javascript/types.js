/*
Un identificateur est une séquence de caractères utilisée pour nommer une 
variable, une fonction, une propriété ou un label. Pouvant contenir des 
lettres, chiffres, caractères de soulignement et des signes de dollar,
les identificateurs doivent cependant commencer par une lettre, 
un caractère de soulignement ou un signe de dollar, mais pas par un chiffre.
*/

// Déclaration de variable de type entier.
let entier = 1;

// Affichage de variable.
console.log(entier);

// Affichage du type d'une variable. 
console.log(typeof entier);

/* 
Déclaration de constante de type réel. 
Une constante ne peut pas être modifiée. 
On ne peut pas déclarer une constante sans l'initialiser. 
L'identificateur d'une constante est généralement en majuscules.
*/
const REEL = 3.14;

// Déclaration de variables de type chaîne de caractères
let chaine = `Coucou!`;

// Déclaration de variables de type booléen
let booleen = true;

// Déclaration d'une variable sans l'initialiser. Elle n'a pas de valeur.
let sansValeur;

// Déclaration d'une variable null. Elle a une valeur nulle.
let x = null;

/*
La différence entre une variable non initialisée et une variable null 
est que la première n'a pas de valeur alors que la deuxième a une valeur nulle.
*/


/*
Déclaration de tableaux. 
Le nom d'un tableau commence par une minuscule. 
Un tableau est un objet dont les indices sont des entiers.
*/
let tableau = [`Vous êtes dans l'élément d'indice 0`, `Vous êtes dans l'élément d'indice 1`];

// Affichage à partir d'un tableau
console.log(tableau[1]); // Accès de la valeur de l'élément d'indice 1. Notation indexée.

/* 
Déclaration de tableaux associatifs. 
Un tableau associatif est un objet dont les indices sont des chaînes de caractères.
*/
let associatif = {
    m: 9,
    n: 10
};

// Affichage à partir d'un tableau associatif.
console.log(associatif['m']); // Accès de la valeur de la clé m. Notation associée.

/* 
Déclaration d'objet. 
Un objet est une collection de propriétés, chaque propriété étant une paire clé/valeur.  
Le nom d'un objet commence par une minuscule.
*/
let objet = {
    i: `Vous êtes dans propriété i`,
    j: `Vous êtes dans propriété j`
};

// Affichage à partir d'un objet
console.log(objet.j);

// Déclaration de classes. Le nom d'une classe commence par une majuscule.
class Exemple {
    constructor() { // Le constructeur est une méthode qui s'exécute lors de l'instanciation de la classe.
        this.v = `Vous êtes dans la classe Exemple, propriété v, méthode constructor()`; // "this" fait référence à l'objet courant.   
    }
}

// On instancie la classe D, puis on affiche la propriété v. L'instanciation crée un objet avec la propriété v.
let instance = new Exemple();
console.log(instance.v); // Accès à la propriété v de l'objet instance de la classe Exemple par notation pointée.