import React, { DragEventHandler, MouseEventHandler, useState } from 'react'
import { DraggableModel } from './Draggable.model';

interface DraggableProps {
  onDraggableChanged: (d: DraggableModel) => void;
  draggable: DraggableModel;
  children: React.ReactNode;
}

/**
 * Draggable Component encapsulates the functionality related to positioning, drag-drop, sizing, etc
 * 
 * The goal is to decouple this from the final implementations and potentially wrap everything with this component.
 * 
 * See components/Note/Note.component.tsx to see the final implementation
 */
const Draggable: React.FC<DraggableProps> = ({ draggable, children, onDraggableChanged = (d: DraggableModel) => { } }) => {

  const { id, width, height, color } = draggable;

  // const [position, setPosition] = useState({ x, y });
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  /**
   * Sets the id of the Draggable item to the event payload.
   * 
   * This id is used by DropZone and eventually other future "event consumers" to identify the involved model
   * without the need to know the rest of the actors.
   */
  const handleDragStart: DragEventHandler = (e) => {
    e.dataTransfer.setData('id', id);
  }

  const handleDragEnd: DragEventHandler = (e) => {
    e.dataTransfer.setData('id', id);

    const newPosition = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    }

    const updatedDraggable = { ...draggable, ...newPosition}

    onDraggableChanged(updatedDraggable);
  }

  const setLocalOffset: MouseEventHandler = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setOffset({ x: offsetX, y: offsetY });
  }

  return (
    <div
      draggable
      onMouseDown={setLocalOffset}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="draggable resizable"
      style={{ top: draggable.y, left: draggable.x, height, width, backgroundColor: color }}>{children}</div>
  )
}

export default Draggable