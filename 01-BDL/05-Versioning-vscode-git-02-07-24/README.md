# Versioing, VScode, git Programm / Tuesday 02.07.24

- lernen Ziele :

1. `Versionskontrollsysteme`

> - Was ist ein `Versionskontrollsystem` ?

- Bei der Softwareentwicklung benötigst du ein Versionierungssystem

  - Zusammenarbeit
  - Versionierung (denke an 1.0 bis 2.0)

- Diese Systeme helfen bei:

  - Arbeiten an mehreren Versionen deines Projekts
  - Viele Leute arbeiten an der gleichen Datei(en)
  - Code-Review

  - Versionskontrolle ist besonders wichtig, wenn man in einer Gruppe arbeitet
  - Mehrere Personen könnten die gleichen Dateien bearbeiten
  - Es gibt keine praktische Möglichkeit, dies zu verhindern
  - Zwei Personen, die das Gleiche bearbeiten, können einen Konflikt verursachen
  - Versionskontrollsysteme helfen bei diesen Konflikten

2. `VScode extensions und nutzung`

> - Tipps und tricks

> - Extensions herunterladen und propieren

- Hier sind ein paar wichtige wörter:

- `~` -> tilde
- ` -> backtick
- `/` -> slash oder forward slash
- `\` -> backslash
- `-` -> minus oder dash
- `(` und `)` -> parenthesis
- `[` und `]` -> Brackets, square brackets
- `{` und `}` -> curly braces

3. `Git`

> - Das `git` programm:

- Git basiert auf _Repositories_
- Ein Repository ist der Ort, an dem all dein Code gespeichert ist
- Git verfolgt Änderungen an Dateien
- Jeder Ordner, den du hast, kann in ein git-Repository umgewandelt werden
- Du kannst Repositories innerhalb von Repositories haben... aber tu das nicht

  - "Repo" als Abkürzung

- Git verfolgt Änderungen an Dateien

  - Die Historie eines git-Repository wird als "Commits" gespeichert
  - Ein Commit ist ein Satz von Änderungen
  - Ein Commit kann Änderungen an mehreren Dateien enthalten

- Mit Commits kannst du "in der Zeit zurückgehen"
  - Wenn du eine Datei im ersten Commit hinzufügst
  - Und sie im zweiten Commit löschst
  - Kannst du sie immer noch sehen, indem du zum ersten zurückkehrst

> - Git `konfigurieren`:

```sh
    $ git config --global user.name "Joel Peltonen"
	$ git config --global user.email "joel.peltonen@digitalcareerinstitute.org"
```

> - `git init` und der `.git` Ordner

- `git init`:

- Dieser Befehl erstellt einen `.git` Ordner
- Dies enthält alle Repository-Informationen
- Dies enthält alle Versionen aller deiner Dateien

> - `git status` `git add` `git commit` `git log`

- `git status` :

- Zeigt Informationen über dein Repo
- Dies ist wohl der wichtigste git-Befehl

- `git-add`:

- Für neue Dateien macht dies git Änderungen daran verfolgen
- Mit `git add` kannst du wählen, welche Änderungen für einen Commit ausgewählt werden
- Du möchtest vielleicht nicht immer alle Änderungen in einem Commit haben

- `git commit`:

- Das Befehl deinen Satz von Änderungen in der Historie deines Projekts
- du musst eine Nachricht bereitstellen!
- Diese Nachricht beschreibt deinen Satz von Änderungen
- Die Nachricht kann eine oder mehrere Zeilen haben

- `git log`:

- Dies gibt dir eine Auflistung aller Commits
- Hier kannst du die konfigurierten Namen und die E-Mail sehen!

## Beispiel :

```sh
    $ git init
    $ git status -> status sehen
    $ git add recipes.txt -> recipes datei staging
    $ git status
    $ git add . -> alle Datein und Ordnen staging
    $ git commit -m "Add pancake recipe" -> nachricht beschreibt was gemacht worde
```

## Resources :

- [Versionskontrollesysteme](https://learn.microsoft.com/de-de/devops/develop/git/what-is-version-control)

- [Git und Github Tutorials](https://youtube.com/playlist?list=PLNmsVeXQZj7rbmmqb1Lt_RGU4DEhelTrR&si=Qc9unVtr063t4_Bp)

- [Beste 20 Extensions VScode](https://x-team.com/blog/best-vscode-extensions)

- [git cheat sheet](./assets/git-cheat-sheet-education.pdf)
