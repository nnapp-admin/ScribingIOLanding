import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import logo from '/src/assets/logo.png';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [BlogComponent, setBlogComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadBlog = async () => {
      if (!id) {
        console.error('No ID provided');
        setBlogComponent(null);
        return;
      }

      try {
        const blogFiles: Record<string, () => Promise<{ default: React.FC }>> = import.meta.glob('../blog/*.tsx');
        const blogPath = `../blog/${id}.tsx`;

        if (blogFiles[blogPath]) {
          const module = await blogFiles[blogPath]();
          setBlogComponent(() => module.default);
        } else {
          console.error(`Blog not found: ${blogPath}`);
          setBlogComponent(null);
        }
      } catch (error) {
        console.error(`Failed to load blog ${id}:`, error);
        setBlogComponent(null);
      }
    };

    loadBlog();
  }, [id]);

  if (!BlogComponent) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 text-center text-gray-600">
        Loading blog... or blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`AI Scribe | ${id?.replace(/-/g, ' ')}`}</title>
        <meta
          name="description"
          content={`Read about ${id} on AI Scribe Blog — explore innovations in AI medical documentation and healthcare technology.`}
        />
        <meta property="og:title" content={`AI Scribe Blog | ${id}`} />
        <meta property="og:description" content="Insights and guides from AI Scribe." />
        <meta property="og:image" content="/src/assets/hero.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://scribing.io/blog/${id}`} />
        <link rel="canonical" href={`https://scribing.io/blog/${id}`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AI Scribe Team" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: `AI Scribe Blog | ${id}`,
            author: {
              '@type': 'Organization',
              name: 'AI Scribe Team',
            },
            datePublished: '2025-10-16',
            image: 'https://scribing.io/src/assets/hero.png',
            publisher: {
              '@type': 'Organization',
              name: 'AI Scribe',
            },
            mainEntityOfPage: `https://scribing.io/blog/${id}`,
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* ✅ Logo and Name Clickable */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src={logo} alt="Scribing.io Logo" className="w-8 h-8 object-contain rounded-lg" />
            <span className="font-semibold text-xl">Scribing.io</span>
          </a>

          <div className="flex items-center gap-4">
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

      {/* Blog Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-60"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <BlogComponent />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/blogs"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition inline-flex items-center gap-2"
            >
              Back to Blogs <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
