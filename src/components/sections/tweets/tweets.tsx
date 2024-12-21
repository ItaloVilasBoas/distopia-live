/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react";
import { Carousel } from "../../content/Carousel";
import { TweetCard } from "./tweet_card";

export default function Tweets() {
  const [htmlList, setHtmlList] = useState<string[]>([]);
  useEffect(() => {
    fetch('/api/tweets')
      .then(res => res.json())
      .then(data => {
        setHtmlList(data.tweets);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="bg-white flex justify-between">
        <img src="/assets/footer_art_left.png" alt="" style={{ width: '500px', marginRight: '-400px' }} />
        <div className="w-[60%] pt-20">
          <h3 className="text-3xl dystopian font-bold mb-6">Tweets recentes</h3>
          <Carousel widthValue="w-80"
            items={htmlList.map((__html, index) => (
              <TweetCard key={index} __html={__html} />
            ))}
          />
        </div>
        <img src="/assets/footer_art_right.png" alt="" style={{ width: '500px', marginLeft: '-400px' }} />
      </div>

    </div>
  );
}
