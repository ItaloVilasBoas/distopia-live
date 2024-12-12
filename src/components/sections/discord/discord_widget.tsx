import './discord_widget.css';

export default function DiscordWidget() {
  const serverId = '1315031756629475421';
  const channelId = '1315031757241974826'

  return (
    <section className="bg-white justify-center relative">
      <div className="bg-black h-16"></div>
      <div className="upper-teeth-dark"></div>
      <h2 className="font-bold text-4xl text-center dystopian">
        <p>Entre no nosso</p>
        <p>servidor do discord</p>
      </h2>
      <iframe 
        className="discord-frame"
        src={`https://e.widgetbot.io/channels/${serverId}/${channelId}`}
        allow="clipboard-write" 
      />
      <div className="faixas"></div>
      <div className="bottom-teeth-dark"></div>
    </section>
  )
}
