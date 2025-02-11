import DistopiaLogoSVG from "@/components/ui/distopia_logo_svg";
import Image from "next/image";
import Link from "next/link";


export default function LatestUpdates() {
  const latestMangas = [1,2,3,4,5].map(i => ({
    imageUrl: `https://picsum.photos/800/400?random=${i}`,
    name: `Item ${i}`,
  }));
  const latestAnimation = [6,7,8,9,10].map(i => ({
    imageUrl: `https://picsum.photos/800/400?random=${i}`,
    name: `Item ${i}`,
  }));
  const latestGallery = [11,12,13,14,15].map(i => ({
    imageUrl: `https://picsum.photos/800/400?random=${i}`,
    name: `Item ${i}`,
  }));
  const sections = [
    { title: 'Mangá', list: latestMangas, link: '/arts/nao-implementado' },
    { title: 'Animação', list: latestAnimation, link: '/arts/nao-implementado' },
    { title: 'Galeria', list: latestGallery, link: '/arts/nao-implementado' },
  ];

  return (
    <section>
      <div className="relative flex flex-col items-center mt-[-100px] mb-16">
        <div className="w-16 mb-8">
          <DistopiaLogoSVG />
        </div>
        <h2 className="text-3xl font-semibold dystopian">
          Ultimas Atualizações
        </h2>
      </div>

      <div className="flex gap-16 w-2/3 justify-self-center">

        {sections.map((section, index) => (
          <div className="w-4/12 flex flex-col gap-2 items-center" key={index}>
            <span>{ section.title }</span>
            <div className="flex flex-col gap-2 max-h-[680px] overflow-hidden ">
              {section.list.map((item, index) => (
                <Image src={item.imageUrl} alt={item.name} width={800} height={800} className="object-cover" key={index}/>
              ))}
            </div>
            <Link href={section.link}>Veja mais</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
