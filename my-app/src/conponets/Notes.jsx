import { useState } from "react";

export default function Notes() {
    const [addNote,setAddNote] = useState([])
    const [note,setNote] = useState("")
    function getValue(e) {
        setNote(e.target.value)
    }

    function getText(e) {
        e.preventDefault();
        console.log(note)
        setAddNote([
            ...addNote,
            {
                id: addNote.length,
                name: note
            }
        ])
        setNote("")
    }

    function removeNote(id) {
        const newList = addNote.filter((notes) => notes.id !== id);
        setAddNote(newList);
    }


    function delList() {
        setAddNote([])
    }

    return (
        <div>
            <form onSubmit={getText}>
                <input value={note} onChange={getValue} ></input>
            </form>
            
            {addNote.map(notes =>(
                <>
                    <h1 key={notes.id} id={notes.id} >{notes.name}</h1>
                    <button onClick={() => removeNote(notes.id)}>Click to del</button>

                </>
            ))}

            <button onClick={delList}>Delate the whole list</button>

        </div>
    );
}

