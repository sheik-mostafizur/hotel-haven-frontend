import Container from "../../../components/ui/container";

interface HeaderProps {
  isLoading: boolean;
  hotelPhotoURL?: string;
  roomsURL: string[];
  name: string;
  location: string;
  rating: number;
  description: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const {
    isLoading,
    hotelPhotoURL = "",
    roomsURL = [],
    name,
    location,
    rating,
    description,
  } = props;
  return (
    <>
      {isLoading ? (
        <Container className="animate-pulse bg-white mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="h-60 md:h-64 lg:h-80 xl:h-96 bg-secondary-200 rounded"></div>
            <div className="grid grid-cols-2 items-start gap-1">
              <div className="h-32 md:h-full bg-secondary-200 rounded"></div>
              <div className="h-32 md:h-full bg-secondary-200 rounded"></div>
              <div className="h-32 md:h-full bg-secondary-200 rounded"></div>
              <div className="h-32 md:h-full bg-secondary-200 rounded"></div>
            </div>
          </div>
          <div className="space-y-3 mt-4 shadow p-4">
            <div className="h-14 md:h-8 bg-secondary-200 rounded"></div>
            <div className="h-6 bg-secondary-200 rounded"></div>
            <div className="h-6 bg-secondary-200 rounded"></div>
            <div className="h-32 bg-secondary-200 rounded"></div>
          </div>
        </Container>
      ) : (
        <Container className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div>
              <img
                src={hotelPhotoURL}
                alt=""
                className="h-full object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-2 items-start gap-1">
              {roomsURL.map((url) => (
                <img
                  key={url}
                  src={url}
                  className="h-full w-full object-cover rounded"
                />
              ))}
            </div>
          </div>
          <div className="space-y-3 mt-4 shadow p-4">
            <h3>{name}</h3>
            <p>
              <b>Location: </b> {location}
            </p>
            <p>
              <b>Rating: </b> {rating}
            </p>
            <p>
              <b>Description: </b> {description}
            </p>
          </div>
        </Container>
      )}
    </>
  );
};

export default Header;
