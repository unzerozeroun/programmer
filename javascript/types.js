/*
Un identificateur est une séquence de caractères utilisée pour nommer une 
variable, une fonction, une propriété ou un label. Les identificateurs 
peuvent contenir des lettres, des chiffres, des caractères de soulignement 
et des signes de dollar. Les identificateurs doivent commencer par une lettre, 
un caractère de soulignement ou un signe de dollar, mais pas par un chiffre.
*/

// Déclaration de variable de type entier. On peut déclarer une variable sans l'initialiser.
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

// Déclaration d'une variable non initialisée
let sansValeur;

// Déclaration d'une variable null
let x = null;

/*
La différence entre une variable non initialisée et une variable null 
est que la première n'a pas de valeur alors que la deuxième a une valeur nulle.
*/

// Déclaration de classes. 
class D {
    constructor() {
        this.v = `Vous êtes dans la classe D, propriété v, méthode constructor()`;
    }
}

// Affichage à partir d'une classe. On instancie la classe D, puis on affiche la propriété v.
let g = new D();
console.log(g.v);

// Déclaration d'objets
let h = {
    i: `Vous êtes dans l'objet h, propriété i`,
    j: `Vous êtes dans l'objet h, propriété j`
};

// Affichage à partir d'un objet
console.log(h.j);

// Déclaration de tableaux
let k = [6, 7, 8];

// Affichage à partir d'un tableau
console.log(k[2]);

// Déclaration de tableaux associatifs
let l = {
    m: 9,
    n: 10
};

// Affichage à partir d'un tableau associatif
console.log(l['m']);