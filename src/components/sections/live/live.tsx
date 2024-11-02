"use client";

import './live.css';
import DistopiaSVG from './distopia_svg';
import LogoDistopia from './logo';
import usePooling from '@/hooks/usePooling';
import { config } from '@/lib/config';

const LiveComponent = () => {
  const isOnline = usePooling(config.baseUrl, {
    headers: {
      'X-API-Key': config.apiKey,
    },
  });

  const mensagem = isOnline ? 'Estamos ao vivo' : 'Estamos offline';

  return (
    <section>
      <div className="bg-black text-white flex items-center justify-center h-16 gap-2.5">
        <span className="bg-white rounded-full w-4 h-4 animate-pulse"></span>
        <span className="font-bold uppercase">{mensagem}</span>
      </div>
      <div className="bocao">
        <div className="dentes-cima"></div>
        <div className={`live-wave-container ${isOnline ? 'active' : ''}`}>
          {[...Array(10)].map((_, i) => ( <div key={i} className="live-wave rounded-full"></div>))}
          <div style={{ width: '100vw' }}>
            <DistopiaSVG/>
          </div>
          <div className="distopia-logo">
            <LogoDistopia/>
          </div>
        </div>
        <div className="dentes-baixo"></div>
        <div className="gengiva bg-black h-64"></div>
      </div>
    </section>
  );
};

export default LiveComponent;
