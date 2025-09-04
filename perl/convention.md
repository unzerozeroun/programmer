# 📛 Tableau des conventions de nommage en Perl

| Élément                 | Conventions recommandées                 | Exemple                         |
|--------------------------|-------------------------------------------|----------------------------------|
| Variables scalaires      | `snake_case`, descriptif                | `$user_name`, `$total_price`    |
| Tableaux (listes)        | Pluriels en `snake_case`                | `@user_ids`, `@lines`           |
| Hashes                   | Préfixe contextuel (`%user_info`)       | `%config`, `%error_codes`       |
| Variables privées        | Commencent par `_` (par convention)     | `$_internal_var`                |
| Variables globales       | Lettres capitales, souvent avec `our`   | `our $VERSION`                  |
| Fichiers (`filehandles`) | MAJUSCULES                              | `STDIN`, `STDOUT`, `LOGFILE`    |
| Fonctions                | `snake_case`, verbes descriptifs        | `get_data()`, `process_input()` |
| Méthodes OO              | `snake_case` ou `camelCase` selon style | `$obj->parse_data()`            |
| Modules                 | `CamelCase`, 1 mot = 1 niveau namespace | `MyApp::User`, `DB::Driver`     |
| Constantes               | MAJUSCULES + underscores                | `MAX_RETRIES`, `PI`             |
| Références de type       | Préfixées (`$href`, `$aref`)            | `$href = \%hash;`               |
| Classes (OO)             | CamelCase                                | `User`, `DatabaseDriver`        |
