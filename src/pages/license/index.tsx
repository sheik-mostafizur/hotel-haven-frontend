import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";
import SetTitle from "../../components/set-title";

const License: React.FC = () => {
  return (
    <Main>
      <SetTitle title={`License`} />
      <Container className="my-4 md:my-16">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl font-extrabold text-primary-500 mb-6">
              Licensing Information
            </h1>

            <p className="text-secondary-700 mb-6">
              Welcome to Hotel Haven, an elegant hotel booking service located
              in Dhaka, Bangladesh. Here, we provide detailed information about
              the licensing and registration of our business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              Business Information
            </h2>
            <p className="text-secondary-700">
              <strong>Business Name:</strong> Hotel Haven
            </p>
            <p className="text-secondary-700">
              <strong>Email:</strong> hotelhaven@gmail.com
            </p>
            <p className="text-secondary-700">
              <strong>Location:</strong> Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-500 my-4">
              Licensing and Registration
            </h2>

            <p className="text-secondary-700">
              Hotel Haven is a legally registered and licensed business in
              Dhaka, Bangladesh. We meticulously adhere to all relevant
              regulations and requirements as set forth by the local
              authorities, ensuring a sophisticated and secure experience.
            </p>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default License;
