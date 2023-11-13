import Container from "../../../components/ui/container";
import "./Location.css";

const LocationSkeleton = () => {
  return (
    <Container>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div id="card" className="animate-pulse bg-white mx-auto rounded-lg">
          <div className="w-96 h-80 bg-cover bg-secondary-200"></div>
          <div className="" id="card-body">
            <h3 id="title" className=" bg-secondary-200"></h3>
            <p id="info" className=" bg-secondary-200"></p>
          </div>
        </div>
        <div id="card" className="animate-pulse bg-white mx-auto rounded-lg">
          <div className="w-96 h-80 bg-cover bg-secondary-200"></div>
          <div className="" id="card-body">
            <h3 id="title" className=" bg-secondary-200"></h3>
            <p id="info" className=" bg-secondary-200"></p>
          </div>
        </div>
        <div id="card" className="animate-pulse bg-white mx-auto rounded-lg">
          <div className="w-96 h-80 bg-cover bg-secondary-200"></div>
          <div className="" id="card-body">
            <h3 id="title" className=" bg-secondary-200"></h3>
            <p id="info" className=" bg-secondary-200"></p>
          </div>
        </div>
        <div id="card" className="animate-pulse bg-white mx-auto rounded-lg">
          <div className="w-96 h-80 bg-cover bg-secondary-200"></div>
          <div className="" id="card-body">
            <h3 id="title" className=" bg-secondary-200"></h3>
            <p id="info" className=" bg-secondary-200"></p>
          </div>
        </div>
        <div id="card" className="animate-pulse bg-white mx-auto rounded-lg">
          <div className="w-96 h-80 bg-cover bg-secondary-200"></div>
          <div className="" id="card-body">
            <h3 id="title" className=" bg-secondary-200"></h3>
            <p id="info" className=" bg-secondary-200"></p>
          </div>
        </div>
        <div id="card" className="animate-pulse bg-white mx-auto rounded-lg">
          <div className="w-96 h-80 bg-cover bg-secondary-200"></div>
          <div className="" id="card-body">
            <h3 id="title" className=" bg-secondary-200"></h3>
            <p id="info" className=" bg-secondary-200"></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LocationSkeleton;
