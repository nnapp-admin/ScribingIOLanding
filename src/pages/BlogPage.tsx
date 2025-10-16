import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logo from '/src/assets/logo.png';

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<{ id: string; component: React.FC }[]>([]);

  useEffect(() => {
    const importBlogs = async () => {
      const blogFiles = import.meta.glob('/src/blog/*.tsx', { eager: true });
      const blogComponents = Object.keys(blogFiles).map((file) => {
        const name = file.match(/\/([^/]+)\.tsx$/)?.[1] || 'Unknown';
        return { id: name, component: blogFiles[file].default as React.FC };
      });
      setBlogs(blogComponents);
    };
    importBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ SEO & Meta Tags */}
      <Helmet>
        <title>AI Scribe Blog | Insights & Medical AI Updates</title>
        <meta
          name="description"
          content="Explore AI Scribe blogs for the latest trends in AI-powered medical scribing, healthcare innovation, and productivity for clinicians."
        />
        <meta property="og:title" content="AI Scribe Blog | Insights & Medical AI Updates" />
        <meta
          property="og:description"
          content="Stay updated with AI Scribe insights, innovations, and expert discussions in AI medical documentation."
        />
        <meta property="og:image" content="/src/assets/hero.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scribing.io/blog" />
        <link rel="canonical" href="https://scribing.io/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AI Scribe Team" />
      </Helmet>

      {/* ✅ Header (simplified) */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* ✅ Logo and text now clickable */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img
              src={logo}
              alt="Scribing.io Logo"
              className="w-8 h-8 object-contain rounded-lg"
            />
            <span className="font-semibold text-xl">Scribing.io</span>
          </a>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition">Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Blog Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Explore Our Blog
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Stay updated with the latest insights, tips, and news from AI Scribe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogs.map(({ id, component: BlogComponent }) => (
              <div key={id} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-60"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <BlogComponent />
                  <a
                    href={`/blog/${id}`}
                    className="mt-4 inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 transition"
                  >
                    Read More <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
