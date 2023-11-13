import Marquee from "react-fast-marquee";

const HotelGallerySkeleton = () => {
  return (
    <div className="bg-white animate-pulse">
      <Marquee delay={1} direction="left" className="my-1">
        <div className="w-96 object-cover h-80 bg-secondary-200 mx-1"></div>
        <div className="w-96 object-cover h-80 bg-secondary-200 mx-1"></div>
        <div className="w-96 object-cover h-80 bg-secondary-200 mx-1"></div>
        <div className="w-96 object-cover h-80 bg-secondary-200 mx-1"></div>
        <div className="w-96 object-cover h-80 bg-secondary-200 mx-1"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
      </Marquee>

      <Marquee direction="right" className="my-1">
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
        <div className="w-96 h-80 bg-secondary-200 mx-1 object-cover"></div>
      </Marquee>
    </div>
  );
};

export default HotelGallerySkeleton;
