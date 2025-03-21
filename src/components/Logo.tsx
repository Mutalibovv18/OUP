import img from './images/without-bg.png'

export default function Logo() {
  return (
    <img 
      src={img} 
      alt="Logo" 
      className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full"
    />
  );
}
