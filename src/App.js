//hooks import
import { useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";

//components import
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
// import Home from "./pages/home";
// import About from "./pages/about";



const App = () => {
   const [notes, setNotes] = useState([]);

   const [searchText, setSearchText] = useState('');

   const [darkMode, setDarkMode] = useState(false);

   

// responsible for fetching the notes 
   useEffect(() => {
      const getNotes = async () => {
         const notesFromServer = await fetchNotes()
         setNotes(notesFromServer) 
      }

      getNotes()
   }, [])



// Fetching Notes
   const fetchNotes = async () => {
      const res = await fetch('http://localhost:5000/notes')
      const data = await res.json()
      return data
   }



// Function used to add the notes into available list of notes, (GET)
   const addNote = async (text) => {
      const date = new Date();
      const newNote = {
         text: text, 
         date: date.toLocaleDateString(),
      };

// Function for adding the data , (POST)
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

// Function for delete the notes if not in use, (DELETE)
   const deleteNote = async (id) => {
      await fetch(`http://localhost:5000/notes/${id}`, {
         method: 'DELETE'
      });
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
   };
   

// Function for updating the existing note , (PUT)
   const handleUpdatedText = async (id, text) => {

      const res = await fetch(`http://localhost:5000/notes/${id}`)
      const data = await res.json()
      
      const updatedText = prompt('add anything')
      const updatedNote = {...data, text: updatedText}
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(updatedNote)
      })
      const UpNote = await response.json()
      setNotes(notes.map((note) => 
      note.id === id ? {...note, text: UpNote.text} : note ))
   }


   
// Renders the components
   return (
           <div className={`${darkMode && 'dark-mode'}`}>
           
         


           
               <Navbar />
                  <Routes>

                    <Route exact path="/" element={
                    
                    
                    
                    
                    
                   <div className="container">
                        <Header handleToggleDarkMode={setDarkMode}/>
                        <Search handleSearchNote={setSearchText} setNotes={setNotes}
                         searchText={searchText}/>
                        <NotesList 
                             searchText={searchText}
                             notes={notes}
                             handleAddNote={addNote}
                             handleDeleteNote={deleteNote}  
                             handleUpdatedText={handleUpdatedText}
                        />
                        <Footer />
                   </div>
                    } />


                    <Route path="/notes" element={
                     <>
                         <NotesList 
                           searchText={searchText}
                           notes={notes}
                           handleAddNote={addNote}
                           handleDeleteNote={deleteNote}  
                           handleUpdatedText={handleUpdatedText}
                         />
                    </>
                    }
                    />
                       </Routes>
                 
               
                 
            
                 
            </div>
         );
};

export default App;