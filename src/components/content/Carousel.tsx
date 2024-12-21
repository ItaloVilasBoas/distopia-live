'use client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  widthValue?: string; 
}

export function Carousel({ items, widthValue = 'w-96' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  let [widthNumberValue, widthUnit] = widthValue.includes('-') 
    ? [Number(widthValue.split('-')[1]) * 0.25, 'rem']
    : [Number(widthValue.split(/(?=\D)/)[0]), widthValue.split(/(?=\D)/)[1]]; 
  if(widthValue === 'w-full') {
    widthNumberValue = 100;
    widthUnit = '%';
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * widthNumberValue}${widthUnit})` }}
      >
        {items.map((item, index) => (
          <div key={index} className={`${widthValue} flex-shrink-0`}>
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-r-lg hover:bg-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-l-lg hover:bg-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
