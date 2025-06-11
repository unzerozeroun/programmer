# Usage : make run FILE=hw

# Nom de base du fichier (sans extension)
FILE ?= main

# Outils utilisés
CC = gcc
AS = as
LD = clang

# Fichiers intermédiaires
SRC = $(FILE).c
ASM = $(FILE).s
OBJ = $(FILE).o
EXE = $(FILE)

# Étape 1 : génération du fichier assembleur (.s)
$(ASM): $(SRC)
	$(CC) -S $(SRC) -o $(ASM)

# Étape 2 : assemblage en fichier objet (.o)
$(OBJ): $(ASM)
	$(AS) -o $(OBJ) $(ASM)

# Étape 3 : linkage pour produire l’exécutable
$(EXE): $(OBJ)
	$(LD) -o $(EXE) $(OBJ)

# Compilation complète
all: $(EXE)

# Exécution du programme
run: $(EXE)
	./$(EXE)

# Nettoyage
clean:
	rm -f $(ASM) $(OBJ) $(EXE)
