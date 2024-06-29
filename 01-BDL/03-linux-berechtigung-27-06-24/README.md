# - Linux-Berechtigungen Mittwoch 27-06-24

- Was bedeutet Berechtigung ?

- Was ist Benutzer und Gruppen in linux ?

- Benutzerberechtigungen in Linux basieren auf Benutzern, Gruppen und Berechtigungen
- Alle Dateien und Ordner haben einen zugewiesenen Benutzer und eine Gruppe
- In der Ausgabe von `ls -l` kannst du alle drei sehen

Beispiel :

```
drwxr--r-- 1 John John    0 Feb 22 14:00 Porjects
-rwxrw---- 1 John John    4118 Jan 01 13:00 user.txt

```

- Das erste Zeichen `-` gibt uns den Typ an - `-rw-rw-r--` ist eine Datei - `drw-rw-r--` ist ein Verzeichnis

- Die eigentlichen Berechtigungen sind in Dreiergruppen - r = read (lesen) - w = write (schreiben) - x = execute (ausführen)

- Was ist sudo Befehl ? `super user do`

- "Erweiterte Berechtigungen" = mehr Berechtigungen als jeder normale Benutzer
- Benötigt zum Beispiel zum Installieren von Programmen
- Für diese Fälle benötigst du wahrscheinlich `sudo` (Super User DO)
- Sicherheitsfunktion
- In Linux, Unix usw. gibt es immer einen Superbenutzer

  - Genannt `root`
  - Der Root-Benutzer hat die Berechtigungen, alles zu tun
  - Du solltest nicht als Root angemeldet sein (meiner Meinung nach auch nicht auf Servern)
  - Die Verwendung von `sudo` ist nicht _genau_ das Gleiche wie Root zu sein
  - Aber es ist ziemlich ähnlich

- Wie kann man update, upgrade und Programme installieren ?

```sh
$ sudo apt update && sudo apt upgrade -> update und upgrade packages in betriebsystem

$ sudo apt autoremove -> unnötige datein und packages werden gelöscht

$ sudo apt install cmatrix -> install cmatrix package

$ cmatrix -> ausführen cmatrix app

$ sudo apt remove cmatrix -> löschen cmatrix package
```

## Resorces :

- [Linux Berechtigung](https://www.redhat.com/sysadmin/linux-file-permissions-explained)

## Übungen

- - Installiere `neofetch` mit `apt` (und probiere es aus)
- - Installiere `chromium` mit `snap` (und probiere es aus)
- - Installiere `sl` (und probiere es aus). Welchen Befehl hast du verwendet?
- - Installiere `cowsay` (und probiere es aus). Welchen Befehl hast du verwendet?
- - Recherche: Was ist `chromium`?
- - Aktualisiere deine Paketliste vom Terminal aus. Welchen Befehl hast du verwendet?
- - Was ist `sudo` und was ermöglicht es dir zu tun?
