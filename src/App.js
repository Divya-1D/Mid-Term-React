import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
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


   useEffect(() => {
          const savedNotes = JSON.parse(
               localStorage.getItem('react-notes-app-data')
          );

          if(savedNotes){
               setNotes(savedNotes);
          }

   }, []);

   useEffect(() => {
          localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
          );
   }, [notes]);


   const addNote = (text) => {
      const date = new Date();
      const newNote = {
         id: nanoid(),
         text: text, 
         date: date.toLocaleDateString(),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
   };


   const deleteNote = (id) => {
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