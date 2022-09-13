import Notes from './components/Notes'

const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <Notes key={note.id} keys={note} note={note} />
        ))}
      </ul>
    </div>
  )
}

export default App
