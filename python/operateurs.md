# Opérateurs

| Catégorie              | Symbole / Mot-clé     | Nom de l’opérateur              | Exemple               | Description |
|------------------------|-----------------------|----------------------------------|------------------------|-------------|
| **Affectation**        | `=`                   | Assignation                     | `x = 5`               | Assigne la valeur 5 à x |
|                        | `+=`, `-=`, `*=`, ... | Affectation composée            | `x += 1`              | Incrémente x de 1 (équivaut à `x = x + 1`) |
| **Arithmétique**       | `+`                   | Addition                        | `3 + 2`               | Additionne deux nombres |
|                        | `-`                   | Soustraction                    | `5 - 1`               | Soustrait deux nombres |
|                        | `*`                   | Multiplication                  | `4 * 2`               | Multiplie deux nombres |
|                        | `/`                   | Division                        | `10 / 3`              | Division flottante |
|                        | `//`                  | Division entière                | `10 // 3`             | Division entière (quotient) |
|                        | `%`                   | Modulo                          | `10 % 3`              | Reste de la division entière |
|                        | `**`                  | Exponentiation                  | `2 ** 3`              | Élève à la puissance |
| **Comparaison**        | `==`                  | Égalité                         | `x == y`              | Vrai si x est égal à y |
|                        | `!=`                  | Différent                       | `x != y`              | Vrai si x est différent de y |
|                        | `>`                   | Supérieur                       | `x > y`               | Vrai si x est supérieur à y |
|                        | `<`                   | Inférieur                       | `x < y`               | Vrai si x est inférieur à y |
|                        | `>=`                  | Supérieur ou égal               | `x >= y`              | Vrai si x ≥ y |
|                        | `<=`                  | Inférieur ou égal               | `x <= y`              | Vrai si x ≤ y |
| **Logique**            | `and`                 | ET logique                      | `x > 0 and y < 5`     | Vrai si les deux conditions sont vraies |
|                        | `or`                  | OU logique                      | `x > 0 or y < 5`      | Vrai si au moins une est vraie |
|                        | `not`                 | NON logique                     | `not x`              | Inverse la vérité |
| **Bits à bits**        | `&`                   | ET binaire                      | `a & b`               | Compare bit à bit |
|                        | `|`                   | OU binaire                      | `a | b`               | Compare bit à bit |
|                        | `^`                   | OU exclusif (XOR)               | `a ^ b`               | Compare bit à bit |
|                        | `~`                   | NON binaire                     | `~a`                  | Inverse tous les bits |
|                        | `<<`                  | Décalage à gauche               | `a << 1`              | Multiplie par 2^1 |
|                        | `>>`                  | Décalage à droite               | `a >> 2`              | Divise par 2^2 |
| **Appartenance**       | `in`                  | Appartenance                    | `'a' in 'chat'`       | Vrai si l’élément est dans la séquence |
|                        | `not in`              | Non-appartenance                | `'z' not in 'chat'`   | Vrai si l’élément n’est **pas** présent |
| **Identité**           | `is`                  | Identité                        | `x is y`              | Vrai si x et y sont le **même objet** |
|                        | `is not`              | Non-identité                    | `x is not y`          | Vrai si ce ne sont **pas** le même objet |
| **Autres**             | `lambda`              | Fonction anonyme                | `lambda x: x + 1`     | Crée une fonction courte |
|                        | `:=`                  | Opérateur Walrus                | `(n := len(liste))`   | Assigne et retourne en une seule expression (depuis Python 3.8) |

# Priorités
| Rang | Opérateurs                                  | Description                                      | Associativité       |
|------|---------------------------------------------|--------------------------------------------------|---------------------|
| 1    | `()`                                         | Parenthèses (groupement)                         | -                   |
| 2    | `x[index]`, `x(attr)`, `x.attr`, `x[:]`      | Indexation, appel, accès attribut, slicing       | Gauche à droite     |
| 3    | `**`                                         | Exponentiation                                   | Droite à gauche     |
| 4    | `+x`, `-x`, `~x`                             | Unaires : plus, moins, inversion binaire         | Droite à gauche     |
| 5    | `*`, `/`, `//`, `%`                          | Multiplication, division, modulo                 | Gauche à droite     |
| 6    | `+`, `-`                                     | Addition, soustraction                           | Gauche à droite     |
| 7    | `<<`, `>>`                                   | Décalages bit à bit                              | Gauche à droite     |
| 8    | `&`                                          | ET binaire                                       | Gauche à droite     |
| 9    | `^`                                          | XOR binaire                                      | Gauche à droite     |
| 10   | `|`                                          | OU binaire                                       | Gauche à droite     |
| 11   | `in`, `not in`, `is`, `is not`, `==`, `!=`, `<`, `<=`, `>`, `>=` | Comparaisons | Gauche à droite     |
| 12   | `not`                                        | Négation logique                                 | Droite à gauche     |
| 13   | `and`                                        | ET logique                                       | Gauche à droite     |
| 14   | `or`                                         | OU logique                                       | Gauche à droite     |
| 15   | `:=`                                         | Walrus (affectation dans expression, Python 3.8+)| Droite à gauche     |
| 16   | `=` , `+=`, `-=`, `*=`, `/=`, `//=`, `**=`, `%=`, `&=`, `|=`, `^=`, `>>=`, `<<=` | Affectation | Droite à gauche |
