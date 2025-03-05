import Image from 'next/image';
import './videos.css';

export interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail
    high: Thumbnail
    standard: Thumbnail
    maxres: Thumbnail
  }
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export function VideoCard(props: VideoCardProps) {
  const handleClick = () => window.open(`https://www.youtube.com/watch?v=${props.id}`, '_blank');

  return (
    <div className="video bg-white rounded-lg shadow-lg overflow-hidden mx-4 my-4" onClick={handleClick}>
      <Image
        src={props.thumbnails.standard.url}
        alt={props.title}
        width={props.thumbnails.standard.width}
        height={props.thumbnails.standard.height}
        className="h-48 object-cover"
      />
    </div>
  );
}
