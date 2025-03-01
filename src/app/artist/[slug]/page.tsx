import Membros from "@/app/members/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artista",
}

export default function ListOfElements() {
  return Membros();
}
