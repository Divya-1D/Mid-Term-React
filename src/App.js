import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";



const App = () => {
   const [notes, setNotes] = useState([]);

   const [searchText, setSearchText] = useState('');

   const [darkMode, setDarkMode] = useState(false);



   useEffect(() => {
      const getNotes = async () => {
         const notesFromServer = await fetchNotes()
         setNotes(notesFromServer)
         
      }

      getNotes()
   }, [])


// Fetch Notes
   const fetchNotes = async () => {
      const res = await fetch('http://localhost:5000/notes')
      const data = await res.json()

      return data
   }


   const addNote = async (text) => {
      const date = new Date();
      const newNote = {
         text: text, 
         date: date.toLocaleDateString(),
      };
      const updatedNotes = await fetch('http://localhost:5000/notes', {
         method: 'POST',
         headers:{
            'content-type': 'application/json',
         },
         body: JSON.stringify(newNote)
      })
      const lastNote = await updatedNotes.json()
      setNotes([...notes, lastNote])
   };




   const deleteNote = async (id) => {
      await fetch(`http://localhost:5000/notes/${id}`, {
         method: 'DELETE'
      });
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
   };




   return (
           <div className={`${darkMode && 'dark-mode'}`}>

                   <div className="container">
                        
                        <Header handleToggleDarkMode={setDarkMode}/>
                        <Search handleSearchNote={setSearchText}/>
                        <NotesList 
                             notes={notes.filter((note) =>  
                                 note.text.toLowerCase().includes(searchText)
                              )} 
                             handleAddNote={addNote}
                             handleDeleteNote={deleteNote}
                        />
                        <Footer />
                   </div>
            </div>
         );
};

export default App;