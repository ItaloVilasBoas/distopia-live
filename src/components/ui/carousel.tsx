'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: React.ReactNode[];
  widthValue?: string;
}

export function Carousel({ items, widthValue = 'w-96' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWidthValue, setCurrentWidthValue] = useState(0);
  const [currentWidthUnit, setCurrentWidthUnit] = useState('');
  const carouselRef = useRef<HTMLDivElement>(null);
  const randomItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const extractRealWidth = (): string => {
      let realWidth = widthValue;
      if(widthValue.includes('lg:')) {
        const lgValue = realWidth.split('lg:')[1].split(' ')[0]
        if (window.innerWidth > 1024 ) return lgValue;
        realWidth = realWidth.replace(`lg:${lgValue}`, '');
      }

      if(widthValue.includes('md:')) {
        const mdValue = realWidth.split('md:')[1].split(' ')[0];
        if (window.innerWidth > 768) return mdValue;
        realWidth = realWidth.replace(`md:${mdValue}`, '');
      }

      if(widthValue.includes('sm:')) {
        const smValue = realWidth.split('sm:')[1].split(' ')[0];
        if (window.innerWidth > 640) return smValue;
        realWidth = realWidth.replace(`sm:${smValue}`, '');
      }

      return realWidth.trim();
    };

    const extractCurrentWidthValueAndUnit = (): [number, string] => {
      const realWidthString = extractRealWidth();
      if (realWidthString === 'w-full') return [100, '%'];
      return realWidthString.includes('-')
        ? [Number(realWidthString.split('-')[1]) * 0.25, 'rem']
        : [Number(realWidthString.split(/(?=\D)/)[0]), realWidthString.split(/(?=\D)/)[1]];
    };

    const updateSize = () => {
      const [widthNumberValue, widthUnit] = extractCurrentWidthValueAndUnit();

      setCurrentWidthValue(() => widthNumberValue);
      setCurrentWidthUnit(() => widthUnit);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [widthValue]);

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
        style={{ transform: `translateX(-${currentIndex * currentWidthValue}${currentWidthUnit})` }}
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
