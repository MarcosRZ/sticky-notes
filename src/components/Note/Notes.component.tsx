import React, { useEffect, useState } from 'react'
import Draggable from '../Draggable/Draggable.component';
import { DraggableModel } from '../Draggable/Draggable.model';
import DraggableContainer from '../Draggable/DraggableContainer.component';
import DropZone from '../DropZone/DropZone.component';
import CreateNote from './CreateNote.component';
import Note from './Note.component';
import { NoteModel } from './Note.model';

const LS_KEY_NOTES = 'notes';

interface NotesProps {
  notes: NoteModel[]
}

const Notes: React.FC<NotesProps> = (props) => {

  const [ loading, setLoading ] = useState(true);
  const [ notes, setNotes ] = useState<NoteModel[]>(props.notes);

  useEffect(() => {

    if (loading) return;

    saveNotes();

  }, [notes, loading])

  useEffect(() => {
    loadNotes();
  }, [])

  const saveNotes = () => {
    localStorage.setItem(LS_KEY_NOTES, JSON.stringify(notes));
  }

  const loadNotes = () => {
    const lsData = localStorage.getItem(LS_KEY_NOTES);

    if (lsData) {
      setNotes(JSON.parse(lsData))
    }

    setLoading(false);
  }

  const trash = (id: string) => {
    setNotes(notes.filter(x => x.id !== id))
  }

  const addToNotes = (note: NoteModel) => {
    setNotes(prev => [...prev, note ]);
  }

  const updateNote = (d: DraggableModel) => {

    const note = notes.find(n => n.id === d.id);
    const restOfNotes = notes.filter(x => x.id !== d.id);

    const updatedNote = { ...note!, ...d }

    // This line also brings note to front :)
    setNotes([ ...restOfNotes, updatedNote ])
  }

  return (
    <div className="notes">
      <DraggableContainer>

        {
          notes.map(note => 
            <Draggable key={note.id} draggable={note} onDraggableChanged={updateNote}>
              <Note note={note} />
            </Draggable>
          )
        }
        <DropZone onDrop={trash}><span title="Drop notes here to get rid of them">Trash</span></DropZone>
      </DraggableContainer>

      <CreateNote onCreate={addToNotes}/>
        
    </div>
  )
}

export default Notes