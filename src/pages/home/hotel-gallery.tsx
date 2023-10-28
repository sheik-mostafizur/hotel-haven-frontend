import { useEffect, useState } from "react";
// import Container from "../../components/ui/container";
import fetchData from "../../hooks/fetchData";
import Marquee from "react-fast-marquee";

interface GalleryImage {
  thumbnailURL: string;
  name: string;
  _id: number;
}

const HotelGallery = () => {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetchData("/db/hotel-gallery.json")
      .then((data) => setGallery(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:my-20 ">
      <h2 className="text-center">Capturing Elegance</h2>
      <p className="px-4 lg:px-16 text-center py-2 font-normal">
        Experience our 'Capturing Elegance' section, where the essence of luxury
        and beauty comes to life. Immerse yourself in refined sophistication and
        timeless charm.
      </p>
      <div>
        <Marquee delay={1} direction="left">
          {gallery.map((image) => (
            <>
              <img className="w-96 h-80" src={image.thumbnailURL} alt="" />
            </>
          ))}
        </Marquee>
        <Marquee direction="right">
          {gallery.map((image) => (
            <>
              <img className="w-96 h-80" src={image.thumbnailURL} alt="" />
            </>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HotelGallery;
