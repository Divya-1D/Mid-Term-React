import Note from './Note';
import AddNote from './AddNote';

// Functional Component useful for listing the added and saved notes into application, along with id and current date
const NotesList = ({ 
          notes, 
          handleAddNote, 
          handleDeleteNote,
          handleUpdatedText,
}) => {
         return (
                   <div className="notes-list">
                        {notes.map((note, index)=> (
                            <Note 
                                key={index}
                                id={note.id} 
                                text={note.text} 
                                date={note.date} 
                                handleDeleteNote={handleDeleteNote}
                                handleUpdatedText={handleUpdatedText}
                              />
                        ))}
                            <AddNote handleAddNote={handleAddNote} />
                    </div>
                );
};

export default NotesList;