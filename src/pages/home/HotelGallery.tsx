import Marquee from "react-fast-marquee";
import Container from "../../components/ui/container";
import { HashSpinner } from "../../components/spinner";
import { useGetHotelGalleryQuery } from "../../api/public-api";

interface GalleryImage {
  imageURL: string;
  alt: string;
  _id: number;
}

const HotelGallery = () => {
  const { data, isLoading } = useGetHotelGalleryQuery(undefined);
  const initialGallery: GalleryImage[] = [];
  const images = data || initialGallery;

  return (
    <div className="dark:bg-secondary-700">
      <Container className="lg:py-20 ">
        <h2 className="text-center">Capturing Elegance</h2>
        <p className="px-4 lg:px-16 text-center py-2 font-normal">
          Immerse yourself in refined sophistication and timeless charm.
        </p>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <div>
            <Marquee delay={1} direction="left">
              {images &&
                images
                  .slice(0, images.length / 2)
                  .map((image: GalleryImage) => (
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
                images
                  .slice(images.length / 2)
                  .map((image: GalleryImage) => (
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
    </div>
  );
};

export default HotelGallery;
