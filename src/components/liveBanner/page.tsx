export default function LiveBanner() {
  return (
    <div className="w-full bg-black py-4 px-4 flex items-center justify-center">
      <div className="flex justify-center items-center space-x-2">
        <span className="w-4 h-4 bg-white rounded-full mb-1 animate-pulse" aria-hidden="true"></span>
        <span className="text-white font-bold text-sm sm:text-2xl uppercase">
          Estamos ao vivo
        </span>
      </div>
    </div>
  )
}