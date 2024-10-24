import './live.css'

export default function Live() {
  const mensagem = 'Lorem ipsum dolor sit amet'

  return (
    <section>
      <div className="bg-black text-white flex items-center justify-center h-16 gap-2.5">
        <i className="bg-white rounded-full w-4 h-4"></i>
        <span className="font-bold uppercase">{mensagem}</span>
      </div>
      <div className="bocao">
        <div className="dentes-cima"></div>
        <div className="dentes-baixo"></div>
        <div className="gengiva bg-black h-64"></div>
      </div>
    </section>
  );
}

