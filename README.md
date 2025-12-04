# 🌱  Git Commit Generator

Automatski generiše **realistične Git commit-e** tokom dužeg vremenskog perioda. Simulira produktivne valove, vikend ponašanje, islamske praznike i nasumične commit poruke kako bi GitHub graf aktivnosti izgledao prirodnije.

## Funkcionalnosti

*  **Generisanje commit-a** između definisana dva datuma
*  Maksimalno **18 commit-a dnevno** (podesivo)
*  Automatsko **preskakanje praznika**
*  **Produktivni valovi** (sinusna kriva) simuliraju realne periode motivacije
*  **35% šanse za rad vikendom**
*  Nasumično vrijeme commit-a (**10:00 – 20:00**)
*  **Realistične commit poruke**
*  Detaljan **output u konzoli**
*  **Push svih commit-a** na kraju

## 📦 Instalacija

1. Inicijalizuj Node projekat:

    ```bash
    npm init -y
    ```

2. Instaliraj potrebne dependency-je:

    ```bash
    npm install moment simple-git random jsonfile
    ```

3. Pokreni generator:

    ```bash
    node index.js
    ```

## ⚙️ Kako radi?

### Raspon datuma
Definiraš period generisanja commit-a.

```javascript
const startDate = new Date("2025-01-02");
const endDate = new Date("2025-12-03");
```

### Produktivni valovi
Simuliraju realne periode motivacije.

```javascript
Math.sin(dayIndex / 5)
```

### Vikendi i praznici
Rad vikendom je 35% šanse, a praznici se preskaču.

### Nasumični vremenski pečat
Commit-i se generišu između 10:00 i 20:00.

### Commit poruke
Svaka commit poruka je nasumična iz liste.

### Console output
Svaki commit se prikazuje u terminalu:

```
[2025-03-12 14:33:12] Commit: update: manja poboljšanja
```

### Push
Na kraju, svi commit-i se push-aju na GitHub.

### 📁 Struktura projekta
```
📦 tvoj-projekat
 ┣ 📜 index.js        → generator commit-a
 ┣ 📜 data.json       → automatski kreiran fajl sa commit podacima
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┗ 📜 README.md
```
