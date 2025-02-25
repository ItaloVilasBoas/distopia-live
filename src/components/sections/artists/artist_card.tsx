import Image from "next/image";

type ArtistCardProps = {
  id: number;
  avatarUrl: string;
  name: string;
}

export default function ArtistCard({ id, avatarUrl: imageUrl, name }: ArtistCardProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="rounded-full shadow-lg overflow-hidden mx-4">
        <Image
          src={imageUrl}
          alt={name}
          width={800}
          height={800}
          className="object-cover"
        />
      </div>
      <span className="text-white text-xl">{name}</span>
      <span className="text-orange-400 text-xs cursor-pointer">Olhar a galeria</span>
    </div>
  );
}
