import Container from "../ui/container";

const SuccessSkeleton = () => {
  return (
    <Container>
      {/*  className="flex items-center justify-center h-screen" */}
      <div className="bg-white animate-pulse py-4 md:py-8 px-4 md:px-8 mx-auto shadow md:shadow-lg rounded text-center max-w-lg">
        <h1 className=" mx-auto mb-4 bg-secondary-200 w-52 h-8"></h1>
        <div className="bg-cover rounded-full bg-secondary-200 w-32 h-32 text-center mx-auto mb-2"></div>
        <p className="mb-4 bg-secondary-200 w-full h-4"></p>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex items-center justify-between">
            <p className="bg-secondary-200 w-20 h-6"></p>
            <p className="bg-secondary-200 w-20 h-6"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="bg-secondary-200 w-20 h-6"></p>
            <p className="bg-secondary-200 w-20 h-6"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="bg-secondary-200 w-20 h-6"></p>
            <p className="bg-secondary-200 w-20 h-6"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="bg-secondary-200 w-20 h-6"></p>
            <p className="bg-secondary-200 w-20 h-6"></p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <p className="bg-secondary-200 w-20 h-6"></p>
            <p className="bg-secondary-200 w-20 h-6"></p>
          </div>
          <div className="flex items-center justify-between">
            <p className="bg-secondary-200 w-20 h-6"></p>
            <p className="bg-secondary-200 w-20 h-6"></p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className=" bg-secondary-200  rounded-lg px-8 py-2.5 me-2 "
            ></button>
            <button
              type="button"
              className=" bg-secondary-200  rounded-lg px-8 py-2.5 me-2 "
            ></button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SuccessSkeleton;
