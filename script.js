const main = document.querySelector("#main")
const addbtn = document.querySelector('#addbtn')
addbtn.addEventListener('click',
    function () {
        addnote()
    }
)
const savenotes = () =>{
    const notes = document.querySelectorAll('.note textarea');
    const data = [];
    notes.forEach(
        (note) => data.push(note.value)
    )
    console.log('data')
    localStorage.setItem('notes',JSON.stringify(data))

}
const addnote = () => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
       <i class="save fa-solid fa-floppy-disk"></i>
       <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea></textarea>
    `;
    note.querySelector(".save").addEventListener('click',
    function(){
        savenotes()
    }
    
    )

    note.querySelector(".trash").addEventListener('click',
    function(){
        note.remove()

    }
    )
    main.appendChild(note);
    savenotes();

}