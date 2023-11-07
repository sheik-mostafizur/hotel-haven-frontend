import FindRoomForm from "../../components/find-room-form";
import Container from "../../components/ui/container";


const Banner = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2019/12/26/03/51/hotel-4719609_1280.jpg')] bg-cover bg-no-repeat bg-center max-h-[750px]">
      <Container>
        <div className="py-8 md:py-32 lg:py-56 grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-4 justify-center mb-4">
            <h1 className="text-white text-2xl md:text-5xl ">
              Discover <br /> Tranquility at
              <span className="text-primary-500"> Hotel Haven</span>
            </h1>
            <p className="text-white lg:w-96 hidden md:block md:pe-96 lg:px-0">
              Welcome to Hotel Haven, where luxury meets serenity.
            </p>
          </div>
          <FindRoomForm />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
