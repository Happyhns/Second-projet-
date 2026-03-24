function calculMoyenne(notes) {
    try {
        if (!Array.isArray(notes)) throw "Notes invalides";

        let sum = 0;
        for (let i = 0; i < notes.length; i++) {
            if (typeof notes[i] !== "number") throw "Erreur note";
            sum += notes[i];
        }

        return notes.length ? (sum / notes.length).toFixed(2) : 0;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

function getBestStudent() {
    let best = null;
    let bestAvg = -1;

    students.forEach(student => {
        let avg = parseFloat(calculMoyenne(student.notes));
        if (avg > bestAvg) {
            bestAvg = avg;
            best = student;
        }
    });

    return best;
}