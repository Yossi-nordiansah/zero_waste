// "use client"
// import { useState } from 'react';
// import TrashBin from '../_components/TrashBin';
// import TrashItem from '../_components/TrashItem';

// const trashItems = [
//   { name: 'Daun', image: '/images/daun.jpg', type: 'Organik' },
//   { name: 'Botol Plastik', image: '/images/botol.jpg', type: 'Anorganik' },
//   { name: 'Baterai', image: '/images/baterai.jpg', type: 'Berbahaya' },
// ];

// const trashBin = [
//   { name: 'Organik', image: '/images/organik.png' },
//   { name: 'Non Organik', image: '/images/non-organik.png' },
//   { name: 'Berbahaya', image: '/images/berbahaya.png' },
// ];

// export default function Arena() {
//   const [currentItem, setCurrentItem] = useState(trashItems[0]);
//   const [score, setScore] = useState(0);

//   const handleDrop = (binType) => {
//     if (currentItem.type === binType) {
//       setScore(score + 10);
//       alert('Benar!');
//     } else {
//       setScore(score - 5);
//       alert('Salah!');
//     }
//     const randomItem = trashItems[Math.floor(Math.random() * trashItems.length)];
//     setCurrentItem(randomItem);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 space-y-2 bg-no-repeat bg-cover" style={{backgroundImage: `url(${'/images/bg-sortir.png'})`, backgroundPositionY: 0}}>
//       <h1 className="text-4xl font-bold font-cartoon text-teal-800 drop-shadow-2xl">Ayo Kita Sortir Sampah!</h1>
//       <div className="text-xl">Skor: {score}</div>

//       <div className="mt-4">
//         <TrashItem item={currentItem}/>
//       </div>

//       <div className="flex gap-6 mt-8">
//         {trashBin.map((bin) => (
//           <TrashBin
//             key={bin.name}
//             path={bin.image}
//             type={bin.name}
//             onDrop={handleDrop}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from 'react';
import TrashBin from '../_components/TrashBin';
import TrashItem from '../_components/TrashItem';

const trashItems = [
  { name: 'Daun', image: '/images/daun.jpg', type: 'Organik' },
  { name: 'Botol Plastik', image: '/images/botol.jpg', type: 'Anorganik' },
  { name: 'Baterai', image: '/images/baterai.jpg', type: 'Berbahaya' },
  { name: 'Kulit Pisang', image: '/images/kulit-pisang.jpg', type: 'Organik' },
  { name: 'Kaca', image: '/images/kaca.jpg', type: 'Anorganik' },
  { name: 'Kaleng', image: '/images/kaleng.jpg', type: 'Anorganik' },
  { name: 'Obat Kadaluarsa', image: '/images/obat.jpg', type: 'Berbahaya' },
  { name: 'Kardus', image: '/images/kardus.jpg', type: 'Anorganik' },
  { name: 'Sisa Makanan', image: '/images/sisa-makanan.jpg', type: 'Organik' },
  { name: 'Minyak Bekas', image: '/images/minyak.jpg', type: 'Berbahaya' },
  { name: 'Kertas', image: '/images/kertas.jpg', type: 'Anorganik' },
  { name: 'Styrofoam', image: '/images/styrofoam.jpg', type: 'Anorganik' },
  { name: 'Sisa Sayur', image: '/images/sayur.jpg', type: 'Organik' },
  { name: 'Pestisida', image: '/images/pestisida.jpg', type: 'Berbahaya' },
  { name: 'Kulit Telur', image: '/images/kulit-telur.jpg', type: 'Organik' },
];

const trashBins = [
  { name: 'Organik', image: '/images/organik.png' },
  { name: 'Anorganik', image: '/images/non-organik.png' },
  { name: 'Berbahaya', image: '/images/berbahaya.png' },
];

export default function Home() {
  const [remainingItems, setRemainingItems] = useState([...trashItems]);
  const [currentItem, setCurrentItem] = useState(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (remainingItems.length > 0 && questionCount < 15) {
      const randomIndex = Math.floor(Math.random() * remainingItems.length);
      setCurrentItem(remainingItems[randomIndex]);
    } else if (questionCount >= 15) {
      setIsGameOver(true);
    }
  }, [remainingItems, questionCount]);

  const handleDrop = (binType) => {
    if (!currentItem || isGameOver) return;

    if (currentItem.type === binType) {
      setScore(score + 10);
      alert('Benar!');
    } else {
      setScore(score - 5);
      alert('Salah!');
    }

    // Hapus item saat ini dari remainingItems
    setRemainingItems(remainingItems.filter((item) => item.name !== currentItem.name));
    setQuestionCount(questionCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 space-y-6">
      <h1 className="text-4xl font-bold">Sortir Sampah!</h1>
      <div className="text-xl">Skor: {score}</div>
      <div className="text-lg">Pertanyaan ke-{questionCount} dari 15</div>

      {isGameOver ? (
        <div className="text-2xl text-green-700 font-semibold">Permainan selesai! Skor akhir: {score}</div>
      ) : (
        <>
          {currentItem && (
            <div className="mt-4">
              <TrashItem item={currentItem} />
            </div>
          )}

          <div className="flex gap-6 mt-8">
            {trashBins.map((bin) => (
              <TrashBin
                key={bin.name}
                path={bin.image}
                type={bin.name}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
