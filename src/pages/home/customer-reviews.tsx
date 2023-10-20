import Container from "../../components/ui/container";

const CustomerReviews = () => {
  return (
    <Container className="lg:py-16">
      <div className="text-center">
        <h2 className="text-center lg:text-5xl">
          Hotel Heaven's Five-Star Reviews
        </h2>
        <p className="px-4 lg:px-16 font-normal">
          Explore what our delighted guests have to say about their Hotel Heaven
          experiences. Dive into authentic reviews that capture the essence of
          our exceptional hospitality
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-secondary-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-secondary-100 dark:border-secondary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700">
          <img
            className="object-cover rounded-full w-32 h-32 lg:w-52 lg:rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              My stay at Hotel Heaven was pure bliss. Luxurious rooms, exquisite
              dining, and impeccable service. An unforgettable experience that I
              can't wait to repeat
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="text-secondary-500">
                <h5 className="mb-2 text-xl font-medium tracking-tight dark:text-white">
                  William Thomas
                </h5>
                <p>Customer</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-secondary-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-secondary-100 dark:border-secondary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700">
          <img
            className="object-cover rounded-full w-32 h-32 lg:w-52 lg:rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              My Hotel Heaven experience was exceptional. From the lavish
              accommodations to the top-notch service, every moment was a
              delight. Can't wait to return for more!
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="text-secondary-500">
                <h5 className="mb-2 text-xl font-medium tracking-tight dark:text-white">
                  John Smith
                </h5>
                <p>Customer</p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
                <img
                  className="w-5 hover:text-primary-500"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default CustomerReviews;
