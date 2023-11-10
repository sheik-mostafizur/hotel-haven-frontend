import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";

const PrivacyPolicy: React.FC = () => {
  return (
    <Main>
      <Container>
        <div className="my-10">
          <h1 className="my-2">Privacy Policy</h1>

          <p>
            This Privacy Policy describes how Hotel Haven ("we," "us," or "our")
            collects, uses, and shares your personal information when you use
            our hotel booking website.
          </p>

          <h2 className="my-2">Information We Collect</h2>

          <p>
            When you use our website, we may collect the following types of
            information:
          </p>

          <ul>
            <li>
              Your name, email address, and contact information when you make a
              reservation.
            </li>
            <li>Payment information when you make a booking.</li>
            <li>
              Information about your stay, such as check-in and check-out dates,
              room preferences, and special requests.
            </li>
            <li>
              Information you provide when you contact us for customer support
              or other inquiries.
            </li>
            <li>
              Information collected through cookies and similar technologies
              when you visit our website (please see our Cookie Policy for more
              details).
            </li>
          </ul>

          <h2 className="my-2">How We Use Your Information</h2>

          <p>
            We use the information we collect for various purposes, including:
          </p>

          <ul>
            <li>Processing and confirming your reservations.</li>
            <li>
              Providing customer support and responding to your inquiries.
            </li>
            <li>Improving and optimizing our website and services.</li>
            <li>
              Communicating with you about promotions, special offers, and other
              relevant information.
            </li>
            <li>Complying with legal and regulatory requirements.</li>
          </ul>

          <h2 className="my-2">Sharing Your Information</h2>

          <p>
            We may share your information with third parties in the following
            circumstances:
          </p>

          <ul>
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
              portion of our assets, your information may be transferred as part
              of that transaction.
            </li>
          </ul>

          <h2 className="my-2">Your Choices</h2>

          <p>
            You have certain rights regarding your personal information,
            including the right to access, correct, or delete your data. You can
            contact us using the information provided in the "Contact Us"
            section to exercise these rights.
          </p>
        </div>
      </Container>
    </Main>
  );
};

export default PrivacyPolicy;
