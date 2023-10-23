import { useEffect, useState } from "react";
import Container from "../../components/ui/container";
import axios from "axios";

interface GalleryImage {
  src: string;
  alt: string;
}

const HotelGallery = () => {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);

  useEffect(() => {
    axios
      .get("/db/homeGallery.json")
      .then(({ data }) => {
        setGallery(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="lg:py-16">
      <h2 className="text-center lg:text-5xl">Capturing Elegance</h2>
      <p className="px-4 lg:px-16 text-center py-1 font-normal">
        Experience our 'Capturing Elegance' section, where the essence of luxury
        and beauty comes to life. Immerse yourself in refined sophistication and
        timeless charm.
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-4 mx-auto my-4">
        {gallery &&
          gallery.map((image, index) => (
            <img
              key={index}
              className="h-full"
              src={image.src}
              alt={image.alt}
            />
          ))}
      </div>
    </Container>
  );
};

export default HotelGallery;
