'use client';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  widthValue?: string;
}

export function Carousel({ items, widthValue = 'w-96' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const randomItemRef = useRef<HTMLDivElement>(null);

  let [widthNumberValue, widthUnit] = widthValue.includes('-')
    ? [Number(widthValue.split('-')[1]) * 0.25, 'rem']
    : [Number(widthValue.split(/(?=\D)/)[0]), widthValue.split(/(?=\D)/)[1]];

  if (widthValue === 'w-full') {
    widthNumberValue = 100;
    widthUnit = '%';
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const hasNext = () => {
    const carouselWidth = carouselRef.current?.clientWidth;
    const itemWidth = randomItemRef.current?.clientWidth;
    if(carouselWidth && itemWidth) {
      const fitInScreen = Math.floor(carouselWidth / itemWidth);
      return fitInScreen !== items.length - currentIndex;
    }
    return true;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * widthNumberValue}${widthUnit})` }}
      >
        {items.map((item, index) => (
          <div ref={randomItemRef} key={index} className={`${widthValue} flex-shrink-0`}>
            {item}
          </div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-r-lg hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {hasNext() && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-l-lg hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
