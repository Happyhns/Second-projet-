// script principal

const studentName = document.getElementById("studentName");// Récupération de l'input pour le nom de l'étudiant
const addStudentBtn = document.getElementById("addStudentBtn"); // Récupération du bouton pour ajouter un étudiant


function addStudent() {
    console.log("fonction appelée"); // pour vérifier que la fonction est bien appelée
}

addStudentBtn.addEventListener("click", addStudent); // Ajout d'un écouteur d'événement pour le clic sur le bouton

function addStudent() {
    const name = studentName.value; // Récupération de la valeur de l'input
    console.log(name); // Affichage du nom dans la console 
}



























