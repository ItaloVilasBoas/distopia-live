'use client'
import Image from 'next/image';

export interface HighlightCard {
  id: number;
  name: string;
  url: string;
}

export function HighlightCard({ url, name }: HighlightCard) {
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
  const { width, height } = extractDimensions(url);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4">
      <Image
        src={url}
        alt={name}
        width={width}
        height={height}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        {/* <p className="text-gray-600">{description}</p> */}
      </div>
    </div>
  );
}
