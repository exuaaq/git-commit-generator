import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";
import fs from "fs";

const git = simpleGit();
const DATA_PATH = "./data.json";

// Vremenski raspon
const startDate = new Date("2025-11-02");
const endDate = new Date("2025-12-03");

// Maksimalno commit-a dnevno
const MAX_COMMITS = 18;

// Praznici
const holidays = [
    "2024-04-10", // Bajram
    "2024-06-16", // Kurban bajram
];

// Produktivni valovi (sinusna krivulja)
function productivityWave(dayIndex) {
    const intensity = Math.sin(dayIndex / 5) * 0.5 + 0.5;
    return Math.max(1, Math.floor(intensity * MAX_COMMITS));
}

// Šansa da radiš vikendom
function shouldWorkToday(date) {
    const day = date.getDay();
    if (day === 0 || day === 6) return Math.random() < 0.35;
    return true;
}

// Random vrijeme za commit
function randomCommitTime(date) {
    const hour = random.int(10, 20);
    const minute = random.int(0, 59);
    const second = random.int(0, 59);
    return moment(date).hour(hour).minute(minute).second(second);
}

// Kreiranje data.json ako ne postoji
if (!fs.existsSync(DATA_PATH)) {
    jsonfile.writeFileSync(DATA_PATH, { commits: [] }, { spaces: 2 });
}

// Nasumične commit poruke
function getRandomCommitMessage(count) {
    const messages = [
        "refaktor: čišćenje koda",
        "update: manja poboljšanja",
        "fix: ispravka greške",
        "stil: popravljeno formatiranje",
        "chore: automatski commit",
        "update: ažuriran kod",
        `auto-commit #${count}`,
    ];
    return messages[random.int(0, messages.length - 1)];
}

// Funkcija za generisanje commit-a
async function generateCommits() {
    let current = moment(startDate);
    let dayIndex = 0;

    while (current.isBefore(endDate)) {
        const dateStr = current.format("YYYY-MM-DD");

        // Preskoci praznike
        if (holidays.includes(dateStr)) {
            console.log(` Preskačem praznik: ${dateStr}`);
            current.add(1, "day");
            dayIndex++;
            continue;
        }

        // Preskoci vikend po šansi
        if (!shouldWorkToday(current.toDate())) {
            console.log(` Preskačem vikend dan: ${dateStr}`);
            current.add(1, "day");
            dayIndex++;
            continue;
        }

        // Broj commit-a za taj dan
        const commitsToday = productivityWave(dayIndex);
        console.log(`\nDatum: ${dateStr} → planirano ${commitsToday} commit-a`);

        for (let i = 0; i < commitsToday; i++) {
            const commitTimestamp = randomCommitTime(current.toDate());
            const msg = getRandomCommitMessage(i + 1);
            const iso = commitTimestamp.toISOString();

            console.log(`  [${commitTimestamp.format("YYYY-MM-DD HH:mm:ss")}] Commit: ${msg}`);

            // Čitanje i inicijalizacija data.json
            let data = {};
            if (fs.existsSync(DATA_PATH)) {
                data = jsonfile.readFileSync(DATA_PATH);
            }
            if (!data.commits) data.commits = [];

            // Dodavanje commita
            data.commits.push({ date: iso, message: msg });
            jsonfile.writeFileSync(DATA_PATH, data, { spaces: 2 });

            // Git commit
            await git.add(DATA_PATH);
            await git.commit(msg, { "--date": iso });
        }

        current.add(1, "day");
        dayIndex++;
    }

    console.log("\nGenerisanje commit-a završeno.");

    // Push svega na kraju
    await git.push("origin", "main"); // promijeni 'main' ako tvoja grana ima drugo ime
    console.log("Svi commit-i su push-ani na GitHub.");
}

generateCommits();
