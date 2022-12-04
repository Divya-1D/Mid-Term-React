// Icons import for delete and refresh
import { MdDeleteForever, MdRefresh } from 'react-icons/md';

// Functional Component used for handling the note status
const Note = ({ id, text, date, handleDeleteNote, handleUpdatedText }) => {
    return (
             <div className="note">
               <span>{ text }</span>
               <div className="note-footer">
                  <small>{ date }</small>
                  
                  <MdDeleteForever 
                       onClick={() => handleDeleteNote(id)}
                       className='delete-icon' 
                   />
                   <MdRefresh 
                       onClick={() => handleUpdatedText(id)}
                       className='delete-icon'
                  />
               </div>
              </div>
           );

};

export default Note;