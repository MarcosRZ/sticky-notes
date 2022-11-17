import React, { DragEventHandler } from 'react'

interface DropZoneProps {
  onDrop: (e: any) => void,
  children: React.ReactNode
}

const DropZone: React.FC<DropZoneProps> = ( { onDrop, children } ) => {

  const handleDrop: DragEventHandler = (e) => {
    onDrop(e.dataTransfer.getData('id'));
  }

  return (
    <div className="drop-zone" onDrop={handleDrop}>{children}</div>
  )
}

export default DropZone