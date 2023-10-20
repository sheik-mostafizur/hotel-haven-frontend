import {useEffect, useState} from "react";
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
      .then(({data}) => {
        setGallery(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="lg:py-16">
      <h2 className="text-center lg:text-5xl">Capturing Elegance</h2>
      <p className="px-4 lg:px-16 font-normal">
        Explore our gallery, a visual journey showcasing the timeless elegance
        and beauty of Hotel Heaven. Witness the allure that awaits you, from
        luxurious rooms to stunning vistas.
      </p>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto px-4 my-4">
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
