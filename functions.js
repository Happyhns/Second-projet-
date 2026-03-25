function calculMoyenne(notes) { // calculer la moyenne des notes d'un étudiant
    try {
        if (!Array.isArray(notes)) throw "Notes invalides"; // vérifier que les notes sont un tableau

        let sum = 0; // initialiser la somme des notes à 0
        for (let i = 0; i < notes.length; i++) { // parcourir les notes
            if (typeof notes[i] !== "number") throw "Erreur note"; // vérifier que chaque note est un nombre
            sum += notes[i]; // ajouter la note à la somme
        }

        return notes.length ? (sum / notes.length).toFixed(2) : 0; // calculer et retourner la moyenne, arrondie à 2 décimales, ou 0 si aucune note
    } catch (error) { // gérer les erreurs et afficher un message d'alerte
        console.error(error); // afficher l'erreur dans la console pour le développeur
        return 0; // retourner 0 en cas d'erreur pour éviter de casser l'affichage de la moyenne
    }
}

function getBestStudent() { // trouver le meilleur étudiant en fonction de la moyenne de ses notes
    let best = null; // initialiser la variable pour stocker le meilleur étudiant
    let bestAvg = -1; // initialiser la variable pour stocker la meilleure moyenne, en partant de -1 pour s'assurer que toute moyenne valide sera supérieure

    students.forEach(student => { // parcourir la liste des étudiants
        let avg = parseFloat(calculMoyenne(student.notes)); // calculer la moyenne des notes de l'étudiant et la convertir en nombre
        if (avg > bestAvg) { // si la moyenne de l'étudiant est supérieure à la meilleure moyenne trouvée jusqu'à présent
            bestAvg = avg; // mettre à jour la meilleure moyenne
            best = student; // mettre à jour le meilleur étudiant
        }
    });

    return best; // retourner le meilleur étudiant trouvé, ou null si aucun étudiant n'a de notes
}