# Branching / Wednesday 03.07.24

- Lernen Ziele :

1. Durch die Git-Historie navigieren

2. Branching (Verzweigen) und mergen (zusammenführen)

## Resources :

- [Advanced git log](https://www.atlassian.com/git/tutorials/git-log)

- [git branching](https://www.atlassian.com/git/tutorials/using-branches)

- [Git game lerning](https://ohmygit.org/)

## Übungen

- - Recherche: Wie kannst du einen Branch löschen
- - Versuche: `rm` eine Datei, die Git verfolgt und versuche `git status`
- - Versuche: `mv` eine Datei, die Git verfolgt und versuche `git status`
- - Erstelle ein neues Projekt namens `animal-shelter`
- - Öffne es in VS Code
- - Füge eine Datei namens README.txt hinzu, die besagt, dass dies ein Tierheim ist
- - Füge mit dem Terminal hinzu und commit
- - Füge einen Ordner für Hunde hinzu
- - Füge zwei Textdateien für Hunde hinzu
- - Füge hinzu, commit
- - Erstelle einen Branch "adoption-process"
- \*\* In diesem Branch, erstelle "process.txt" (dann füge hinzu und commit)
- - Wechsle zurück zum Hauptbranch
- \*\* Füge einen Ordner für Kühe hinzu
- \*\* Füge zwei Textdateien für Kühe hinzu
- \*\* Füge hinzu, commit
- - Merge den "adoption-process" Branch in den Hauptbranch
- - Versuche diesen Befehl: "git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
