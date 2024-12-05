import React from 'react';
import { Brain, VideoIcon, FileText } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Home: React.FC = () => {
  const features = [
    {
      title: 'Resume Analyzer',
      description: 'AI-powered resume analysis to match candidates with the perfect opportunities',
      to: '/resume-analyzer',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: 'AI Mock Interview',
      description: 'Practice interviews with our advanced AI system for better preparation',
      to: '/mock-interview',
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: 'Exam Monitoring System',
      description: 'Secure and efficient remote examination monitoring powered by AI',
      to: 'https://www.google.com',
      icon: <VideoIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Future of Talent Management
          </h1>
          <p className="text-xl text-gray-600">
            Empowering recruitment with cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;