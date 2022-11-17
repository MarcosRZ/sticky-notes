import React, { useState } from 'react'
import { NoteModel } from './Note.model';

const INITIAL_STATE = {
    color: '#c7ffc0',
    text: '',
    x: '',
    y: '',
    height: '',
    width: '',
}

interface FormData {
    color: string,
    text: string,
    x: string,
    y: string,
    height: string,
    width: string,
}

interface CreateNoteProps {
    onCreate: (note: NoteModel) => void
}

const CreateNote: React.FC<CreateNoteProps> = ({ onCreate }) => {

    const [formState, setFormState] = useState(INITIAL_STATE);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const note = createNoteFromFormData(formState);

        onCreate(note);
    }

    const createNoteFromFormData = (formData: FormData) => {

        const { x, y, height, width } = formData;

        // TODO: this would a good place to perform some validations.

        // Naive id generation. Should have its own function. I generally use UUID lib.
        const id = '' + Date.now() + Math.round(Math.random() * 10000)

        return {
            ...formData,
            x: Number.parseInt(x),
            y: Number.parseInt(y),
            height: Number.parseInt(height),
            width: Number.parseInt(width),
            id
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = e.target;

        setFormState(prev => ({ ...prev, [name]: value }))
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <label>Color</label>
            <input type="color" name="color" onChange={handleChange} defaultValue="#c7ffc0"/>
            <label>Text</label>
            <input onChange={handleChange} type="string" name="text" />
            <label>Postion X</label>
            <input onChange={handleChange} type="number" name="x" />
            <label>Postion y</label>
            <input onChange={handleChange} type="number" name="y" />
            <label>Height</label>
            <input onChange={handleChange} type="number" name="height" />
            <label>Width</label>
            <input onChange={handleChange} type="number" name="width" />
            <input type="submit" value="Create Note" />
        </form>
    )
}

export default CreateNote