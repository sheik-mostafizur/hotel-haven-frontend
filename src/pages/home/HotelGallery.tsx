import Marquee from "react-fast-marquee";
import Container from "../../components/ui/container";
import useAxiosGet from "../../hooks/useAxiosGet";
import {HashSpinner} from "../../components/spinner";

interface GalleryImage {
  imageURL: string;
  alt: string;
  _id: number;
}

const HotelGallery = () => {
  const {data, isLoading} = useAxiosGet("/public/gallery");
  const initialGallery: GalleryImage[] = [];
  const images = data || initialGallery;

  return (
    <Container className="lg:my-20 ">
      <h2 className="text-center">Capturing Elegance</h2>
      <p className="px-4 lg:px-16 text-center py-2 font-normal">
        Experience our 'Capturing Elegance' section, where the essence of luxury
        and beauty comes to life. Immerse yourself in refined sophistication and
        timeless charm.
      </p>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div>
          <Marquee delay={1} direction="left">
            {images &&
              images.map((image: GalleryImage) => (
                <img
                  key={image._id}
                  className="w-96 h-80"
                  src={image.imageURL}
                  alt={image.alt}
                />
              ))}
          </Marquee>
          <Marquee direction="right">
            {images &&
              images.map((image) => (
                <img
                  key={image._id}
                  className="w-96 h-80"
                  src={image.imageURL}
                  alt={image.alt}
                />
              ))}
          </Marquee>
        </div>
      )}
    </Container>
  );
};

export default HotelGallery;
