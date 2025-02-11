'use client'
import Image from 'next/image';
import './videos.css';

type FeaturedCardProps = {
  imageUrl: string;
  title: string;
}

export function VideoCard({ imageUrl, title }: FeaturedCardProps) {

  const extractDimensions = (url: string) => {
    const regex = /https:\/\/picsum\.photos\/(\d+)\/(\d+)/;
    const match = url.match(regex);

    if (match) {
      const width = parseInt(match[1], 10);
      const height = parseInt(match[2], 10);
      return { width, height };
    }

    return { width: 800, height: 400 };
  };
  const { width, height } = extractDimensions(imageUrl);

  return (
    <div className="video bg-white rounded-lg shadow-lg overflow-hidden mx-4 my-4">
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className=" h-48 object-cover"
      />
    </div>
  );
}