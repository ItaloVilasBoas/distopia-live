'use client'
import Image from 'next/image';

type FeaturedCardProps = {
  imageUrl: string;
  title: string;
  description: string;
}

export function FeatureCard({ imageUrl, title, description }: FeaturedCardProps) {

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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-4">
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}