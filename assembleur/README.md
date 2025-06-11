# Assembleur

Lire le [README](../README.md) à la racine si ce n'est pas déjà fait.

## Reverse ingenering
Observons sous le capot comment le langage C se transforme en instructions assembleur, sans chercher à devenir expert en bas niveau, juste observer, explorer et s’émerveiller un peu !

### Compiler et exécuter la source main.c
```bash
# Compilation C → Assembleur : À quoi ressemble l’assembleur généré ? Voir main.s
gcc -S main.c
# Assemblage → Objet : Comment on transforme du texte assembleur en objet ?
as -o main.o main.s
# Linkage → Exécutable : Comment on construit un binaire exécutable ?
clang -o main main.o
# Exécution
./main

# OU exploiter le makefile...
make run FILE=main
# ...puis pour nettoyer
make clean FILE=main
```

## Explorer
Les fichiers .o, ou fichiers objet, sont des fichiers binaires contenant le code machine généré par l'assemblage (ou la compilation) de votre code source. Ils ne sont pas destinés à être lus directement par des humains. Cependant, vous pouvez utiliser des outils comme objdump ou otool (sur macOS) pour inspecter le contenu des fichiers objet de manière plus lisible.

### Utiliser `objdump` 
Si vous avez objdump installé (disponible via les outils de développement GNU sur Linux ou via Homebrew sur macOS), vous pouvez l'utiliser pour afficher le contenu d'un fichier objet sous forme de désassemblage, ce qui vous donne une vue lisible du code machine :

```bash 
objdump -d main.o
```

Cette commande affiche le code désassemblé contenu dans main.o, vous permettant de voir le code machine sous forme de mnémoniques d'assembleur.

### Utiliser `otool` sur macOS

Sur macOS, otool offre des fonctionnalités similaires. Pour voir le contenu d'un fichier objet en format lisible, utilisez :

```bash
otool -tv main.o
```

Cette commande affiche le code machine désassemblé du fichier objet.

Ces outils sont particulièrement utiles pour comprendre comment le compilateur ou l'assembleur a traduit votre code source en instructions machine, pour l'optimisation du code ou pour le débogage de bas niveau.

Si vous êtes intéressé par d'autres informations contenues dans le fichier objet, comme les symboles ou les sections, objdump et otool offrent également des options pour ces types d'inspection. Par exemple, pour lister les symboles dans un fichier objet avec otool, vous pouvez utiliser :

```bash
otool -Iv main.o
```

Et avec objdump, pour voir les symboles :

```bash
objdump -t main.o
```

Ces commandes vous donnent un aperçu des différents symboles (fonctions, variables) présents dans le fichier objet, qui peuvent être utiles pour le débogage ou l'analyse de la structure du programme.
 
## ⚙️ Options d’optimisation du compilateur (-O, -O1, -O2, -O3, etc.)

| Option   | Description succincte                                                              | Usage recommandé                                |
| -------- | ---------------------------------------------------------------------------------- | ----------------------------------------------- |
| `-O0`    | 🔴 **Aucune optimisation** — code brut et lisible                                  | Pour le **debug**, ou observer l'ASM            |
| `-O1`    | 🟡 Optimisation légère (taille et vitesse)                                         | Code + rapide, mais lisible                     |
| `-O2`    | 🟢 Optimisation standard (sans prendre de risques de bugs)                         | Idéal pour un bon **compromis perf/lisibilité** |
| `-O3`    | 🔵 Optimisation agressive (vectorisation, inlining fort, etc.)                     | Pour la **performance brute**                   |
| `-Os`    | 📦 Optimisation pour réduire la taille du binaire                                  | Pour embarqué ou petit code                     |
| `-Ofast` | 🚀 Optimisation extrême : autorise des simplifications risquées                    | Performance max, ⚠️ peut casser du code         |
| `-Og`    | 🛠️ Optimisation pour **debugger** (comme `-O0`, mais avec quelques optimisations) | Meilleur que `-O0` pour debug                   |

### 🔍 Exemples pratiques
```bash
gcc -S -O0 prog.c -o prog_O0.s   # Code assembleur lisible, non optimisé
gcc -S -O2 prog.c -o prog_O2.s   # Optimisé de façon classique
gcc -S -O3 prog.c -o prog_O3.s   # Très optimisé, plus complexe à lire
```
