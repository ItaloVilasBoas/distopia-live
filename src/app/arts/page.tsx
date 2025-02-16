"use client";
import Artists from "@/components/sections/artists/artists";
import Catalog from "@/components/sections/catalog/catalog";
import LatestUpdates from "@/components/sections/latest-updates/latest_updates";

export default function Artes() {
  return (
    <>
      <div className="upper-teeth-dark relative"></div>
      <LatestUpdates />
      <Catalog />
      <div className="bottom-teeth-dark"></div>
      <Artists />
    </>
  );
}
