import Container from "../../components/ui/container";

const Banner = () => {
  return (
    <Container>
      <div className="bg-[url('https://cdn.pixabay.com/photo/2019/12/26/03/51/hotel-4719609_1280.jpg')] bg-cover bg-no-repeat bg-center md:py-32 lg:py-56 md:flex">
        {/* Left Column: Text Content */}
        <div className="lg:pl-6 py-20 lg:py-0 flex-1 ms-10">
          <h1 className="text-white">
            Discover <br /> Tranquility at
            <span className="text-primary-500"> Hotel Haven</span>
          </h1>
          <p className="text-white lg:w-96 hidden md:block md:pe-96 lg:px-0">
            Welcome to Hotel Haven, where luxury meets serenity.
          </p>
        </div>

        {/* Right Column: Booking Form */}
        <div className="flex-1 p-4 rounded-2xl bg-white opacity-90">
          <h2 className="text-2xl">Find Your Room</h2>
          <form className="grid">
            <div className="mb-4">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Your Destination
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue="Choose a Location">
                  Choose a Location
                </option>
                <option value="DH">Dhaka</option>
                <option value="CH">Chittagong</option>
                <option value="CX">Cox's Bazar</option>
                <option value="SY">Sylhet</option>
                <option value="BA">Bandorban</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="check-in" className="block text-gray-700">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="check-in"
                  name="check-in"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="check-out" className="block text-gray-700">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="check-out"
                  name="check-out"
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="rooms" className="block text-gray-700">
                  Rooms
                </label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rooms" className="block text-gray-700">
                  Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="children" className="block text-gray-700">
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600"
            >
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
