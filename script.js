const nameInput = document.getElementById("studentName");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentSelect = document.getElementById("studentSelect");
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const table = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");
const bestStudentDisplay = document.getElementById("bestStudent");

function renderStudents(list = students) {
    table.innerHTML = ""; // clar le tableau

    list.forEach(student => {
        let row = document.createElement("tr"); // créer une ligne pour chaque étudiant

        let nameTd = document.createElement("td"); // créer une cellule pour le nom
        nameTd.textContent = student.name;

        let notesTd = document.createElement("td");// créer une cellule pour les notes
        notesTd.textContent = student.notes.join(", "); // afficher les notes séparées par des virgules

        let avgTd = document.createElement("td"); // créer une cellule pour la moyenne
        avgTd.textContent = calculMoyenne(student.notes); // calculer et afficher la moyenne des notes

        row.appendChild(nameTd); // ajouter les cellules à la ligne
        row.appendChild(notesTd); // ajouter les cellules à la ligne
        row.appendChild(avgTd);// ajouter les cellules à la ligne

        table.appendChild(row); // ajouter la ligne au tableau
    });

    let best = getBestStudent(); // trouver le meilleur étudiant
    if (best) {
        bestStudentDisplay.textContent = "Meilleur: " + best.name; // afficher le meilleur étudiant
    }
}

function updateSelect() { // mettre à jour la liste déroulante des étudiants
    studentSelect.innerHTML = ""; // vider les options existantes

    students.forEach((student, index) => {
        let option = document.createElement("option"); // créer une nouvelle option pour chaque étudiant
        option.value = index;
        option.textContent = student.name; // afficher le nom de l'étudiant dans la liste déroulante
        studentSelect.appendChild(option); // ajouter l'option à la liste déroulante
    });
}

addStudentBtn.addEventListener("click", () => { // ajouter un étudiant
    try {
        let name = nameInput.value.trim(); // récupérer et nettoyer le nom de l'étudiant

        if (!name) throw "Nom vide"; // vérifier que le nom n'est pas vide
        if (students.some(s => s.name === name)) throw "Doublon"; // vérifier que le nom n'est pas déjà utilisé

        students.push({ name: name, notes: [] }); // ajouter le nouvel étudiant à la liste

        nameInput.value = ""; // vider le champ de saisie du nom
        updateSelect(); // mettre à jour la liste déroulante des étudiants
        renderStudents(); // mettre à jour l'affichage du tableau des étudiants

    } catch (error) { // gérer les erreurs et afficher un message d'alerte
        alert(error); // afficher un message d'erreur à l'utilisateur
    }
});

addNoteBtn.addEventListener("click", () => { // ajouter une note à un étudiant
    try {
        let index = studentSelect.value; // récupérer l'index de l'étudiant sélectionné dans la liste déroulante
        let note = parseFloat(noteInput.value); // récupérer et convertir la note saisie en nombre

        if (isNaN(note) || note < 0 || note > 20) throw "Note invalide"; // vérifier que la note est un nombre valide entre 0 et 20

        students[index].notes.push(note); // ajouter la note à la liste des notes de l'étudiant sélectionné

        noteInput.value = ""; // vider le champ de saisie de la note
        renderStudents(); // mettre à jour l'affichage du tableau des étudiants pour refléter la nouvelle note et la moyenne recalculée

    } catch (error) { // gérer les erreurs et afficher un message d'alerte
        alert(error); // afficher un message d'erreur à l'utilisateur
    }
});

searchInput.addEventListener("input", () => { // filtrer les étudiants en fonction de la saisie dans le champ de recherche
    let value = searchInput.value.toLowerCase(); // récupérer la valeur saisie dans le champ de recherche et la convertir en minuscules pour une comparaison insensible à la casse

    let filtered = students.filter(student => // filtrer les étudiants dont le nom contient la valeur saisie
        student.name.toLowerCase().includes(value) // vérifier si le nom de l'étudiant contient la valeur de recherche (insensible à la casse)
    );

    renderStudents(filtered); // mettre à jour l'affichage du tableau des étudiants pour n'afficher que les étudiants filtrés
});