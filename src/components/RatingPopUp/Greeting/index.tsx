import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const time = new Date().getHours();
    let updatedGreeting;

    if (time < 10) {
      updatedGreeting = "Good morning";
    } else if (time < 20) {
      updatedGreeting = "Good day";
    } else {
      updatedGreeting = "Good evening";
    }

    setGreeting(updatedGreeting);
  }, []);

  return (
    <div className="px-4 py-7 md:px-8 lg:py-12 bg-gray-100 mx-auto shadow-2xl max-w-xl">
      <h1 className="text-sm mb-4">
        Hey Amit
        <span className="mx-2" id="demo">
          {greeting}
        </span>
        😄,
        <br />
        <span className="text-2xl font-semibold">
          {" "}
          Thanks For Your Awesome{" "}
        </span>
        <span className="text-2xl font-semibold text-primary-400">
          Feedback!!
        </span>
      </h1>

      <div className="flex flex-col justify-center w-full text-center mt-4  sm:flex-row text-lg font-semibold">
        <button
          type="button"
          className="text-primary-400 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Greeting;
