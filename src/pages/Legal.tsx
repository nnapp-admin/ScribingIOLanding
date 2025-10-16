import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "/src/assets/logo.png";

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Scribing.io | Legal Policies</title>
        <meta
          name="description"
          content="Read Scribing.io's Privacy Policy, Terms of Service, HIPAA Compliance, and Cookie Policy — ensuring transparency and trust in our AI documentation services."
        />
        <meta property="og:title" content="Scribing.io Legal Policies" />
        <meta
          property="og:description"
          content="Learn about Scribing.io’s privacy, terms, HIPAA compliance, and cookie practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scribing.io/legal" />
        <link rel="canonical" href="https://scribing.io/legal" />
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img
              src={logo}
              alt="Scribing.io Logo"
              className="w-8 h-8 object-contain rounded-lg"
            />
            <span className="font-semibold text-xl">Scribing.io</span>
          </a>

          <div className="flex items-center gap-4">
            {/* Contact Us Button */}
            <a
              href="https://wa.me/918822436250?text=Hi%20Scribing.io%20Team%2C%20I%20have%20a%20question!"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition"
            >
              Contact Us
            </a>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Privacy Policy */}
          <section id="privacy" className="scroll-mt-28">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Scribing.io</strong>, we take your privacy seriously.
              We collect only the data necessary to provide and improve our AI
              documentation services. We never sell your information to third
              parties.
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
              <li>We collect usage data to enhance performance and user experience.</li>
              <li>All personal data is encrypted both in transit and at rest.</li>
              <li>
                You can request data deletion at any time by contacting our
                support team.
              </li>
            </ul>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="scroll-mt-28">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Terms of Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using Scribing.io, you agree to abide by these terms. Our
              service is provided “as is,” and we reserve the right to modify
              features, pricing, or terms at any time.
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
              <li>
                You are responsible for maintaining the confidentiality of your
                account.
              </li>
              <li>
                Unauthorized access, misuse, or duplication of our software is
                prohibited.
              </li>
              <li>
                Violation of these terms may result in suspension or termination
                of your access.
              </li>
            </ul>
          </section>

          {/* HIPAA Compliance */}
          <section id="hipaa" className="scroll-mt-28">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              HIPAA Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Scribing.io adheres to HIPAA regulations to ensure the
              confidentiality and security of protected health information
              (PHI). We implement administrative, physical, and technical
              safeguards aligned with industry best practices.
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
              <li>
                All PHI is encrypted using AES-256 and transmitted via secure
                HTTPS.
              </li>
              <li>
                Access to PHI is restricted to authorized personnel only.
              </li>
              <li>
                We maintain Business Associate Agreements (BAAs) with applicable
                partners.
              </li>
            </ul>
          </section>

          {/* Cookie Policy */}
          <section id="cookies" className="scroll-mt-28">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Cookie Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website uses cookies to enhance functionality and analyze site
              usage. Cookies help us remember your preferences and optimize the
              experience.
            </p>
            <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
              <li>Essential cookies are required for core site functionality.</li>
              <li>
                Analytics cookies help us understand how users interact with our
                platform.
              </li>
              <li>
                You can manage or disable cookies in your browser settings.
              </li>
            </ul>
          </section>

          {/* Footer */}
          <footer className="border-t pt-10 mt-16 text-center text-gray-600 text-sm">
            <p>
              © {new Date().getFullYear()} Scribing.io — All rights reserved. |
              <a href="/" className="text-pink-500 hover:underline ml-1">
                Home
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Legal;
