const nameInput = document.getElementById("studentName");
const addStudentBtn = document.getElementById("addStudentBtn");
const studentSelect = document.getElementById("studentSelect");
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const table = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");
const bestStudentDisplay = document.getElementById("bestStudent");

function renderStudents(list = students) {
    table.innerHTML = "";

    list.forEach(student => {
        let row = document.createElement("tr");

        let nameTd = document.createElement("td");
        nameTd.textContent = student.name;

        let notesTd = document.createElement("td");
        notesTd.textContent = student.notes.join(", ");

        let avgTd = document.createElement("td");
        avgTd.textContent = calculMoyenne(student.notes);

        row.appendChild(nameTd);
        row.appendChild(notesTd);
        row.appendChild(avgTd);

        table.appendChild(row);
    });

    let best = getBestStudent();
    if (best) {
        bestStudentDisplay.textContent = "Meilleur: " + best.name;
    }
}

function updateSelect() {
    studentSelect.innerHTML = "";

    students.forEach((student, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = student.name;
        studentSelect.appendChild(option);
    });
}

addStudentBtn.addEventListener("click", () => {
    try {
        let name = nameInput.value.trim();

        if (!name) throw "Nom vide";
        if (students.some(s => s.name === name)) throw "Doublon";

        students.push({ name: name, notes: [] });

        nameInput.value = "";
        updateSelect();
        renderStudents();

    } catch (error) {
        alert(error);
    }
});

addNoteBtn.addEventListener("click", () => {
    try {
        let index = studentSelect.value;
        let note = parseFloat(noteInput.value);

        if (isNaN(note) || note < 0 || note > 20) throw "Note invalide";

        students[index].notes.push(note);

        noteInput.value = "";
        renderStudents();

    } catch (error) {
        alert(error);
    }
});

searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    let filtered = students.filter(student =>
        student.name.toLowerCase().includes(value)
    );

    renderStudents(filtered);
});