import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";


const App = () => {
   const [notes, setNotes] = useState([
      {
         id: nanoid(),
         text: "This is my trial1 note!",
         date: "31/10/2022",
      },
      {
         id: nanoid(),
         text: "This is my trial2 note!",
         date: "31/10/2022",
       },
       {
         id: nanoid(),
         text: "This is my trial3 note!",
         date: "31/10/2022",
       },
       {
         id: nanoid(),
         text: "This is my trial4 note!",
         date: "31/10/2022",
       },
   ]);

   const addNote = (text) => {
      const date = new Date();
      const newNote = {
         id: nanoid(),
         text: text, 
         date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
   };

   return (
     <div className="container">
        <NotesList 
            notes={notes} 
            handleAddNote={addNote}
         />
     </div>
   );
};

export default App;