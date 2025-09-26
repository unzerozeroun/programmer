#!/bin/bash

# Vérifier si un nom de solution a été fourni
if [ -z "$1" ]; then
  echo "Usage: $0 <SolutionName>"
  exit 1
fi

SOLUTION_NAME=$1
PROJECT_NAME="${SOLUTION_NAME}App"

# Créer le répertoire de la solution
mkdir $SOLUTION_NAME
cd $SOLUTION_NAME

# Créer une nouvelle solution .NET
dotnet new sln -n $SOLUTION_NAME

# Créer un nouveau projet de type console
dotnet new console -n $PROJECT_NAME

# Ajouter le projet à la solution
dotnet sln add $PROJECT_NAME/$PROJECT_NAME.csproj

# Naviguer dans le répertoire du projet
cd $PROJECT_NAME

# Restaurer les dépendances et construire le projet
dotnet restore
dotnet build

# Exécuter le projet
dotnet run
