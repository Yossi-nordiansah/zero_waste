import React from 'react';

export default function TrashBin({ type, path, onDrop }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(type)}
    >
      <img src={path} alt={type} className="w-44 h-44 object-contain mb-2" />
    </div>
  );
}
