import React from 'react';

export default function TrashItem({ item }) {
  return (
    <img
      src={item.image}
      alt={item.name}
      draggable
      className="w-32 h-32 object-contain"
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', item.type);
      }}
    />
  );
}
