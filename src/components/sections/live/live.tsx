"use client";

import { useEffect, useState } from 'react';
import './live.css'

const LiveComponent = () => {
  const [mensagem, setMensagem] = useState('Estamos ao vivo');
  const [estaAoVivo, setEstaAoVivo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMensagem((prevMensagem) => prevMensagem === 'Estamos ao vivo' ? 'Estamos offline' : 'Estamos ao vivo');
      setEstaAoVivo((prevValor) => !prevValor)
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="bg-black text-white flex items-center justify-center h-16 gap-2.5">
        <span className="bg-white rounded-full w-4 h-4 animate-pulse"></span>
        <span className="font-bold uppercase">{mensagem}</span>
      </div>
      <div className="bocao">
        <div className="dentes-cima"></div>
        {estaAoVivo && 
          <div className="live-wave-container h-64">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="live-wave rounded-full"></div>
          ))}
          </div>
        }
        <div className="dentes-baixo"></div>
        <div className="gengiva bg-black h-64"></div>
      </div>
    </section>
  );
}

export default LiveComponent;