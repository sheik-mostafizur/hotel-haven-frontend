import {useEffect, useState} from "react";
import Container from "../../components/ui/container";
import fetchData from "../../hooks/fetchData";

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
    <Container className="lg:py-20">
      <h2 className="text-center">Capturing Elegance</h2>
      <p className="px-4 lg:px-16 text-center py-2 font-normal">
        Experience our 'Capturing Elegance' section, where the essence of luxury
        and beauty comes to life. Immerse yourself in refined sophistication and
        timeless charm.
      </p>
      {/* <Carousel
        className="grid grid-rows-2"
        autoPlay={true}
        showArrows={false} // Optionally hide navigation arrows
        infiniteLoop={true} // Optionally enable infinite loop
        interval={2000} // Auto-scroll interval in milliseconds (3 seconds in this example)
        showThumbs={false} // Optionally hide thumbnails
      > */}
      <div className="grid md:grid-cols-1 mx-auto lg:grid-cols-4 gap-3">
        {gallery &&
          gallery.map((image) => (
            <div key={image._id}>
              <img
                src={image.thumbnailURL}
                alt={image.name}
                className="h-full bg-center bg-cover"
              />
            </div>
          ))}
      </div>
      {/* </Carousel> */}
    </Container>
  );
};

export default HotelGallery;
