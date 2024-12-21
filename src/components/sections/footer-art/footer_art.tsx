/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "./footer_art.css";
import DistopiaLogoSVG from "@/components/ui/distopia_logo_svg";

export default function FooterArt() {
  return (
    <section className="bg-black">
      <div className="flex justify-between">
        <div className="w-96 relative left-logo">
          <DistopiaLogoSVG />
        </div>
        <div className="w-96 relative right-logo overflow-x-clip">
          <DistopiaLogoSVG />
        </div>
      </div>
      <div className="upper-teeth-white absolute z-10" style={{ marginBottom: '-10rem' }}></div>
      <div className="bg-white relative">
        <div className="bg-black">
          <img 
            src="/assets/art_footer.png" 
            style={{ color: "transparent", width: '100%', height: 'auto', placeSelf: 'end' }}
          />
        </div>
      </div>
      <div className="bottom-teeth-white" style={{ marginTop: '-10rem' }}></div>
    </section>
  );
}
