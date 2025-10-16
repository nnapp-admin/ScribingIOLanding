import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "/src/assets/logo.png";

const AboutCareer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Scribing.io | About Us & Careers</title>
        <meta
          name="description"
          content="Learn more about Scribing.io — our mission, values, and open career opportunities in AI documentation innovation."
        />
        <meta property="og:title" content="About Scribing.io & Careers" />
        <meta
          property="og:description"
          content="Discover how Scribing.io is redefining AI-powered documentation and explore opportunities to join our team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scribing.io/about" />
        <link rel="canonical" href="https://scribing.io/about" />
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

            <a
              href="https://studio--studio-2835712508-c6d6d.us-central1.hosted.app"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Sign In
            </a>
            <a
              href="https://studio--studio-2835712508-c6d6d.us-central1.hosted.app"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* About Us Section */}
          <section id="about" className="scroll-mt-28 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About Scribing.io
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              At <strong>Scribing.io</strong>, we are redefining the way professionals
              document, transcribe, and organize their work using advanced AI.
              Founded by innovators passionate about productivity and precision,
              we aim to eliminate manual documentation effort across industries.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-pink-600">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To empower every team with AI-driven documentation tools that
                  save time, improve accuracy, and enhance collaboration.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To become the global standard for automated documentation across
                  healthcare, law, education, and enterprise sectors.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  Our Values
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Transparency & Trust</li>
                  <li>Innovation with Integrity</li>
                  <li>User-First Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Careers Section */}
          <section id="careers" className="scroll-mt-28 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Careers at Scribing.io
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Join a fast-growing AI startup shaping the future of digital
              documentation. We believe in creativity, ownership, and building
              products that make a real difference.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  🧠 AI Engineer (Remote)
                </h3>
                <p className="text-gray-700 mb-3">
                  Work on large language models, speech recognition, and document
                  automation pipelines. Experience with Python or Node preferred.
                </p>
                <a
                  href="https://wa.me/918822436250?text=Hi%2C%20I%27m%20interested%20in%20the%20AI%20Engineer%20role%20at%20Scribing.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline font-medium"
                >
                  Apply via WhatsApp →
                </a>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  💻 Frontend Developer (React)
                </h3>
                <p className="text-gray-700 mb-3">
                  Help build elegant, responsive UIs for our SaaS dashboard and
                  documentation platform using React, TypeScript & Tailwind.
                </p>
                <a
                  href="https://wa.me/918822436250?text=Hi%2C%20I%27m%20interested%20in%20the%20Frontend%20Developer%20role%20at%20Scribing.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline font-medium"
                >
                  Apply via WhatsApp →
                </a>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-gray-700 text-lg">
                Don’t see a role that fits? We’re always open to talent.
              </p>
              <a
                href="https://wa.me/918822436250?text=Hi%20Scribing.io%20Team%2C%20I%27d%20love%20to%20explore%20career%20opportunities!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition"
              >
                Send Your Resume
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t pt-10 mt-20 text-center text-gray-600 text-sm">
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

export default AboutCareer;
