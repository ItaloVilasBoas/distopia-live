import Header from "@/components/header/page"
import Main from "@/components/main/page"

export default function Home() {
  return (
    <div>
    {/* TODO: move to layout.tsx header logic*/}
    <Header />
    <Main />
  </div>
  )
}
