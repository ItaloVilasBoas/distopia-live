import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Distopia Membros",
}

export default function Membros() {
  return (
    <section className="flex items-center justify-center bg-[#dcdbd7]">
      <span className="text-4xl font-bold">Em construção...</span>
      <Image
        src="/assets/in_progress.webp"
        alt="Em construção"
        width={800}
        height={800}
        className="object-cover"
      />
    </section>);
}
