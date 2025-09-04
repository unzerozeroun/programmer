# 🔁 Tableau des structures de contrôle Perl

| Structure      | Syntaxe de base                            | Description                               |
|----------------|---------------------------------------------|-------------------------------------------|
| `if`, `elsif`, `else` | `if ($x > 0) { ... }`             | Conditions                                 |
| `unless`       | `unless ($x) { ... }`                      | Exécute si condition **fausse**           |
| `while`        | `while (condition) { ... }`                | Boucle tant que                          |
| `until`        | `until (condition) { ... }`                | Boucle jusqu'à ce que                    |
| `for`          | `for (my $i = 0; $i < 10; $i++) { ... }`   | Boucle avec initialisation                |
| `foreach`      | `foreach my $val (@liste) { ... }`         | Boucle sur une liste                      |
| `next`         | `next;`                                    | Continue à l’itération suivante           |
| `last`         | `last;`                                    | Interrompt la boucle                      |
| `redo`         | `redo;`                                    | Recommence l’itération **sans tester**    |
| `goto`         | `goto LABEL;`                              | Saute à un label                          |
| `do { ... } while ()` | Post-conditionnelle              | Exécute au moins une fois                |
