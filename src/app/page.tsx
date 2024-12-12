import Content from "@/components/content/Content"
import DiscordWidget from "@/components/sections/discord/discord_widget"
import FooterArt from "@/components/sections/footer-art/footer_art"
import LiveComponent from "@/components/sections/live/live"

export default function Home() {
  return (
    <>
      <LiveComponent />
      <Content />
      <DiscordWidget />
      <FooterArt />
    </>
  )
}
