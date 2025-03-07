import { HighlightCard } from "./FeatureCard";

import Videos from "../sections/videos/videos";
import Tweets from "../sections/tweets/tweets";
import { Carousel } from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import Loading from "../ui/loading";

export default function Content() {
  const highlights = useRef([] as HighlightCard[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/highlight')
      .then((res) => res.json())
      .then((data) => {
        highlights.current.push(...data);
        setLoading(false);
      })
      .catch(() => {
        highlights.current = [];
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-black p-8">
      <div className="pb-16">
        <h1 className="text-4xl font-bold text-white mb-8">Destaques</h1>
        <Loading isLoading={isLoading} color="white" />
        {!isLoading && highlights.current.length === 0 &&
          <div className="text-3xl text-white flex justify-center">
            Sem destaques no momento...
          </div>
        }
        <Carousel widthValue="w-full"
          items={highlights.current.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-auto px-4 gap-6 md:gap-6">
        <div className="flex gap-4">
          <div className="bg-[#feac2e] w-32 h-10"></div>
          <div className="bg-[#9e4688] w-16 h-10"></div>
          <div className="bg-white w-11 h-10"></div>
        </div>

        <div className="relative text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-white dystopian">distopia.</span>
          <span className="text-4xl md:text-5xl font-extrabold text-white absolute top-4 md:top-6 right-0 dystopian">distopia.</span>
          <span className="text-4xl md:text-5xl font-extrabold text-white absolute bottom-4 md:bottom-6 right-0 dystopian">distopia.</span>
        </div>

        <div className="flex gap-4">
          <div className="bg-[#9e4688] w-32 h-10"></div>
          <div className="bg-[#feac2e] w-16 h-10"></div>
          <div className="bg-white w-11 h-10"></div>
        </div>
      </div>

      <Videos />
      <Tweets />
    </section>
  );
}
