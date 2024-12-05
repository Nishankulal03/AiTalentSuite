import React from 'react';

const MockInterview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">AI Mock Interview</h1>
          <p className="mt-2 text-lg">
            Prepare for your dream job with an interactive AI-powered mock interview experience.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is AI Mock Interview?</h2>
          <p className="text-gray-600 leading-relaxed">
            The AI Mock Interview platform is your personal interview preparation assistant.This simulates real-world interview scenarios, generates questions tailored to your resume, and provides actionable feedback to enhance your performance.
          </p>
        </section>

        {/* Key Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose AI Mock Interview?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Practice interviews with AI-generated questions.</li>
            <li>Receive instant feedback on your responses.</li>
            <li>Enhance your confidence and communication skills.</li>
            <li>Tailored interview scenarios for various job roles.</li>
          </ul>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Real-time question and answer simulations.</li>
            <li>Video recording and analysis of your responses.</li>
            <li>AI-driven feedback to identify strengths and weaknesses.</li>
            <li>Mock interviews customized for specific industries.</li>
          </ul>
        </section>

       
      

        {/* Call-to-Action Section */}
        <section className="text-center">
          <a
            href="https://ai-mock-interview-gold.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Start Mock Interview
          </a>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AI Mock Interview. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MockInterview;
