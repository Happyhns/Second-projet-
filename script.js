// script principal

const studentNameInput = document.getElementById("studentName"); // Récupère l'élément d'entrée pour le nom de l'étudiant
const addStudentBtn = document.getElementById("addStudentBtn"); // Récupère le bouton pour ajouter un étudiant
const studentSelect = document.getElementById("studentSelect"); // Récupère l'élément de sélection pour les étudiants
const noteInput = document.getElementById("noteInput"); // Récupère l'élément d'entrée pour la note de l'étudiant
const saveNoteBtn = document.getElementById("saveNoteBtn"); // Récupère le bouton pour enregistrer la note de l'étudiant
const searchInput = document.getElementById("searchInput"); // Récupère l'élément d'entrée pour la recherche d'étudiants
const bestStudentText = document.getElementById("bestStudent"); // Récupère l'élément de texte pour afficher le meilleur étudiant
const tableBody = document.getElementById("tableBody"); // Récupère le corps du tableau pour afficher les étudiants et leurs notes

addStudentBtn.addEventListener("click", () => {
    try {
        const name = studentNameInput.value.trim(); // Récupère et nettoie le nom de l'étudiant

        if (name === "") {
            alert("Veuillez entrer un nom d'étudiant valide."); // Affiche une alerte si le nom est vide
            return;
        }

        students.push({ name: name, note: null }); // Ajoute un nouvel étudiant au tableau avec une note nulle
        updateStudentSelect(); // Met à jour la liste déroulante des étudiants
        studentNameInput.value = ""; // Réinitialise le champ de saisie du nom de l'étudiant
    }
    catch (error) {
        console.error("Erreur lors de l'ajout de l'étudiant:", error); // Affiche une erreur dans la console en cas de problème

}

});


saveNoteBtn.addEventListener("click", () => {
    try {
        const selectedName = studentSelect.value; // Récupère le nom de l'étudiant sélectionné
        const note = Number(noteInput.value); // Récupère et convertit la note saisie en nombre

        if (isNaN(note) || note < 0 || note > 20) {
            alert("Veuillez entrer une note valide entre 0 et 20."); // Affiche une alerte si la note n'est pas valide
            return;
        }

        const student = students.find(s => s.name === selectedName); // Trouve l'étudiant correspondant au nom sélectionné
        if (!student) {
            alert("Étudiant non trouvé."); // Affiche une alerte si l'étudiant n'est pas trouvé
            return;
        }

        student.note = note; // Met à jour la note de l'étudiant
        updateBestStudent(); // Met à jour l'affichage du meilleur étudiant
        updateStudentTable(); // Met à jour le tableau des étudiants et leurs notes
        noteInput.value = ""; // Réinitialise le champ de saisie de la note
    }

    catch (error) {
        alert("Erreur lors de l'enregistrement de la note."); // Affiche une alerte en cas d'erreur lors de l'enregistrement de la note

    }
});


searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim().toLowerCase(); // Récupère et nettoie la valeur de recherche 

    const filtered  = students.filter(s => s.name.toLowerCase().includes(value)); // Filtre les étudiants dont le nom contient la valeur de recherche
    updateStudentTable(filtered); // Met à jour le tableau avec les étudiants filtrés
});










