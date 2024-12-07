export default function DiscordWidget() {
  const serverId = '1315031756629475421';
  const channelId = '1315031757241974826'

  return (
    <section className="bg-black flex justify-center">
      <iframe 
        src={`https://e.widgetbot.io/channels/${serverId}/${channelId}`}
        allow="clipboard-write" 
        height="800" 
        width="1200"
      />
    </section>
  )
}