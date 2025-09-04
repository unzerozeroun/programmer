# 📁 Tableau des fonctions intégrées de gestion des fichiers en Perl

| Fonction        | Description                                         | Exemple                                           |
|------------------|-----------------------------------------------------|--------------------------------------------------|
| `open`           | Ouvre un fichier ou un flux                        | `open my $fh, '<', 'fichier.txt';`              |
| `close`          | Ferme un descripteur de fichier                    | `close $fh;`                                     |
| `print`          | Écrit dans un fichier (ou STDOUT)                  | `print $fh "Hello\n";`                           |
| `say`            | Écrit avec saut de ligne (Perl 5.10+)              | `say $fh "Texte";`                               |
| `read`           | Lit un nombre précis d’octets                      | `read($fh, $buffer, 100);`                       |
| `sysread`        | Lit des données bas niveau                         | `sysread($fh, $buf, 512);`                       |
| `write`          | Écrit en utilisant un format prédéfini             | `write;` (nécessite un format)                  |
| `syswrite`       | Écriture bas niveau                                | `syswrite($fh, $data, length($data));`           |
| `seek`           | Positionne le curseur dans le fichier              | `seek($fh, 0, 0);`                               |
| `tell`           | Donne la position actuelle dans le fichier         | `my $pos = tell($fh);`                          |
| `eof`            | Teste la fin de fichier                            | `eof($fh)` ou `eof`                             |
| `<HANDLE>`       | Lit une ligne du fichier                          | `my $line = <$fh>;`                             |
| `getc`           | Lit un seul caractère                              | `my $char = getc($fh);`                         |
| `truncate`       | Tronque un fichier                                 | `truncate($fh, 0);`                             |
| `binmode`        | Force le mode binaire                              | `binmode($fh);`                                 |
| `unlink`         | Supprime un ou plusieurs fichiers                  | `unlink 'fichier.txt';`                         |
| `rename`         | Renomme un fichier                                 | `rename 'ancien.txt', 'nouveau.txt';`           |
| `chmod`          | Change les permissions (octal !)                   | `chmod 0644, 'monfichier.txt';`                 |
| `chown`          | Change le propriétaire                             | `chown $uid, $gid, 'monfichier.txt';`           |
| `stat`           | Donne les infos système d’un fichier               | `my @info = stat($fh);`                         |
| `lstat`          | Comme `stat` mais ne suit pas les liens symboliques| `my @info = lstat($lien);`                      |
| `utime`          | Modifie les dates d’accès/modification             | `utime time, time, 'fichier.txt';`              |
| `select`         | Change temporairement la sortie par défaut         | `select $fh; print ">>>\n"; select STDOUT;`     |
| `opendir`        | Ouvre un dossier                                   | `opendir my $dir, ".";`                         |
| `readdir`        | Lit les fichiers d’un dossier                      | `my @fichiers = readdir($dir);`                 |
| `closedir`       | Ferme un dossier ouvert                            | `closedir($dir);`                               |
| `mkdir`          | Crée un répertoire                                 | `mkdir "dossier";`                              |
| `rmdir`          | Supprime un répertoire vide                        | `rmdir "dossier";`                              |
