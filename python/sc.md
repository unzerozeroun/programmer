# 🔁 Tableau des structures de contrôle en Python

| Structure        | Syntaxe de base                                 | Description                                              |
|------------------|--------------------------------------------------|----------------------------------------------------------|
| `if`, `elif`, `else` | `if condition:`                             | Conditionnelle, avec clauses supplémentaires              |
| `match`, `case`  | `match var:\n  case val:` (Python 3.10+)        | Pattern matching (équivalent de `switch`)                |
| `for`            | `for x in iterable:`                            | Boucle sur un itérable (liste, string, range, etc.)      |
| `while`          | `while condition:`                              | Boucle tant que la condition est vraie                   |
| `break`          | `break`                                         | Interrompt la boucle immédiatement                       |
| `continue`       | `continue`                                      | Passe à l’itération suivante                             |
| `pass`           | `pass`                                          | Ne fait rien (placeholder)                               |
| `else` (avec boucle) | `for ... else:` / `while ... else:`        | S'exécute si la boucle **n'est pas interrompue**         |
| `try`, `except`  | `try:\n  ... \nexcept:`                         | Gestion des exceptions                                   |
| `finally`        | `finally:`                                      | Bloc toujours exécuté après `try`/`except`              |
| `raise`          | `raise Exception("message")`                    | Déclenche une exception                                  |
| `with`           | `with open(...) as f:`                          | Gestion de contexte (fichiers, verrous, etc.)            |
| `assert`         | `assert condition, "message"`                   | Vérifie une condition, lève AssertionError sinon         |
| `lambda`         | `lambda x: x + 1`                               | Fonction anonyme                                         |
| `yield`          | `yield valeur`                                  | Produit une valeur dans une fonction génératrice         |
| `yield from`     | `yield from iterable`                           | Délègue à un autre générateur                            |
| `return`         | `return valeur`                                 | Quitte une fonction et renvoie une valeur                |
| `global`         | `global x`                                      | Utilise/modifie une variable globale dans une fonction   |
| `nonlocal`       | `nonlocal x`                                    | Modifie une variable d’un scope englobant                |
