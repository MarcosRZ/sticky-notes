import React from 'react'
import { NoteModel } from './Note.model'
interface NoteProps {
    note: NoteModel
}

/**
 * NoteComponent doesn't know he's a draggable.
 * 
 * This way, we have accomplished SRP and Open-Closed SOLID principles
 */
const Note: React.FC<NoteProps> = ({ note }) => {
  return (
        <p>{note.text}</p>
  )
}

export default Note