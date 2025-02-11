import Artists from "@/components/sections/artists/artists";
import Catalog from "@/components/sections/catalog/catalog";
import LatestUpdates from "@/components/sections/latest-updates/latest_updates";

export default function Artes() {
  const isOnline = false;
  const mensagem = isOnline ? "Estamos ao vivo" : "Live off";

  return (
    <>
      <div className="bg-black text-white flex items-center justify-center h-16 gap-2.5 z-10">
        <span className="bg-white rounded-full w-4 h-4 animate-pulse"></span>
        <span className="font-bold uppercase dystopian text-3xl">
          {mensagem}
        </span>
      </div>
      <div className="upper-teeth-dark relative"></div>
      <LatestUpdates />
      <Catalog />
      <div className="bottom-teeth-dark"></div>
      <Artists />
    </>
  );
}
