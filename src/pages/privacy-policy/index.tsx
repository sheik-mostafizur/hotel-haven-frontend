import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";
import SetTitle from "../../components/set-title";

const PrivacyPolicy: React.FC = () => {
  return (
    <Main>
      <SetTitle title={`Privacy Policy`} />
      <Container className="my-4 md:my-8">
        <div className="flex flex-col items-center my-10">
          <h1 className="text-4xl font-extrabold text-primary-500 mb-4">
            Privacy Policy
          </h1>

          <p className="text-secondary-700 text-center mb-8 max-w-4xl">
            This Privacy Policy describes how Hotel Haven ("we," "us," or "our")
            collects, uses, and shares your personal information when you use
            our hotel booking website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside text-secondary-700">
              <li>
                Your name, email address, and contact information when you make
                a reservation.
              </li>
              <li>Payment information when you make a booking.</li>
              <li>
                Information about your stay, such as check-in and check-out
                dates, room preferences, and special requests.
              </li>
              <li>
                Information you provide when you contact us for customer support
                or other inquiries.
              </li>
              <li>
                Information collected through cookies and similar technologies
                when you visit our website (please see our Cookie Policy for
                more details).
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-secondary-700">
              <li>Processing and confirming your reservations.</li>
              <li>
                Providing customer support and responding to your inquiries.
              </li>
              <li>Improving and optimizing our website and services.</li>
              <li>
                Communicating with you about promotions, special offers, and
                other relevant information.
              </li>
              <li>Complying with legal and regulatory requirements.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              Sharing Your Information
            </h2>
            <ul className="list-disc list-inside text-secondary-700">
              <li>
                With service providers and partners who help us operate our
                website and provide services to you.
              </li>
              <li>
                If required by law, such as responding to a legal request or
                complying with applicable regulations.
              </li>
              <li>
                If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as
                part of that transaction.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">
              Your Choices
            </h2>
            <p className="text-secondary-700">
              You have certain rights regarding your personal information,
              including the right to access, correct, or delete your data. You
              can contact us using the information provided in the "Contact Us"
              section to exercise these rights.
            </p>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default PrivacyPolicy;
