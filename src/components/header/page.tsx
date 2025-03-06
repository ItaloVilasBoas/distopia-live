"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grip, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentTab = usePathname();
  const isArts = currentTab?.startsWith("/arts");
  const isMembers = currentTab?.startsWith("/members");
  const isHome = currentTab == "/";

  const textColor = isArts ? "white" : "black";
  const bgColor = isArts ? "black" : "white";
  const borderColor = isArts ? "white" : "black";

  const selectedClass = `bg-${textColor} text-${bgColor} px-6 py-4`;
  const tabClass = `text-${textColor} hover:text-[#ffb50d]`;

  const headerStyle = isArts
    ? {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/header_arts.png)",
      backgroundSize: "cover",
      width: "100%",
      backgroundPosition: "center",
    }
    : {};

  const [showMobileButtons, setShowMobileButtons] = useState(false);

  return (
    <header
      className={`flex justify-between relative items-center px-6 py-6 bg-${bgColor} border-b`}
      style={headerStyle}
    >
      <div className={`md:hidden flex items-center rounded-full border border-${borderColor} overflow-hidden`}>
        <Button variant="ghost" className={`rounded-full hover:bg-[#ffb50d] text-${textColor}`}>
          <LogIn size={18} />
        </Button>
        <Button variant="default" className={`rounded-full bg-${textColor} text-${bgColor} hover:bg-[#ffb50d]`}>
          <UserPlus size={18} />
        </Button>
      </div>
      <div className={`text-2xl font-bold text-${textColor}`}>distopia.</div>

      <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-12">
        <Link href="/members" className={isMembers ? selectedClass : tabClass}>
          Membros
        </Link>
        <div className={`h-6 w-[3px] bg-${textColor}`}></div>
        <Link href="/" className={isHome ? selectedClass : tabClass}>
          Home
        </Link>
        <div className={`h-6 w-[3px] bg-${textColor}`}></div>
        <Link href="/arts" className={isArts ? selectedClass : tabClass}>
          Artes
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <div className={`hidden md:flex items-center rounded-full border border-${borderColor} overflow-hidden`}>
          <Button variant="ghost" className={`rounded-l-full px-4 py-2 hover:bg-[#ffb50d] text-${textColor}`}>
            Entrar
          </Button>
          <Button variant="default" className={`rounded-full px-4 py-2 bg-${textColor} text-${bgColor} hover:bg-[#ffb50d]`}>
            Cadastrar
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMobileButtons(!showMobileButtons)}
        >
          <Grip className={`text-${textColor}`} />
        </Button>
      </div>

      {showMobileButtons && (
        <div className={`absolute top-full left-0 w-full bg-${bgColor} p-4 md:hidden border-t border-${borderColor} z-20`}>
          <nav className="flex items-center justify-center space-x-4">
            <a className={`text-${textColor} hover:text-[#ffb50d]`} href="/members">Membros</a>
            <div className={`h-6 w-[3px] bg-${borderColor}`} />
            <a className={`bg-${borderColor} text-${bgColor} px-6 py-2`} href="/">Home</a>
            <div className={`h-6 w-[3px] bg-${borderColor}`} />
            <a className={`text-${textColor} hover:text-[#ffb50d]`} href="/arts">Artes</a>
          </nav>
        </div>
      )}

    </header>
  );
}
