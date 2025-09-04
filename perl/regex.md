# 🧾 Tableau des expressions régulières en Perl

| Syntaxe        | Description                                         | Exemple                                     |
|----------------|-----------------------------------------------------|---------------------------------------------|
| `m//`          | Teste une correspondance                            | `$txt =~ m/foo/`                            |
| `//`           | Raccourci pour `m//`                                | `$txt =~ /foo/`                             |
| `s///`         | Substitution (remplacement)                         | `$txt =~ s/foo/bar/`                        |
| `tr///`        | Translittération (caractère par caractère)          | `$txt =~ tr/a-z/A-Z/`                       |
| `qr//`         | Compile une regex pour la réutiliser                | `my $re = qr/\d+/; $x =~ $re`               |
| `!~`           | Négation de correspondance                          | `$txt !~ /abc/`                             |
| `(?i)`         | Modificateur d’insensibilité à la casse             | `$x =~ /abc/i` ou `$x =~ /(?i)abc/`         |
| `(?m)`         | Multiligne : `^` et `$` matchent lignes internes    | `$txt =~ /^(foo)/m`                         |
| `(?s)`         | Point `.` inclut les sauts de ligne                 | `/foo.*bar/s`                               |
| `(?x)`         | Mode "extended", permet commentaires dans regex     | `/foo \s+ bar/x`                            |
| `^`, `$`       | Début / fin de chaîne                               | `/^Hello/`, `/fin$/`                        |
| `.`            | N’importe quel caractère (sauf saut de ligne)       | `/a.c/`                                     |
| `*`, `+`, `?`  | Quantificateurs : 0+ , 1+ , 0 ou 1                   | `/ab*/`, `/ab+/`, `/ab?/`                   |
| `{n,m}`        | Répétition entre n et m fois                        | `/a{2,4}/`                                  |
| `[]`           | Classe de caractères                                | `/[a-zA-Z]/`                                |
| `()`           | Capture de groupes                                  | `($x) = $txt =~ /(\d+)/;`                   |
| `(?:...)`      | Groupe non capturant                                | `/(?:foo|bar)/`                             |
| `|`            | OU logique dans les alternatives                    | `/chien|chat/`                              |
| `\d`, `\w`, `\s`| Raccourcis : chiffre, mot, espace                   | `/\d+` = un ou plusieurs chiffres           |
| `\b`           | Limite de mot                                       | `/\bmot\b/`                                 |
