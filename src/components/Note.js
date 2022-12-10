// MUI Icons import for delete and refresh
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';



// Functional Component used for handling the note status
const Note = ({ id, text, date, handleDeleteNote, handleUpdatedText }) => {
    return (
             <div className="note">
               <span>{ text }</span>
               <div className="note-footer">
                  <small>{ date }</small>
                  
                  <DeleteForeverIcon
                       onClick={() => handleDeleteNote(id)}
                       className='material-icons' 
                   />
                
                   <UpdateRoundedIcon
                       onClick={() => handleUpdatedText(id)}
                       className='material-icons'
                  />
               </div>
              </div>
           );

};

export default Note;