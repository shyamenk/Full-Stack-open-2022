import React from 'react'

const Notes = ({note, keys}) => {
  return <li key={note.id}>{note.content}</li>
}

export default Notes
