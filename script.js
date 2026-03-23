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
        }

        students.push({ name: name, note: null }); // Ajoute un nouvel étudiant au tableau avec une note nulle
        updateStudentSelect(); // Met à jour la liste déroulante des étudiants
        studentNameInput.value = ""; // Réinitialise le champ de saisie du nom de l'étudiant
    }
    catch (error) {
        console.error("Erreur lors de l'ajout de l'étudiant:", error); // Affiche une erreur dans la console en cas de problème

}

});

















