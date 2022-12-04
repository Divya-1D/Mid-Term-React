import { MdSearch } from 'react-icons/md';
import {useState} from 'react'

// Functional Component used to search the saved notes 
const Search = ({ handleSearchNote, setNotes, searchText }) => {
    const [notesData, setNotesData] = useState([])
    
// This will filter the notes while on server
    const filteredNotes = (e) => {
        const fetchNotes = async () => {
            const res = await fetch('http://localhost:5000/notes')
            const data = await res.json()
            return data
            // console.log(data)
            // setNotesData(data)
        }

        const dataSetter = async () => {
            const data = await fetchNotes()
            setNotesData(data)
            searchText ? setNotes(notesData.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))) : setNotes(notesData)
            handleSearchNote('')
        }

        dataSetter()
        // setNotesData(fetchNotes())
        // console.log(searchText)
        console.log(notesData)
        
    }

    const onChange = (e) => {
        handleSearchNote(e.target.value)
        console.log(searchText)
    }

    return (

             <div className="search">
                  <MdSearch className="search-icons" size='1.3rem' />
                  <input 
                        value={searchText}
                        onChange={onChange}
                        type="text" 
                        placeholder="Type anything to search..."
                  />
                  <button className="save" onClick={filteredNotes}>
                        Search
                  </button>
             </div>
            );
};



export default Search;


