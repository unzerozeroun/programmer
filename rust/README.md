# Rust

Lire le [README](../README.md) à la racine si ce n'est pas déjà fait.

## Installation
[rust-lang.org](https://www.rust-lang.org/fr/tools/install)

Vérifier l'installation
````
rustc --version
cargo --version
rustdoc --version
````
**Cargo** gère les dépendances, télécharge et construit les librairies externes et exécute `rustc` avec les paramètres adéquats.


### Mise à jour et désinstallation
````
rustup update
rustup self uninstall
````

## Hello World!
La commande `new` va créer la base dans un dossier **hello** et `run` va compiler en mode *debug* le fichier **main.rs** du dossier **src**, et publier les fichiers construits dans un dossier **target** avant d'exécuter le script. La commande `clean` efface les fichiers construits (modes *debug* et *release*).
````
cargo new hello
cd hello
cargo run
cargo clean
````

#### Construction en mode *release* `cargo build --release` 
