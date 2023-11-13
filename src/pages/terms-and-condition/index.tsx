// TermsAndConditions.tsx

import React from "react";
import Main from "../../layout/main";
import Container from "../../components/ui/container";
import SetTitle from "../../components/set-title";

const TermsAndConditions: React.FC = () => {
  return (
    <Main>
      <SetTitle title={`Terms And Conditions`} />
      <Container>
        <div className="my-10">
          <h1 className="my-2">Terms and Conditions</h1>
          <p>
            Please read these Terms and Conditions carefully before using the
            Hotel Haven website. By accessing and using this website, you agree
            to comply with and be bound by these terms. If you do not agree to
            these terms, please do not use this website.
          </p>

          <h2 className="my-2">1. Use of the Website</h2>

          <p>
            You must be at least 18 years of age or have the necessary legal
            capacity to use this website. You agree to use the website in
            accordance with all applicable local, state, and federal laws and
            regulations.
          </p>

          <h2 className="my-2">2. Privacy</h2>

          <p>
            Your use of this website is also governed by our Privacy Policy.
            Please review our Privacy Policy to understand how we collect and
            use your personal information.
          </p>

          <h2 className="my-2">3. Booking and Reservations</h2>

          <p>
            When making reservations through our website, you agree to provide
            accurate and complete information. Any bookings made through our
            website are subject to availability and confirmation.
          </p>

          <h2 className="my-2">4. Payment</h2>

          <p>
            Payment for reservations made through our website is subject to the
            terms and conditions provided during the booking process.
          </p>

          <h2 className="my-2">5. Cancellation and Refund</h2>

          <p>
            Cancellation and refund policies may vary depending on the specific
            booking. Please review the cancellation and refund policies provided
            during the booking process.
          </p>

          <h2 className="my-2">6. Intellectual Property</h2>

          <p>
            The content on this website, including text, images, logos, and
            other materials, is protected by copyright and other intellectual
            property laws. You may not use, modify, or distribute the content
            without our permission.
          </p>

          <h2 className="my-2">7. Changes to the Terms</h2>

          <p>
            We reserve the right to modify or revise these terms and conditions
            at any time. Any changes will be effective immediately upon posting
            on this website. It is your responsibility to review the terms and
            conditions periodically.
          </p>
        </div>
      </Container>
    </Main>
  );
};

export default TermsAndConditions;
