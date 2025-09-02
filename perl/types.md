| Type de donnée | Symbole | Description                                  | Exemple                          |
|----------------|---------|----------------------------------------------|----------------------------------|
| Scalaire       | `$`     | Représente une seule valeur (nombre, chaîne) | `$x = 42;`, `$nom = "Alice";`    |
| Tableau        | `@`     | Liste ordonnée de scalaires                  | `@nombres = (1, 2, 3);`          |
| Hachage        | `%`     | Paires clé-valeur (dictionnaire)             | `%age = ("Alice", 30, "Bob", 25)`|
| Référence      | `\$`, `\@`, `\%` | Pointeur vers une autre donnée         | `$ref = \@tableau;`              |
| Subroutine     | `&`     | Référence à une fonction                     | `&ma_fonction();`                |
| Type spécial   | `undef` | Valeur indéfinie                             | `$val = undef;`                  |
