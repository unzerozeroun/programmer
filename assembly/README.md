# Reverse ingenering
## Créer un hw.c


```
#include <stdio.h>  
int main(int argc, const char * argv[]) 
{     
  // insert code here...     
  printf("Hello, World!\n");     
  return 0; 
}
```
## Compiler
```
gcc -S hw.c
as -o hw.o hw.s
clang -o hw hw.o
./hw
```

Les fichiers .o, ou fichiers objet, sont des fichiers binaires contenant le code machine généré par l'assemblage (ou la compilation) de votre code source. Ils ne sont pas destinés à être lus directement par des humains. Cependant, vous pouvez utiliser des outils comme objdump ou otool (sur macOS) pour inspecter le contenu des fichiers objet de manière plus lisible.

### Utiliser objdump
Si vous avez objdump installé (disponible via les outils de développement GNU sur Linux ou via Homebrew sur macOS), vous pouvez l'utiliser pour afficher le contenu d'un fichier objet sous forme de désassemblage, ce qui vous donne une vue lisible du code machine :

```objdump -d main.o```

Cette commande affiche le code désassemblé contenu dans main.o, vous permettant de voir le code machine sous forme de mnémoniques d'assembleur.

### Utiliser otool sur macOS

Sur macOS, otool offre des fonctionnalités similaires. Pour voir le contenu d'un fichier objet en format lisible, utilisez :

```otool -tv main.o```

Cette commande affiche le code machine désassemblé du fichier objet.

Ces outils sont particulièrement utiles pour comprendre comment le compilateur ou l'assembleur a traduit votre code source en instructions machine, pour l'optimisation du code ou pour le débogage de bas niveau.

Si vous êtes intéressé par d'autres informations contenues dans le fichier objet, comme les symboles ou les sections, objdump et otool offrent également des options pour ces types d'inspection. Par exemple, pour lister les symboles dans un fichier objet avec otool, vous pouvez utiliser :

```otool -Iv main.o```

Et avec objdump, pour voir les symboles :

```objdump -t main.o```


Ces commandes vous donnent un aperçu des différents symboles (fonctions, variables) présents dans le fichier objet, qui peuvent être utiles pour le débogage ou l'analyse de la structure du programme.
 
