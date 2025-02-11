import Image from "next/image";

type FeaturedCardProps = {
  imageUrl: string;
  title: string;
};

export function CatalogCard({ imageUrl, title }: FeaturedCardProps) {
  return (
    <div className="video bg-white overflow-hidden mx-4 my-4">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={900}
        className="h-72 w-60 object-cover"
      />
      <span>{title}</span>
    </div>
  );
}
