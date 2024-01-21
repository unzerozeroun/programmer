// Déclaration de fonctions
function multiplier(a, b) 
{
    return a * b;
}
  
console.log(multiplier(5, 3)); // Affichera 15


class Calculateur {
    constructor(s) {
        this.nom = s; // Initialisation d'une propriété 'nom'
    }

    multiplier(a, b) {
        return a * b;
    }

    afficherNom() {
        console.log(`Calculateur: ${this.nom}`);
    }
}

let calc = new Calculateur("SuperCalc");
calc.afficherNom(); // Affichera "Calculateur: SuperCalc"
console.log(calc.multiplier(5, 3)); // Affichera 15

  
  