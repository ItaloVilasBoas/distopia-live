import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distopia Artes",
};

export default function ArtsLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      {children}
    </>
  );
}
