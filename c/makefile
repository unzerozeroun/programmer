# Compilateur et options
CC = clang
CFLAGS = -Wall -Wextra -O2

# Valeur par défaut si FILE n'est pas fourni
FILE ?= main

# Nom du fichier source et exécutable
SRC = $(FILE).c
OUT = $(FILE)

# Règle par défaut : compiler
all: $(OUT)

# Compilation
$(OUT): $(SRC)
	$(CC) $(CFLAGS) -o $(OUT) $(SRC)

# Exécution du programme compilé
run: $(OUT)
	./$(OUT)

# Nettoyage
clean:
	rm -f $(OUT)
