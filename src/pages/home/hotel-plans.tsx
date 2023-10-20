import Container from "../../components/ui/container";
import "./hotel-plans.css";
const HotelPlans = () => {
  return (
    <Container>
      <div className="container my-20 px-4 py-20 img">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h2>Hotel Plans</h2>
            <p>
              Explore Hotel Heaven's diverse range of plans tailored to suit
              every traveler. Discover the perfect package for your dream
              vacation, be it a romantic escape or family adventure.
            </p>
            <div className="grid gap-2 md:grid-cols-2 justify-center">
              <div>
                <h3>Flexible Price</h3>
                <p>
                  Flexible Pricing: Hotel Heaven offers budget-friendly options,
                  ensuring affordability without compromising on quality for
                  your perfect stay.
                </p>
              </div>
              <div>
                <h3>Our Resort</h3>
                <p>
                  Discover Our Resort: Immerse yourself in paradise at Hotel
                  Heaven's stunning resort, where luxury meets natural beauty
                  for an unforgettable escape.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 justify-center items-center">
            <div className="card w-80 h-80 border-2">
              <p className="px-8">
                <small>Basic</small>
              </p>
              <h3 className="px-10 text-4xl">$29.99</h3>
              <hr className="mt-2" />
              <ul className="p-8">
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Food take-way option</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Easy To Access Door</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Unlimited Drinks</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                    alt=""
                  />
                  <p className="text-black">Gym & Other Equipment</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                    alt=""
                  />
                  <p className="text-black">Support 24/7 Online</p>
                </li>
              </ul>
              <div className="mx-auto text-center">
                <button className="text-white bg-secondary-800 hover:bg-secondary-900 focus:outline-none focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-secondary-800 dark:hover:bg-secondary-700 dark:focus:ring-secondary-700 dark:border-secondary-700">
                  Make your order
                </button>
              </div>
            </div>
            <div className="card w-80 h-80 border-2">
              <p className="px-8">
                <small>Advanced</small>
              </p>
              <h3 className="px-10 text-4xl">$49.99</h3>
              <hr className="mt-2" />
              <ul className="p-8">
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Food take-way option</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Easy To Access Door</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Unlimited Drinks</p>
                </li>
                <li className="flex gap-1  mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Gym & Other Equipment</p>
                </li>
                <li className="flex gap-1 mx-auto items-center">
                  <img
                    className="w-4"
                    src="https://cdn-icons-png.flaticon.com/128/5291/5291043.png"
                    alt=""
                  />
                  <p className="text-black">Support 24/7 Online</p>
                </li>
              </ul>
              <div className="mx-auto text-center">
                <button className="text-white bg-secondary-800 hover:bg-secondary-900 focus:outline-none focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-secondary-800 dark:hover:bg-secondary-700 dark:focus:ring-secondary-700 dark:border-secondary-700">
                  Make your order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HotelPlans;
