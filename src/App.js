import React from 'react';
import logo from './logo.svg';
import styles from './App.css'; // Corrected CSS import
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import NotesList from './components/NotesList';
import { useEffect, useState } from 'react'; 
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';

function App() {


  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "this is my first note",
    date: "12/08/2020",
    isEditing: false
  },
  {
    id: nanoid(),
    text: "this is my second note",
    date: "13/08/2020",
    isEditing: false
  },
  {
    id: nanoid(),
    text: "this is my third note",
    date: "14/08/2020",
    isEditing: false
  },
  {
    id: nanoid(),
    text: "this is my new note",
    date: "15/08/2020",
    isEditing: false
  },
]);

const [searchText, setSearchText] = useState('');

const[darkmode, setDarkMode] = useState(false);
const {isAuthenticated, isLoading} = useAuth0();

console.log(isAuthenticated);


useEffect(()=> {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);

useEffect(()=> {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  if (savedNotes) {
    setNotes(savedNotes);
  }
 
}, []);


const addNote = (text) => {
const date = new Date();
const newNote = {
  id: nanoid(),
  text: text,
  date: date.toLocaleDateString()
}
const newNotes =[...notes, newNote];
setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}

const editNote = (id) => {
  const newNotes = [...notes];
  const note = newNotes.find((note) => note.id === id);

  note.isEditing = true;
  setNotes(newNotes);

}

const saveNote = (id, newtext) => {
  const newNotes = [...notes];
  const note = newNotes.find((note) => note.id === id);

  note.text = newtext;
  note.isEditing = false;
  setNotes(newNotes);
}



if (isLoading) {
  return <ReactLoading type={'spin'} color={'#000'} height={100} width={300} position={'center'}/>; // Adjust the loading spinner as needed
}



    return (


    isAuthenticated ? (

    
     <div className={`${darkmode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText)
        )}
         handleAddNote={addNote}
         handleDeleteNote={deleteNote}
         handleEditNote={editNote}
         handleSaveNote={saveNote}
         />
      </div>
      <LogoutButton />
     </div> 
    ) : (
      <div>
        <LoginButton />
      </div>
    )

  );
};

export default App;
