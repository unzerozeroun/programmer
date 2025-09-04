# Convention de nommage

## Règles de base
| Règle                                   | Exemple valide        | Exemple invalide     |
|----------------------------------------|------------------------|-----------------------|
| Doit commencer par une lettre ou un `_`| `x`, `valeur`, `_temp`| `1val`, `@data`       |
| Peut contenir lettres, chiffres, `_`   | `data2`, `user_name`  | `nom-prénom`, `a*b`   |
| Sensible à la casse (`case sensitive`) | `val` ≠ `Val` ≠ `VAL`  | -                     |
| Ne doit pas être un mot-clé Python     | `list_`, `class1`     | `class`, `for`        |


## Convention PEP 8
| Convention             | Description                                        | Exemple                |
|------------------------|----------------------------------------------------|------------------------|
| snake_case             | Noms de variables et fonctions                     | `total_prix`, `get_nom`|
| UPPER_CASE             | Constantes                                         | `MAX_VITESSE`          |
| _private               | Variable "privée" par convention                  | `_mot_de_passe`        |
| __dunder__             | Méthodes/attributs spéciaux (internes)            | `__init__`, `__str__`  |

## Mots-clés interdits
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 
 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 
 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 
 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 
 'try', 'while', 'with', 'yield']
