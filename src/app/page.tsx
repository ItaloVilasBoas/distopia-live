import Content from "@/components/content/Content"
import DiscordWidget from "@/components/sections/discord/discord_widget"
import LiveComponent from "@/components/sections/live/live"

export default function Home() {
  return (
    <>
      <LiveComponent />
      <Content />
      <DiscordWidget />
    </>
  )
}
