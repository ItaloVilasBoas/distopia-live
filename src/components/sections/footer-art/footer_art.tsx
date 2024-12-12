import './footer_art.css';
import DistopiaLogoSVG from "@/components/ui/distopia_logo_svg";

export default function FooterArt() {
  return (
    <section className="bg-black">
      <div className="flex justify-between">
        <div className="w-96 relative left-logo">
          <DistopiaLogoSVG/>
        </div>
        <div className="w-96 relative right-logo overflow-x-clip">
          <DistopiaLogoSVG/>
        </div>
      </div>
      <div className="upper-teeth-white"></div>
      <div className="text-white text-center h-[200px]">Imagem Aqui</div>
      <div className="bottom-teeth-white"></div>
    </section>
  )
}
