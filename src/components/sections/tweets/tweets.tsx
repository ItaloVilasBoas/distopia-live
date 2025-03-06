/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { Carousel } from "@/components/ui/carousel";
import { TweetCard } from "./tweet_card";
import Loading from "@/components/ui/loading";

interface Tweet {
  blockquote: string;
  id: string;
  created_date: Date;
  expiresAt: number;
}

export default function Tweets() {
  const htmlList = useRef([] as string[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/tweets')
      .then(res => res.json())
      .then((data: { tweets: Tweet[] }) => {
        htmlList.current.push(...data.tweets.map(t => t.blockquote));
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black md:pt-16">
      <div className="bg-white flex justify-between overflow-hidden">
        <img src="/assets/footer_art_left.png" alt="" style={{ width: '500px', marginRight: '-400px' }} />
        <div className="md:w-[60%] w-[85%] pt-20">
          <h3 className="text-3xl dystopian font-bold mb-6 max-sm:text-xl max-sm:ml-20">Tweets recentes</h3>
          <Loading isLoading={isLoading} />
          <Carousel widthValue="w-80"
            items={htmlList.current.map((__html, index) => (
              <TweetCard key={index} __html={__html} />
            ))}
          />
        </div>
        <img src="/assets/footer_art_right.png" alt="" style={{ width: '500px', marginLeft: '-400px' }} />
      </div>
    </div>
  );
}
