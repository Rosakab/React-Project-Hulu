import img5 from "../assets/img5.jpg";

const Slider = () => {
  return (
    <div>
      <img src={img5} alt="" className="relative w-full h-full "></img>
      <div className="flex justify-between">
        <h1 className="absolute md:text-[44px] top-80 right-20 animate-pulse
         text-pink-600 text-shadow font-serif  font-extrabold sm:text-[10px]">
          Spring New Arrivals
        </h1>
      </div>
    </div>
  );
};

export default Slider;
