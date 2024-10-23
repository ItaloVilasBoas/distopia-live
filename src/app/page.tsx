import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export default function Home() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="text-2xl font-bold">distopia.</div>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
       {/* TODO: add link here in the future */}
        <a href="#" className="text-gray-600 hover:text-black">
          Membros
        </a>
        <div className="h-6 w-px bg-gray-300"></div>
        <a href="#" className="bg-black text-white px-4 py-2">
          Home
        </a>
        <div className="h-6 w-px bg-gray-300"></div>
        <a href="#" className="text-gray-600 hover:text-black">
          Artes
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex items-center rounded-full border border-gray-300 overflow-hidden">
          <Button variant="ghost" className="rounded-l-full px-4 hover:bg-transparent">
            Entrar
          </Button>
          <Button variant="default" className="rounded-r-full px-4 bg-black hover:bg-gray-800">
            Cadastrar
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <MoreHorizontal className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}