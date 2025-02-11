"use client"

import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentTab = usePathname();
  const isArts = currentTab?.startsWith("/arts");
  const isMembers = currentTab?.startsWith("/members");
  const isHome = currentTab == "/";

  const textColor = isArts ? "white" : "black";
  const bgColor = isArts ? "black" : "white";
  const borderColor = isArts ? "white" : "neutral-950";

  const selectedClass = `bg-${textColor} text-${bgColor} px-4 py-2`;
  const tabClass = `text-${textColor} hover:text-[#ffb50d]`;

  return (
    <header className={`flex items-center justify-between px-6 py-4 bg-${bgColor} border-b`}>
      <div className={`text-2xl font-bold text-${textColor}`}>distopia.</div>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-12">
        <Link href="/members" className={ isMembers ? selectedClass : tabClass }>Membros</Link>
        <div className={`h-6 w-[3px] bg-${textColor}`}></div>
        <Link href="/" className={ isHome ? selectedClass : tabClass }>Home</Link>
        <div className={`h-6 w-[3px] bg-${textColor}`}></div>
        <Link href="/arts" className={isArts ? selectedClass : tabClass}>Artes</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className={`flex items-center rounded-full border border-${borderColor} overflow-hidden`}>
          <Button variant="ghost" className={`rounded-l-full px-4 hover:bg-[#ffb50d] text-${textColor}`}>Entrar</Button>
          <Button variant="default" className={`rounded-full px-4 bg-${textColor} text-${bgColor} hover:bg-[#ffb50d]`}>Cadastrar</Button>
        </div>
        <Button variant="ghost" size="icon">
          <Grip className={`text-${textColor}`} />
        </Button>
      </div>
    </header>
  );
}
