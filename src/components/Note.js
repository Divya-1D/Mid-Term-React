import { MdDeleteForever, MdRefresh } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleUpdatedText }) => {
    return (
             <div className="note">
               <span>{ text }</span>
               <div className="note-footer">
                  <small>{ date }</small>
                  <MdDeleteForever 
                       onClick={() => handleDeleteNote(id)}
                       className='delete-icon' 
                    //    size='1.3em'
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