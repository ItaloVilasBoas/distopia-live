"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Manga() {
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);

  const latestMangas = useRef(Array.from({ length: 8 }, (_, index) => index + 1).map(i => ({
    imageUrl: `https://picsum.photos/600/900?random=${i}`,
    name: `Item ${i}`,
  })));

  const mockFetchData = () => {
    setTimeout(() => {
      const items = Array
        .from({ length: 8 }, (_, index) => index + 1 + latestMangas.current.length)
        .map(i => ({
          imageUrl: `https://picsum.photos/600/900?random=${i}`,
          name: `Item ${i}`,
        }));
      latestMangas.current.push(...items);
      setLoading(false);
    }, 2000)
  };

  const checkSectionInView = () => {
    const loadingRefCurr = loadingRef.current;
    if (!loadingRefCurr) return;

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const elementTop = loadingRefCurr.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition >= elementTop - 300 && !loading) {
      if (latestMangas.current.length >= 40) return;
      setLoading(true);
      mockFetchData();
    }
  };

  useEffect(() => {
    const handleScroll = () => checkSectionInView();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <section className="bg-black">
      <div className="upper-teeth-white"></div>
      <div className="flex justify-between justify-self-center relative bottom-24">
        <div className="relative">
          <span className="text-5xl font-extrabold text-white dystopian">distopia.</span>
          <span className="text-5xl font-extrabold text-white absolute top-6 right-0 dystopian">distopia.</span>
          <span className="text-5xl font-extrabold text-white absolute bottom-6 right-0 dystopian">distopia.</span>
        </div>
      </div>
      <div className="py-5 px-12 grid grid-cols-4 gap-10">
        {latestMangas.current.map((item, index) => (
          <div key={index} className="relative hover:scale-105 transition-all duration-500 cursor-pointer">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={600}
              height={900}
              className="h-96 w-72 object-cover rounded"
            />
            <span className="absolute bottom-2 left-2 text-white">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative top-14">
        <div ref={loadingRef}
          className={`${loading ? 'bg-white rounded-full animate-bounce' : 'bg-black'} flex w-24 h-24 absolute`}>
        </div>
      </div>
      <div className="bottom-teeth-white"></div>
    </section>
  );
}
