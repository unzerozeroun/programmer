# Types

## Base
| Type Python       | Nom complet              | Exemple                  | Description |
|-------------------|--------------------------|---------------------------|-------------|
| `int`             | Integer (entier)         | `42`, `-7`               | Nombre entier, positif ou négatif |
| `float`           | Floating point (réel)    | `3.14`, `-0.001`         | Nombre à virgule flottante |
| `complex`         | Complex number           | `2 + 3j`, `1j`           | Nombre complexe avec partie imaginaire |
| `bool`            | Boolean (booléen)        | `True`, `False`          | Valeur de vérité |
| `str`             | String (chaîne de texte) | `"hello"`, `'abc'`       | Chaîne de caractères (Unicode) |
| `bytes`           | Bytes                    | `b"data"`                | Données binaires immuables |
| `bytearray`       | Bytearray                | `bytearray(b"abc")`      | Données binaires modifiables |
| `list`            | Liste                    | `[1, 2, 3]`              | Séquence modifiable d’éléments |
| `tuple`           | Tuple                    | `(1, 2, 3)`              | Séquence immuable d’éléments |
| `range`           | Range                    | `range(0, 10)`           | Séquence de nombres entiers |
| `dict`            | Dictionnaire             | `{"key": "value"}`       | Table de correspondance clé/valeur |
| `set`             | Set (ensemble)           | `{1, 2, 3}`              | Collection non ordonnée d’éléments uniques |
| `frozenset`       | Frozen set               | `frozenset([1, 2, 3])`   | Ensemble immuable |
| `NoneType`        | None                     | `None`                   | Représente l’absence de valeur |

## Avancé
| Type `typing`     | Description                                        | Exemple d'utilisation                     |
|-------------------|----------------------------------------------------|-------------------------------------------|
| `Any`             | Accepte n'importe quel type                        | `def func(x: Any) -> None:`               |
| `Union[X, Y]`     | Valeur de type X **ou** Y                          | `Union[int, str]`                         |
| `Optional[X]`     | Raccourci pour `Union[X, None]`                    | `Optional[int]` équivaut à `int | None`   |
| `List[X]`         | Liste contenant des éléments de type X             | `List[int]` pour une liste d'entiers      |
| `Tuple[X, Y]`     | Tuple avec des types spécifiques par position      | `Tuple[int, str]`                         |
| `Tuple[X, ...]`   | Tuple avec un nombre variable d’éléments de type X | `Tuple[int, ...]`                         |
| `Dict[K, V]`      | Dictionnaire avec des clés de type K, valeurs V    | `Dict[str, int]`                          |
| `Set[X]`          | Ensemble d’éléments de type X                      | `Set[str]`                                |
| `FrozenSet[X]`    | Ensemble immuable d’éléments de type X             | `FrozenSet[int]`                          |
| `Iterable[X]`     | Objet pouvant être parcouru (for ...)              | `Iterable[str]`                           |
| `Iterator[X]`     | Itérateur produisant des éléments de type X        | `Iterator[int]`                           |
| `Callable`        | Fonction ou objet appelable                        | `Callable[[int, str], bool]`             |
| `Literal[X, Y]`   | Valeur doit être exactement X ou Y                 | `Literal["GET", "POST"]`                 |
| `TypeVar`         | Représente un type générique                       | `T = TypeVar('T')`                        |
| `Generic`         | Classe ou fonction générique                       | `class Stack(Generic[T])`                |
| `Annotated`       | Type enrichi d’informations annexes                | `Annotated[int, "positive"]`             |
| `Final`           | Indique qu’un nom ou type ne doit pas être redéfini| `Final[int]` ou `MAX: Final = 100`       |
| `ClassVar[X]`     | Variable de classe, pas d’instance                 | `ClassVar[str]`                          |
| `Self`            | Type représentant l'instance de la classe elle-même| `def clone(self) -> Self:`               |
