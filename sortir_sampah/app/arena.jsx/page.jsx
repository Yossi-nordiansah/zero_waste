"use client"
import { useState } from 'react';
import TrashBin from './_components/TrashBin';
import TrashItem from './_components/TrashItem';

const trashItems = [
  { name: 'Daun', image: '/images/daun.jpg', type: 'Organik' },
  { name: 'Botol Plastik', image: '/images/botol.jpg', type: 'Anorganik' },
  { name: 'Baterai', image: '/images/baterai.jpg', type: 'Berbahaya' },
];

const trashBin = [
  { name: 'Organik', image: '/images/organik.png' },
  { name: 'Non Organik', image: '/images/non-organik.png' },
  { name: 'Berbahaya', image: '/images/berbahaya.png' },
];

export default function Arena() {
  const [currentItem, setCurrentItem] = useState(trashItems[0]);
  const [score, setScore] = useState(0);

  const handleDrop = (binType) => {
    if (currentItem.type === binType) {
      setScore(score + 10);
      alert('Benar!');
    } else {
      setScore(score - 5);
      alert('Salah!');
    }
    const randomItem = trashItems[Math.floor(Math.random() * trashItems.length)];
    setCurrentItem(randomItem);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 space-y-6 bg-no-repeat bg-cover" style={{backgroundImage: `url(${'/images/bg-arena.png'})`, backgroundPositionY: -230}}>
      <h1 className="text-4xl font-bold">Sortir Sampah!</h1>
      <div className="text-xl">Skor: {score}</div>

      <div className="mt-4">
        <TrashItem item={currentItem} />
      </div>

      <div className="flex gap-6 mt-8">
        {trashBin.map((bin) => (
          <TrashBin
            key={bin.name}
            path={bin.image}
            type={bin.name}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
}
