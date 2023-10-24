import Container from "../../components/ui/container";
const Banner = () => {
  return (
    <Container>
      <div className="bg-[url('https://cdn.pixabay.com/photo/2019/12/26/03/51/hotel-4719609_1280.jpg')] bg-cover bg-no-repeat bg-center md:py-32 lg:py-56">
        <div className="lg:pl-6 py-20 lg:py-0">
          <h1 className="text-white">
            Discover <br /> Tranquility at
            <span className="text-primary-500"> Hotel Haven</span>
          </h1>
          <p className="text-white lg:w-96 hidden md:block md:pe-96 lg:px-0">
            Welcome to Hotel Haven, where luxury meets serenity.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
