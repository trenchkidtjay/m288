# Dokumentation: Erstellung der Tic Tac Toe-Website

## HTML

### Schritt 1: Grundlegende HTML-Struktur
Zu Beginn habe ich eine grundlegende HTML-Datei erstellt, die die erforderlichen Strukturelemente wie `<!DOCTYPE html>`, `<html>`, `<head>` und `<body>` enthält. Ich habe auch die Metadaten für das Zeichensatz und die Ansichtsgröße festgelegt.

### Schritt 2: Aufbau der Spieloberfläche
Die Spieloberfläche wurde strukturiert, indem ich die notwendigen Container für das Spielraster, den Status-Text, den Titel und den Neustart-Button erstellt habe. Dies wurde mithilfe von `<div>`-Elementen und `<h1>`, `<h2>` sowie `<button>`-Tags umgesetzt.

### Schritt 3: Hinzufügen der Spielzellen
Innerhalb des Spielraster-Containers wurden neun Spielzellen durch `<div>`-Elemente mit den entsprechenden Klassen und Attributen erstellt, um später die Interaktivität mit JavaScript zu ermöglichen.

### Probleme:
- Ein Problem bestand darin, dass das Hintergrund-GIF beim Neustart des Spiels nicht korrekt zurückgesetzt wurde. Dies wurde jedoch durch eine Anpassung des JavaScript-Codes gelöst, um den Hintergrund auf einen schwarzen Bildschirm zu setzen.

## CSS

### Schritt 1: Grundlegende Styling-Struktur
Die CSS-Datei wurde erstellt, um das Aussehen und Layout der Webseite zu gestalten. Ich habe begonnen, grundlegende Stile wie Schriftart, Textausrichtung und Hintergrundfarbe für den Spielcontainer festzulegen.

### Schritt 2: Styling der Spielzellen und Spieloberfläche
Die Spielzellen wurden durch CSS so gestaltet, dass sie eine feste Größe und einen weißen Rand haben. Der Spielcontainer wurde zentriert und mit einem schwarzen Hintergrund versehen. Zusätzlich wurden Stile für den Titel, den Status-Text und den Neustart-Button festgelegt.

### Probleme:
- Ein Problem bestand darin, dass das Hintergrund-GIF auf der Webseite scrollbar war. Dies wurde durch Hinzufügen von `overflow: hidden;` im CSS des Spielcontainers behoben.

## JavaScript

### Schritt 1: Grundlegende Funktionalität hinzufügen
JavaScript wurde verwendet, um die interaktive Funktionalität des Tic Tac Toe-Spiels zu implementieren. Dies umfasste das Wechseln zwischen den Spielern, das Überprüfen auf Gewinne oder Unentschieden und das Aktualisieren des Spielstatus.

### Schritt 2: Implementierung der Spiellogik
Die Spiellogik wurde entwickelt, um Gewinner zu überprüfen, das Spiel zurückzusetzen und die Benutzeroberfläche entsprechend zu aktualisieren. Dazu gehörte auch das Abspielen eines Gewinner-Audios und das Aktualisieren des Hintergrundbilds.

### Probleme:
- Ein Problem bestand darin, dass das Hintergrund-GIF beim Neustart des Spiels nicht korrekt zurückgesetzt wurde. Dies wurde durch eine Anpassung der `resetGame()`-Funktion gelöst, um den Hintergrund auf einen schwarzen Bildschirm zu setzen.

## Schlussfolgerung
Die Erstellung der Tic Tac Toe-Website war ein iterativer Prozess, der das Zusammenspiel von HTML, CSS und JavaScript erforderte. Durch die schrittweise Entwicklung und das Lösen auftretender Probleme konnte eine funktionsfähige und ästhetisch ansprechende Webseite erstellt werden.
