import React from 'react';

export default function TrashItem({ item }) {
  return (
    <div>
      <img
        src={item.image}
        alt={item.name}
        draggable
        className="w-32 h-32 object-contain mx-auto"
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', item.type);
        }}
      />
      <h1 className='font-cartoon text-center'>{item.name}</h1>
    </div>
  );
}
