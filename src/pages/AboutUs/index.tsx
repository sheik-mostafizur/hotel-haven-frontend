



const AboutUs:React.FC = () => {
  return (
    <div>

      <section className="">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              We know tech, we know finance. We are fintech experts.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              We know how to handle taxation for all the
              countries we operate in. We care for our customers and help them manage cashflows.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="API Icon" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                  blanditiis ratione.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/503138/webpack.svg" alt="SDK Icon" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate SDK</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                  blanditiis ratione.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" alt="Transaction Cost Icon" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                  blanditiis ratione.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" alt="Dashboard Icon" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                  blanditiis ratione.
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
          <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-blue-600 rounded-xl">
            <aside className="p-8 space-y-4 md:p-16">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                Ready to dive in?
                Start your free trial today.
              </h2>

              <p className="font-medium text-blue-100 md:text-2xl">
                Create an account to enjoy your 5-day free trial, no credit card required.
              </p>

              <div>
                <a href="#" className="bg-white text-blue-600 px-4 py-2 mt-3 rounded-xl">
                  Start free trial
                </a>
              </div>
            </aside>

            <aside className="relative hidden md:block">
              <img
                className="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg"
                src="https://picsum.photos/200"
                alt="Discover our beautiful panel"
              />
            </aside>
          </div>
        </div>
      </div>
    </section>

      

      <div className="text-center p-8">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why to choose US?
      </h2>

      {/* First content section */}
      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img src="https://via.placeholder.com/400x240" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Simple integration
          </h3>
          <p className="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your Ruby on Rails
            projects using the provided command line interface. Just create a project and follow
            the step-by-step instructions.
          </p>
        </div>
      </div>

      {/* Second content section */}
      <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img src="https://via.placeholder.com/400x240" alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Easy collaboration
          </h3>
          <p className="sm:text-lg mt-6">
            All LocaleData projects are private. Each project can have multiple collaborators
            with different roles and access permissions. You determine who can see and edit
            your translations. Just add admins, developers, translators and configure their
            access rights.
          </p>
        </div>
      </div>

      {/* Additional content sections (repeat the structure for other sections) */}
      
    </div>
      



    <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
      <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Feedback</h2>
      <p className="mb-5 leading-relaxed text-gray-600">
        If you had any issues or you liked our product, please share with us!
      </p>
      <div className="mb-4">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="text-sm leading-7 text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
        Send
      </button>
      <p className="mt-3 text-xs text-gray-500">
        Feel free to connect with us on social media platforms.
      </p>
    </div>
      
    </div>
  )
}

export default AboutUs;