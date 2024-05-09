# Rust

## Installation
[rust-lang.org](https://www.rust-lang.org/fr/tools/install)

Vérifier l'installation
````
rustc --version
cargo --version
rustdoc --version
````

### Mise à jour et désinstallation
````
rustup update
rustup self uninstall
````

## Hello World!
La commande `new` va créer la base dans un dossier *hello* et `run` va compiler le fichier *main.rs* du dossier *src* et tout déposer dans le dossier *target* avant d'excuter le script. La commande `clean` effacera ensuite les fichiers construits dans le dossier *target*.
````
cargo new hello
cd hello
cargo run
cargo clean
````
