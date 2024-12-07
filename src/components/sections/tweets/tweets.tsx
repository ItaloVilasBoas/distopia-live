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
    <div className="min-h-screen bg-black px-32 pt-16">
      <h3 className="text-3xl font-bold text-white mb-6">Tweets recentes</h3>
      <Carousel widthValue="w-96"
        items={htmlList.map((__html, index) => (
          <TweetCard key={index} __html={__html} />
        ))}
      />
    </div>
  );
}
