"use client";
import { useState, useEffect } from 'react';
import TrashBin from '../_components/TrashBin';
import TrashItem from '../_components/TrashItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const trashItems = [
  { name: 'Daun', image: '/images/daun.jpg', type: 'Organik' }, //
  { name: 'Botol Plastik', image: '/images/botol.jpg', type: 'Anorganik' },//
  { name: 'Baterai', image: '/images/baterai.jpg', type: 'Berbahaya' },//
  { name: 'Kulit Pisang', image: '/images/kulit-pisang.jpg', type: 'Organik' },//
  { name: 'Kaca', image: '/images/kaca.jpg', type: 'Anorganik' },//
  { name: 'Kaleng', image: '/images/kaleng.jpg', type: 'Anorganik' },//
  { name: 'Obat Kadaluarsa', image: '/images/obat.jpg', type: 'Berbahaya' },//
  { name: 'Kardus', image: '/images/kardus.jpg', type: 'Anorganik' },//
  { name: 'Sisa Makanan', image: '/images/sisa-makanan.jpg', type: 'Organik' },//
  { name: 'Minyak Bekas', image: '/images/minyak.jpeg', type: 'Berbahaya' },//
  { name: 'Kertas', image: '/images/kertas.jpg', type: 'Anorganik' },//
  { name: 'Styrofoam', image: '/images/styrofoam.jpg', type: 'Anorganik' },//
  { name: 'Sisa Sayur', image: '/images/sayur.jpeg', type: 'Organik' },//
  { name: 'Pestisida', image: '/images/pestisida.jpg', type: 'Berbahaya' },//
  { name: 'Kulit Telur', image: '/images/kulit-telur.jpg', type: 'Organik' },//
  { name: 'Cangkang Kerang', image: '/images/kerang.jpeg', type: 'Organik' },//
  { name: 'Kabel Rusak', image: '/images/kabel.jpg', type: 'Anorganik' },//
  { name: 'Obeng Bekas', image: '/images/obeng.jpg', type: 'Anorganik' },//
  { name: 'Termometer Rusak', image: '/images/termometer.jpg', type: 'Berbahaya' },//
  { name: 'Masker Bekas', image: '/images/masker.jpg', type: 'Berbahaya' },//
  { name: 'Ban Bekas', image: '/images/ban.jpg', type: 'Anorganik' },//
  { name: 'Kain Perca', image: '/images/kain.jpg', type: 'Organik' },//
  { name: 'Sampah Makanan Laut', image: '/images/seafood.jpg', type: 'Organik' },//
  { name: 'CD Rusak', image: '/images/cd.jpg', type: 'Anorganik' },//
  { name: 'Toner Printer', image: '/images/toner.jpg', type: 'Berbahaya' },//
  { name: 'Sisa Sabun', image: '/images/sabun.jpg', type: 'Organik' },//
  { name: 'Jarum Suntik', image: '/images/jarum.jpg', type: 'Berbahaya' },//
  { name: 'Kemasan Aluminium Foil', image: '/images/foil.jpg', type: 'Anorganik' },//
  { name: 'Paku Berkarat', image: '/images/paku.jpg', type: 'Anorganik' }
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
  const [feedback, setFeedback] = useState({ src: '', alt: '' });
  const [showFeedback, setShowFeedback] = useState(false);
  const router = useRouter();

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
      showTemporaryFeedback('/images/correct.png', 'Benar');
    } else {
      showTemporaryFeedback('/images/false.png', 'Salah');
    }

    setRemainingItems(remainingItems.filter((item) => item.name !== currentItem.name));
    setQuestionCount(questionCount + 1);
  };

  const showTemporaryFeedback = (src, alt) => {
    setFeedback({ src, alt });
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 1500);
  };

  return (
    <div
      className="flex flex-col relative items-center justify-center min-h-screen bg-green-100 space-y-3"
      style={{ backgroundImage: `url('/images/bg-sortir.png')`, backgroundPositionY: 0 }}
    >
      {!isGameOver && (
        <h1 className="text-4xl font-cartoon bg-gradient-to-b from-teal-700 to-green-700 bg-clip-text drop-shadow-2xl text-transparent">
          Sortir Sampahnya!
        </h1>
      )}

      {!isGameOver && (<div className="flex items-center justify-center absolute bottom-20 shadow-2xl left-44 min-w-24 min-h-24 bg-gradient-to-b font-cartoon border-4 border-white text-white from-yellow-400 text-6xl p-3 to-orange-400 rounded-full">
        {score}
      </div>
      )}

      {!isGameOver && (
        <div className="text-2xl font-cartoon text-green-950">
          Soal ke {questionCount}
        </div>
      )}

      {showFeedback && (
        <div className="absolute top-38">
          <img src={feedback.src}
            alt={feedback.alt}
            className="w-32 h-32 object-contain drop-shadow-xl"
          />
          <h1>{feedback.name}</h1>
        </div>
      )}

      {isGameOver ? (
        <AnimatePresence>
          <motion.div
            key="result"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl text-green-800 bg-white border-4 border-green-600 rounded-xl p-6 font-cartoon shadow-lg flex flex-col items-center space-y-4"
          >
            🎉 Permainan selesai! <br />
            Skor akhir kamu: <span className="text-6xl font-bold text-orange-500">{score}</span>

            <button
              onClick={() => {
                setRemainingItems([...trashItems]);
                setScore(0);
                setQuestionCount(0);
                setIsGameOver(false);
                setCurrentItem(null);
              }}
              className="mt-4 px-6 py-2 text-xl bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              🔄 Main Lagi
            </button>
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          {currentItem && (
            <div className="mt-4">
              <TrashItem item={currentItem} />
            </div>
          )}

          <div className="flex gap-6 mt-8">
            {trashBins.map((bin) => (
              <TrashBin key={bin.name} path={bin.image} type={bin.name} onDrop={handleDrop} />
            ))}
          </div>
        </>
      )}
      <img src="/images/home.png" alt="" className='w-14 absolute top-10 z-20 left-10 cursor-pointer hover:scale-125' onClick={() => router.push("/")} />
    </div>
  );
}


