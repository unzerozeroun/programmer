# 🧮 Tableau des opérateurs Perl

| Catégorie           | Symbole(s)                   | Description                                  | Exemple                     |
|---------------------|------------------------------|----------------------------------------------|-----------------------------|
| Affectation         | `=`, `+=`, `-=`, `*=`, etc.  | Affecte ou modifie une variable              | `$x += 2;`                  |
| Arithmétique        | `+`, `-`, `*`, `/`, `%`, `**`| Opérations mathématiques                     | `$z = $x * $y;`             |
| Concaténation       | `.`                          | Concatène des chaînes                        | `$s = $a . $b;`             |
| Répétition chaîne   | `x`                          | Répète une chaîne                            | `$line = "-" x 40;`         |
| Comparaison num.    | `==`, `!=`, `<`, `>`, `<=`, `>=` | Compare numériquement                    | `if ($x == 3)`              |
| Comparaison texte   | `eq`, `ne`, `lt`, `gt`, `le`, `ge` | Compare des chaînes                     | `if ($nom eq "Alice")`      |
| Logique             | `&&`, `||`, `!`, `and`, `or`, `not` | Opérateurs logiques                     | `if ($a && $b)`             |
| Bits à bits         | `&`, `|`, `^`, `~`, `<<`, `>>` | Manipulation de bits                       | `$mask = $val & 0xFF;`      |
| Définition          | `defined`                    | Vérifie si une variable est définie          | `defined $var`              |
| Existence clé hash  | `exists`                     | Teste si une clé existe dans un hash         | `exists $h{clé}`            |
| Suppression clé     | `delete`                     | Supprime une clé dans un hash                | `delete $h{clé}`            |
| Fichiers            | `-e`, `-f`, `-d`, etc.        | Teste d’existence/type de fichier            | `-f "fichier.txt"`          |
| Références          | `\`, `@{}`, `${}`, etc.       | Crée ou déréférence une référence            | `$ref = \@tableau;`         |
| RegExp matching     | `=~`, `!~`                    | Correspondance avec expressions régulières   | `$txt =~ /Perl/`            |
| Opérateurs ternaires| `? :`                         | Opérateur conditionnel                       | `$msg = $x ? "OK" : "NON";` |
