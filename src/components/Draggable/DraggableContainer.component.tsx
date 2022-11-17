import React, { DragEventHandler } from 'react'

interface DraggableContainerProps {
  children: React.ReactNode
}

const DraggableContainer: React.FC<DraggableContainerProps> = ({ children }) => {

  const handleDragOver: DragEventHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="draggable-container" onDragOver={handleDragOver}>{children}</div>
  )
}

export default DraggableContainer