import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import NotesList from './components/NotesList';
import  { useEffect, useState } from 'react'; 
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "this is my first note",
    date: "12/08/2020",
  },
  {
    id: nanoid(),
    text: "this is my second note",
    date: "13/08/2020",
  },
  {
    id: nanoid(),
    text: "this is my third note",
    date: "14/08/2020",
  },
  {
    id: nanoid(),
    text: "this is my new note",
    date: "15/08/2020",
  },
]);

const [searchText, setSearchText] = useState('');

const[darkmode, setDarkMode] = useState(false);

useEffect(()=> {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  if (savedNotes) {
    setNotes(savedNotes);
  }
 
}, []);

useEffect(()=> {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);

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

  const { isLoading, error  } = useAuth0();

    return (

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
         />
      </div>
     </div> 
    /*<main className="column">
     <h2>Auth0 Login</h2>
     {error && <p>Authentication Error</p>}
     {!error && isLoading && <p>Loading...</p>}
     {!error && !isLoading && (
      <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      </>
      
     )}
     
    </main>*/
  );
};

export default App;
