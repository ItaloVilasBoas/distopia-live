interface LoadingComponentProps {
  isLoading: boolean;
  color?: string;
}

export default function LoadingComponent({ isLoading, color='black' }: LoadingComponentProps) {
  return isLoading ?
    <div className="flex justify-center relative top-14 h-52">
      <div className={"bg-black rounded-full animate-bounce flex w-20 h-20 absolute bg-" + color}></div>
      <div className={"flex items-center text-"+color}>Carregando...</div>
    </div> : <></>;
}
