# Branching / Wednesday 03.07.24

- Lernen Ziele :

1. Durch die Git-Historie navigieren:

- Wenn wir haben normalerweise mehrere Commits

```sh
$ git log --oneline -> Zeige log
$ 123gh45v merged process branch
$ rf34543 Edited user file
$ 12er4f5 Project started

$ git checkout rf34543 -> wechsel zu älterem commit

$ git checkout main -> zurück zu dem, wo wor waren
```

2. Branching (Verzweigen) und mergen (zusammenführen)

- `git checkout -b <name-of-branch>`

  - Es gibt verschiedene Möglichkeiten, einen Branch zu erstellen
  - Dies ist das, was wir empfehlen
  - HINWEIS

    - Achte darauf, auf welchem Branch du dich gerade befindest
    - Der neue Branch wird vom aktuellen Branch erstellt

- `git checkout <branch>`

  - Es gibt verschiedene Möglichkeiten, zu wechseln, auf welchem Branch du dich befindest

- `git branch -a`

  - Listet alle Branches auf

- `git branch -m <name>`

  - Benennt den aktuellen Branch um

- `git merge <target>`

  - Führt den Zielbranch in den aktuellen ein

- Wichtiger Hinweis zu Branches
  - Zwei Branches können Änderungen an derselben Datei enthalten
  - Beim Zusammenführen kann dies einen "Konflikt" verursachen
  - Konflikte müssen gelöst werden, um den Merge abzuschließen
  - Konflikte können komplex sein

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
