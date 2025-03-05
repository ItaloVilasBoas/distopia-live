import { Carousel } from "@/components/ui/carousel";
import { VideoCard, VideoCardProps } from "./VideoCard";
import { useEffect, useRef, useState } from "react";
import Loading from "@/components/ui/loading";

export default function Videos() {
  const videos = useRef([] as VideoCardProps[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/recent-videos')
      .then((res) => res.json())
      .then((data) => {
        videos.current.push(...data.videos);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black md:px-32 pt-16">
      <h3 className="text-3xl dystopian font-bold text-white mb-6">Vídeos recentes</h3>
      <div className="border-y-white border-x px-6">
      <Loading isLoading={isLoading} color="white" />
      <Carousel widthValue="md:w-96 w-80"
        items={videos.current.map((item, index) => (
          <VideoCard key={index} {...item} />
        ))}
      />
      </div>
    </div>
  );
}
