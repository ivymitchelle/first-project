import { useState } from 'react';
import { MdDeleteForever, MdEditNote } from 'react-icons/md'


const Note = ({ id, text, date, handleDeleteNote, handleEditNote, handleSaveNote}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState(text);


    const handleEditClick = () => {
        setIsEditing(true);
    }


    const handleSaveClick = () => {
        handleEditNote (id, currentText);
        handleSaveNote (id, currentText);
        setIsEditing(false);
        
    }
    
    const handleTextChange = (event) => {
        setCurrentText(event.target.value);
    }

    return(
        <div className="note">

            {isEditing ? (
                <input type='text' value={currentText}  onChange={handleTextChange}/>
            ) : ( 
                <span>{text}</span>
            )}
            <div className="note-footer">
                <small>{date}</small>

                <div className='note-editors'>
                <MdDeleteForever
                 onClick = {()=> handleDeleteNote (id)}
                className="delete-icon" 
                size="1.3em"
                />
                {isEditing ? ( 
                    <button onClick={handleSaveClick}>Save</button>
                ) : (
                <MdEditNote
                    onClick={handleEditClick}
                />)}
                </div>

            </div>
        </div>
    );
};

export default Note;