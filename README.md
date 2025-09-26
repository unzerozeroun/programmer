# Programmer

## Construction d'un environnement sous macOS 🍎
Les quatre outils de base...  
![Icons](icons.png)

### 🖥️ Terminal
- Le Terminal est déjà installé, mais on va ajouter la suite d'outils pour les langages bas niveau (C, C++, Assembleur ARM64)
```bash
# Supprime l'ancienne version des CLT
sudo rm -rf /Library/Developer/CommandLineTools
# Réinstalle les outils de développement Apple de base (sans installer Xcode complet)
xcode-select --install
```
✅ Outils fournis
- clang : compilateur C/C++
- as : assembleur (Apple, ARM64)
- clang (ou ld) : linker
- lldb : débogueur
- make : système de build
- man : pages de manuel (ex: man as, man gcc)
- Fichiers headers système (/usr/include, stdio.h, etc.)

### Visual Studio Code
- Installer VSC [Visual Studio Code](https://code.visualstudio.com/download)

### GIT
- Installer un gestionnaire de version [Git](https://git-scm.com/download) 
```bash
# Vérification suivant l’installation…
git --version
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```
- Créer un compte [GitHub](https://github.com/)

### Docker
- Installer [Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/)
```bash
# Vérification suivant l’installation…
docker version
``` 

### Optionnel
  - Installer [GitHub Desktop](https://desktop.github.com/)
  - Créer un compte [ChatGPT](https://chat.openai.com/)
  - S'abonner à [GitHub Copilot](https://github.com/features/copilot/plans)

## Au menu
- 🛠️ [Assembleur](/assembleur/)
- [C](/c/)
- [C++](/cpp/)
- [C#](/csharp/)
- 🐳 [Docker](/docker/)
- [JavaScript](/javascript/)
  - [TypeScript](/javascript/typescript/)
- 🐫 [Perl](/perl/)
- 🐘 [PHP](/php/)
- 🐍 [Python](/python/)
- 🦀 [Rust](/rust/)
  - [WebAssembly](/rust/webassembly/)
- [Shell](/shell/)
