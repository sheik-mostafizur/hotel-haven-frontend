import Main from "../../layout/main";

const AboutUs: React.FC = () => {
  return (
    <Main>
      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-6 py-4 rounded-lg md:w-1/2 md:mx-auto text-center text-xl md:text-4xl font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img
                        src="https://www.svgrepo.com/show/503163/api-settings.svg"
                        alt="API Icon"
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Unparalleled Luxury and Comfort
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                   Our home is not just a place to rest your head; it's an experience in luxury and comfort. Our [Number of Rooms] beautifully appointed rooms and suites are designed with your relaxation and convenience in mind. From plush bedding to stunning views, we provide the perfect environment for your enjoyment
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img
                        src="https://www.svgrepo.com/show/503138/webpack.svg"
                        alt="SDK Icon"
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                     Impeccable Service
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our dedicated staff is committed to providing service that exceeds your expectations. From the moment you arrive until your departure, you'll be greeted with warm smiles and a willingness to cater to your every need. Your comfort and satisfaction are our top priorities.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img
                        src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                        alt="Transaction Cost Icon"
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Exclusive Offers
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                  In summary, at [Your Hotel's Name], we're not just a place to stay; we're your gateway to a world of luxury, comfort, and unforgettable moments. Choose us for an experience that's truly exceptional.

Thank you for considering us as your preferred destination. We look forward to the opportunity to host you and ensure your stay is nothing short of extraordinary.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img
                        src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
                        alt="Dashboard Icon"
                      />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Commitment to Sustainability
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                  We care about the planet, and we're taking steps to reduce our environmental footprint. When you choose [Your Hotel's Name], you're choosing a hotel with a commitment to sustainability and responsible practices.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="shadow rounded-xl">
            <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-[#5355] rounded-xl">
              <aside className="p-8 space-y-4 md:p-16">
                <h2 className="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                  Ready to enjoy your days. Let's start to booking our awesome hotels 
                </h2>

                <p className="font-medium text-blue-100 md:text-2xl">
                  Explore our site, know our services and booked which you will be comfort.
                </p>

                <div>
                  <a
                    href="/hotel"
                    className="bg-white text-blue-600 px-4 py-2 mt-3 rounded-xl">
                    let's go to hotels
                  </a>
                </div>
              </aside>

              <aside className="relative hidden md:block">
                <img
                  className="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg"
                  src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg"
                  alt="Discover our beautiful panel"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-8">
        <h2 className="font-bold text-orange-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our Awesome Services
        </h2>

        {/* First content section */}
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-2">
            <img
              src="https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg?size=432"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Luxurious Accommodations
            </h3>
            <p className="sm:text-lg mt-6">
            Ensure that your rooms and suites are comfortable, well-furnished, and equipped with modern amenities.
            </p>
          </div>
        </div>

        {/* Second content section */}
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://img.freepik.com/free-photo/woman-talking-with-hotel-receptionist-lobby_23-2149304051.jpg?size=432"
              alt="project members"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Gourmet Dining
            </h3>
            <p className="sm:text-lg mt-6">
            Offer on-site restaurants and bars with a diverse menu, special cuisines, and a selection of beverages.
            </p>
          </div>
        </div>

        {/* thirth content section.... */}

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://img.freepik.com/free-photo/close-up-beautiful-african-woman-enjoying-massage-spa-salon_176420-13959.jpg?size=432"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Spa and Wellness Cente
            </h3>
            <p className="sm:text-lg mt-6">
            Provide a spa and wellness facility for relaxation, massages, and beauty treatments.
            </p>
          </div>
        </div>

        {/* fourth content section */}
        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://img.freepik.com/free-photo/team-business-managers-working-with-new-startup-project_171337-5864.jpg?size=432"
              alt="project members"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Meetings and Events
            </h3>
            <p className="sm:text-lg mt-6">
            Offer flexible event spaces for business meetings, conferences, weddings, and other special occasions.
            </p>
          </div>
        </div>



        {/*   newsletter part is start here...... */}


        <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
      <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">hotels</span> Updates</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Stay in the know about the latest offerings, discounts, and exclusive deals at our top-rated hotels. Whether you're planning a relaxing getaway or a business trip, our newsletter will keep you informed and ensure you have a memorable stay with us.</p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
          <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />
            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
          </div>
        </form>
      </div>
    </section>



      </div>

      
    </Main>
  );
};

export default AboutUs;
