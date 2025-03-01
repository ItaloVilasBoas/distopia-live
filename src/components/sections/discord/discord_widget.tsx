import { config } from "@/lib/config";

export default function DiscordWidget() {
  const serverId = config.DISCORD_SERVER_ID;
  const channelId = config.DISCORD_CHANNEL_ID;

  return (
    <section className="bg-white justify-center relative">
      <div className="bg-black h-16"></div>
      <div className="upper-teeth-dark"></div>
      <h2 className="font-bold text-4xl text-center dystopian">
        <p>Entre no nosso</p>
        <p>servidor do discord</p>
      </h2>
      <iframe
        className="absolute left-0 right-0 top-[100px] bottom-0 m-auto h-[600px] w-[70%] rounded-2xl z-10 shadow-[rgba(0,0,0,0.5)_0px_14px_28px,rgba(0,0,0,0.42)_0px_10px_10px] "
        src={`https://e.widgetbot.io/channels/${serverId}/${channelId}`}
        allow="clipboard-write"
      />
      <div className="w-full h-[600px] bg-[#A94F95] mt-14 mb-14 [clip-path:polygon(0%_70%,0_100%,50%_0,100%_100%,100%_70%,50%_0)]"></div>
      <div className="bottom-teeth-dark"></div>
    </section>
  );
}
