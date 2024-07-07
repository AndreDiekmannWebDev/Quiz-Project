# Merging und Konflikte / Montag 08.07.24

- lernen Ziele :

1. Zusammenarneit mit Guthub.

2. merging

3. Koflikte

4. Code-Review und Pull Request

5. Assessment

## Resources :

- [Git teamwork guide](https://github.com/meyskens/git-teamwork-guide/blob/master/workflow.md)

- [Git merge Docs](https://git-scm.com/docs/git-merge)

- [Git Konflikte lösen](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

- [Resolving Conflicts VScode](https://www.youtube.com/watch?v=dpahpzY5Lyk)

## Übung :

### Individuel Übung:

1. Erstelle ein neues Git-Repository.

2. Erstelle eine README-Datei und füge diese zum Repository hinzu.

3. Erstelle und wechsle zu einem neuen Branch namens `feature-branch`.

4. Bearbeite die README-Datei und füge eine neue Zeile hinzu.

5. Wechsle zurück zum `main` Branch.

6. Bearbeite die README-Datei und füge eine andere Zeile hinzu.

7. Versuche, den `feature-branch` in den `main` Branch zu mergen.

8. Du wirst einen Merge-Konflikt sehen.

9. Löse den Konflikt, indem du die Datei manuell bearbeitest.

10. Nachdem du die Konflikte gelöst hast, füge die Datei wieder hinzu und committe die Änderungen.

## Abschluss

Du hast erfolgreich gelernt, wie man Branches merged und Merge-Konflikte in Git löst. Glückwunsch!

#

### Teamarbeit übung

### 1. Repository erstellen

1. Ein `Teammitglied` erstellt ein neues Git-Repository auf GitHub und lädt die anderen `Teammitglieder` als Collaborators ein.

2. Klont das Repository auf eure lokalen Rechner

### 2. Hauptdatei erstellen

1. Ein `Teammitglied` erstellt eine README-Datei und fügt diese zum Repository hinzu

### 3. Feature Branches erstellen

1. Jedes Teammitglied erstellt und wechselt zu einem eigenen Feature Branch.

2. Bearbeitet die README-Datei und fügt eine eigene Zeile hinzu

### 4. Pull Requests erstellen

1. Jedes `Teammitglied` erstellt einen Pull Request von seinem Feature Branch zum `main` Branch im GitHub-Repository.

### 5. Merge Konflikte simulieren

1. Ein `Teammitglied` wechselt zum `main` Branch und fügt eine andere Zeile zur README-Datei hinzu.

```sh
   git add README.md
   git commit -m "Added main branch changes to README"
   git push origin main
```

2. Ein weiteres `Teammitglied` versucht, seinen Feature Branch mit dem `main` Branch zu mergen

```sh
    git checkout main
    git pull origin main
    git checkout feature-branch-<name>
    git merge main
```

3. Ihr werdet einen `Merge-Konflikt` sehen.

4. Das `Teammitglied` löst den Konflikt, indem es die Datei manuell bearbeitet.

5. Nachdem der Konflikt gelöst ist, fügt das `Teammitglied` die Datei wieder hinzu und committet die Änderungen.

### 6. Pull Requests abschließen

1. Jedes `Teammitglied` wiederholt den Merge-Prozess, löst eventuelle Konflikte und merged seine Änderungen in den `main` Branch durch die entsprechenden Pull Requests.

## Abschluss

Ihr habt `erfolgreich` gelernt, wie man im Team Branches merged und Merge-Konflikte in Git löst. Glückwunsch!
