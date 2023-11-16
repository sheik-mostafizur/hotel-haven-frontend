import {useEffect, useState} from "react";
import {useAppSelector} from "../../../redux/hooks";
import {Link} from "react-router-dom";
import Button from "../../ui/button";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");
  const user = useAppSelector((state) => state.auth.user);

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
        Hey {user.name}
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
        <Link to={"/"}>
          <Button>Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Greeting;
