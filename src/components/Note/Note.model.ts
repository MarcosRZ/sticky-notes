import { DraggableModel } from "../Draggable/Draggable.model";

/**
 * NoteModel is an extension of DraggableModel.
 * 
 * At the time I'm writting this, I'm thinking about a couple of alternatives like:
 * 
 * - Using generics: Draggable<NoteModel>
 * - Maybe using Intersection types like type DraggableNote =  Draggable & Note
 * 
 * Anyway, this inheritance allows to implement new types of draggables without taking care about
 * size, positioning, etc.
 */
export interface NoteModel extends DraggableModel {
    text: string;
}