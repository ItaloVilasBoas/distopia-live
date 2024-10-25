import Content from "@/components/content/Content"
import Header from "@/components/header/page"
import Main from "@/components/main/page"

export default function Home() {
  return (
    <>
      {/* TODO: move to layout.tsx header logic*/}
      <Header />
      <Main />
      <Content />
    </>
  )
}
