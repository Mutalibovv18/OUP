import img from './images/without-bg.png'

export default function Logo() {
  return (
    <img 
      src={img} 
      alt="Logo" 
      className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 max-w-full rounded-full"
    />
  );
}
