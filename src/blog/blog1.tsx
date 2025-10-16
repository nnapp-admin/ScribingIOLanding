import React from 'react';
import heroImage from '../assets/blog.jpg';

const Blog1: React.FC = () => {
  return (
    <div className="relative p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-50"></div>
      <div className="relative z-10">
        <img
          src={heroImage}
          alt="Blog Post 1 Illustration"
          className="w-full h-48 object-cover rounded-t-2xl mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Post 1</h2>
        <p className="text-gray-600 mb-6">
          This is the content of blog post 1. Published on October 16, 2025 at 05:41 PM IST. Dive into the latest updates and insights from AI Scribe, designed to enhance your medical documentation experience.
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Author: AI Scribe Team</span>
          <span>16 Oct 2025, 05:41 PM IST</span>
        </div>
      </div>
    </div>
  );
};

export default Blog1;