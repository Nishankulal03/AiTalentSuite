import React from 'react';

const ResumeAnalyzer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Resume Analyzer</h1>
          <p className="mt-2 text-lg">
            Enhance your resume and stand out in the competitive job market.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Resume Analyzer</h2>
          <p className="text-gray-600 leading-relaxed">
            The Resume Analyzer is an AI-driven tool designed to evaluate the resumes. It identify strengths and weaknesses, cluster keywords, and provide actionable recommendations tailored to your career goals.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>AI-powered resume evaluation.</li>
            <li>Keyword clustering and sector-based recommendations.</li>
            <li>Real-time feedback for enhancing your resume.</li>
          </ul>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center">
          <a
            href="https://resume-analyse-taupe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Try Resume Analyzer Now
          </a>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Resume Analyzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeAnalyzer;
