import {Link} from "react-router-dom";
import Button from "../../components/ui/button";
import SetTitle from "../../components/set-title";

const ErrorElement = () => {
  return (
    <div className="bg-primary-700 h-screen flex items-center justify-center">
      <SetTitle title={`404 Page Not Found`} />
      <div>
        <h1 className="text-white mb-8">404 Page Not Found!</h1>
        <Link to={"/"}>
          <Button className="block mx-auto">Back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
