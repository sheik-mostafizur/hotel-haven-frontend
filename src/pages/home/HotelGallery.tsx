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
      <Container className="lg:my-20 ">
        <div className="mb-6 mx-auto">
          <h2 className="text-center uppercase">
            {" "}
            Explore Our Exquisite Hotel Collection
          </h2>
          <p className="text-center">
            Immerse yourself in elegance with our curated selection of
            world-class hotels.
          </p>
        </div>
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
