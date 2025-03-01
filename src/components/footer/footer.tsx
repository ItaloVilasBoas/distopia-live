import DistopiaLogoSVG from "../ui/distopia_logo_svg";

export default function Footer() {
  return (
    <footer>
      <div className="upper-teeth-dark"></div>
      <div className="relative flex flex-col items-center mt-[-100px] mb-16">
        <div className="w-24 mb-8">
          <DistopiaLogoSVG />
        </div>
        <h2 className="text-5xl font-extrabold dystopian">distopia.</h2>
      </div>
      <div className="md:flex justify-self-center md:justify-between w-1/3">
        <h3 className="font-bold dystopian text-2xl">Sobre</h3>
        <h3 className="font-bold dystopian text-2xl">Membros</h3>
        <h3 className="font-bold dystopian text-2xl">Ajuda</h3>
      </div>
      <div className="h-32"></div>
    </footer>
  );
}
