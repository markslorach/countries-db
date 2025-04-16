import Container from "@/app/components/shared/container";
import Heading from "@/app/components/shared/heading";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <Container className="mt-10 mb-20">
      <Heading className="mb-6">Privacy Policy</Heading>

      <div className="max-w-3xl space-y-6">
        <section>
          <p className="text-gray-600 italic">Effective Date: April 12, 2025</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Overview</h2>
          <p className="text-gray-600">
            I respect your privacy and am committed to protecting your personal
            information. This privacy policy explains how I collect, use and
            safeguard your data when you use this project.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Information I Collect</h2>
          <p className="text-gray-600">
            I collect only the following personal information when you create an
            account:
          </p>
          <ul className="mt-2 ml-6 list-disc text-gray-600">
            <li>Name</li>
            <li>Email address</li>
            <li>
              Password (securely stored using industry-standard encryption)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">
            How I Use Your Information
          </h2>
          <p className="text-gray-600">
            I use the information collected solely to:
          </p>
          <ul className="mt-2 ml-6 list-disc text-gray-600">
            <li>Create and manage your account.</li>
            <li>
              Provide full functionality of this project, including the ability
              to add and remove favorite countries.
            </li>
            <li>
              Communicate important information about your account or changes to
              this project.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Data Security</h2>
          <p className="text-gray-600">
            Your personal information is securely stored in a PostgreSQL
            database with industry-standard security measures. Passwords are
            encrypted using secure hashing algorithms to ensure your account
            remains protected.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Cookies and Tracking</h2>
          <p className="text-gray-600">
            I do not use tracking cookies or analytics tools to monitor user
            behaviour. I only use authentication session cookies, which are
            strictly necessary to keep you logged in and secure your session.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Third-Party Sharing</h2>
          <p className="text-gray-600">
            I do not sell, trade, or otherwise transfer your personal
            information to third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">
            Data Retention and Account Deletion
          </h2>
          <p className="text-gray-600">
            You have the right to delete your account at any time through the
            account settings page. Upon deletion, all personal information and
            associated data will be permanently removed from my servers
            immediately.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Your Rights</h2>
          <p className="text-gray-600">You have the right to:</p>
          <ul className="mt-2 ml-6 list-disc text-gray-600">
            <li>Request access to your personal data.</li>
            <li>Request rectification or updating of your personal data.</li>
            <li>Delete your personal data by deleting your account.</li>
            <li>Obtain a copy of your personal data upon request.</li>
          </ul>
          <p className="mt-2 text-gray-600">
            If you wish to exercise these rights, please contact me.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Changes to This Policy</h2>
          <p className="text-gray-600">
            I may update this privacy policy periodically. I will notify you of
            any significant changes by updating the policy on this page and/or
            via email notification.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold">Contact Me</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding this privacy policy,
            please email me at{" "}
            <Link
              href="mailto:hello@markslorach.com"
              className="text-blue-500 underline underline-offset-3"
            >
              hello@markslorach.com
            </Link>
            .
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
