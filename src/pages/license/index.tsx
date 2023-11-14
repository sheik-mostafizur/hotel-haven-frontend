import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";
import SetTitle from "../../components/set-title";

const License: React.FC = () => {
  return (
    <Main>
      <SetTitle title={`License`} />
      <Container className="bg-white p-8 rounded-lg shadow-lg">
        <div className="my-10">
          <h1 className="text-4xl font-extrabold text-primary-400 mb-6">
            Licensing Information
          </h1>

          <p className="text-gray-700 mb-6">
            Welcome to Hotel Haven, an elegant hotel booking service located in
            Dhaka, Bangladesh. Here, we provide detailed information about the
            licensing and registration of our business.
          </p>

          <h2 className="text-2xl font-bold text-primary-400 mb-4">
            Business Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <strong>Business Name:</strong> Hotel Haven
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> hotelhaven@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-400 my-4">
            Licensing and Registration
          </h2>

          <p className="text-gray-700">
            Hotel Haven is a legally registered and licensed business in Dhaka,
            Bangladesh. We meticulously adhere to all relevant regulations and
            requirements as set forth by the local authorities, ensuring a
            sophisticated and secure experience.
          </p>
        </div>
      </Container>
    </Main>
  );
};

export default License;
