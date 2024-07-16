import Utils from '../view/utils.js';
import NotesData from '../data/notes.js';

const home = () => {
    const addBox = document.querySelector('.add-box'),
    popupBox = document.querySelector('.popup-box'),
    popupTitle = popupBox.querySelector('header p'),
    closeIcon = popupBox.querySelector('header i'),
    titleTag = popupBox.querySelector('input'),
    descriptionTag = popupBox.querySelector('textarea'),
    addBtn = popupBox.querySelector('button');
    
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    
    // Mendapatkan localStorage jika ada dan menguraikannya menjadi object js
    // Jika tidak melewatkan array kosong ke notes
    const notes = JSON.parse(localStorage.getItem('notes') || "[]");
    let isUpdate = false, updateId;
    
    addBox.addEventListener("click", () => {
        titleTag.focus();
        popupBox.classList.add("show")
    });
    
    closeIcon.addEventListener("click", () => {
        popupBox.classList.remove("show")
        titleTag.value ='';
        descriptionTag.value ='';
        addBtn.innerText = "Add Note";
        popupTitle.innerText = "Add a new Note";
        popupBox.classList.remove("show");
    });
    
    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let noteTitle = titleTag.value,
        noteDesc = descriptionTag.value;
    
        if(noteTitle || noteDesc) {
            // Mendapatkan bulan, hari dan tahun dari tanggal sekarang
            let dateObject = new Date(),
            month = months[dateObject.getMonth()],
            day = dateObject.getDate(),
            year = dateObject.getFullYear();
    
            let noteInfo = {
                title: noteTitle, description: noteDesc,
                date: `${month} ${day}, ${year}`
            }
    
            if(!isUpdate) {
                notes.push(noteInfo); // menambahkan note baru ke notes
            } else {
                isUpdate = false;
                notes[updateId] = noteInfo; // mengupdate note secara spesifik
            }
            
            
            // Menyimpan data ke local storage
            localStorage.setItem("notes", JSON.stringify(notes));
            closeIcon.click();
        }
    });

    const utilsInstance = new Utils();
    console.log(utilsInstance.showDates());
    console.log(utilsInstance.showMenu());
    console.log(utilsInstance.deleteNote());
    console.log(utilsInstance.updateNotes());
}
export default home;
