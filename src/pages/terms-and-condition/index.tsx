import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";
import SetTitle from "../../components/set-title";

const TermsAndConditions: React.FC = () => {
  return (
    <Main>
      <SetTitle title={`Terms And Conditions`} />
      <Container className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="text-center p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-primary-400 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-700 text-center mb-8">
            Please read these Terms and Conditions carefully before using the
            Hotel Haven website. By accessing and using this website, you agree
            to comply with and be bound by these terms. If you do not agree to
            these terms, please do not use this website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              1. Use of the Website
            </h2>
            <p className="text-gray-700">
              You must be at least 18 years of age or have the necessary legal
              capacity to use this website. Agree to use the website in
              accordance with all applicable local, state, and federal laws and
              regulations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              2. Privacy
            </h2>
            <p className="text-gray-700">
              Your use of this website is also governed by our Privacy Policy.
              Please review our Privacy Policy to understand how we collect and
              use your personal information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              3. Booking and Reservations
            </h2>
            <p className="text-gray-700">
              When making reservations through our website, you agree to provide
              accurate and complete information. Any bookings made through our
              website are subject to availability and confirmation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              4. Payment
            </h2>
            <p className="text-gray-700">
              Payment for reservations made through our website is subject to
              the terms and conditions provided during the booking process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              5. Cancellation and Refund
            </h2>
            <p className="text-gray-700">
              Cancellation and refund policies may vary depending on the
              specific booking. Please review the cancellation and refund
              policies provided during the booking process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700">
              The content on this website, including text, images, logos, and
              other materials, is protected by copyright and other intellectual
              property laws. You may not use, modify, or distribute the content
              without our permission.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-400 mb-4">
              7. Changes to the Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to modify or revise these terms and
              conditions at any time. Any changes will be effective immediately
              upon posting on this website. It is your responsibility to review
              the terms and conditions periodically.
            </p>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default TermsAndConditions;
