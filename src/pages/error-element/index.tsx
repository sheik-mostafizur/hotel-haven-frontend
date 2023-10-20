import {Link} from "react-router-dom";
import Button from "../../components/ui/button";

const ErrorElement = () => {
  return (
    <div className="bg-primary-50 h-screen flex items-center justify-center">
      <div>
        <h1 className="text-primary-500 mb-8">404 Page Not Found!</h1>
        <Link to={"/"}>
          <Button className="block mx-auto">Back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
