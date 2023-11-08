import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";

const License: React.FC = () => {
  return (
    <Main>
      <Container>
        <div>
          <h1>Licensing Information</h1>

          <p>
            Welcome to Hotel Haven, a hotel booking service located in Dhaka,
            Bangladesh. Here, we provide information about the licensing and
            registration of our business.
          </p>

          <h2>Business Information</h2>

          <p>
            <strong>Business Name:</strong> Hotel Haven
          </p>
          <p>
            <strong>Email:</strong> hotelhaven@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Dhaka, Bangladesh
          </p>

          <h2>Licensing and Registration</h2>

          <p>
            Hotel Haven is a legally registered and licensed business in Dhaka,
            Bangladesh. We adhere to all relevant regulations and requirements
            as set forth by the local authorities.
          </p>
        </div>
      </Container>
    </Main>
  );
};

export default License;
