class Utils {
    showDates() {
        document.querySelectorAll(".note").forEach(note => note.remove());
        notes.forEach((note, index) => {
            let liTag = `<li class="note">
                            <div class="details">
                                <p>${note.title}</p>
                                <span>${note.description}</span>
                            </div>
                            <div class="bottom-content">
                                <span>${note.date}</span>
                                <div class="settings">
                                    <i onclick="showMenu(this)" class="bi bi-three-dots"></i>
                                    <ul class="menu">
                                        <li onclick="updateNotes(${index}, '${note.title}','${note.description}')"><i class="bi bi-pencil-square">Edit</i></li>
                                        <li onclick="deleteNote(${index})"><i class="bi bi-trash-fill">Delete</i></li>
                                    </ul>
                                </div>
                            </div>
                        </li>`;
            addBox.insertAdjacentHTML("afterend", liTag);
        });
    }
    
    showMenu(elem) {
        elem.parentElement.classList.add("show");
        document.addEventListener("click", event => {
            // memindahkan show class dari settings menu ke document click
            if(event.target.tagName != "I" || event.target != elem) {
                elem.parentElement.classList.remove("show");
            }
        });
    }
    showMenu = showMenu;
    
    deleteNote(noteId) {
        let confirmDel = confirm("Apakah kamu ingin menghapus note ini?");
        if(!confirmDel) return;
        notes.splice(noteId, 1); // memindahkan note yang dipilih dari array/tasks
        // Menyimpan update data ke local storage
        localStorage.setItem("notes", JSON.stringify(notes));
        
    }
    deleteNote =deleteNote;
    
    updateNotes(noteId, title, description) {
        isUpdate = false;
        updateId = noteId;
        addBox.click();
        titleTag.value = title;
        descriptionTag.value = description;
        addBtn.innerText = "Update Note";
        popupTitle.innerText = "Update a Note";
    
        console.log(noteId, title, description);
    }
    updateNotes = updateNotes;
}
export default Utils;