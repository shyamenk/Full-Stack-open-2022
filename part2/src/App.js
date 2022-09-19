import {useState} from 'react'
import Notes from './components/Notes'

const App = props => {
  const [newNote, setnewNote] = useState('New Note')

  const [notes, setnote] = useState(props.notes)

  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = e => {
    e.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setnote(notes.concat(noteObject))
    setnewNote('')
  }

  const handleInputChange = e => {
    setnewNote(e.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => (
          <Notes key={note.id} keys={note} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleInputChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
