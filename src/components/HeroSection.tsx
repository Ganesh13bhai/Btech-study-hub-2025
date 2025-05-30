
import React from 'react';
import { ArrowRight, Sparkles, Users, BookOpen, GraduationCap, Lightbulb, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Master Your BTech</span>
                <span className="block text-btech-purple">Journey With Us</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Access comprehensive study materials, join collaborative study rooms, and get instant help from our AI assistant. Your one-stop platform for BTech excellence.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/courses">
                    <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-btech-purple hover:bg-btech-blue md:py-4 md:text-lg md:px-10">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/study-room">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-btech-purple bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10">
                      Join Study Room
                      <Users className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-purple-100 to-blue-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 p-8 max-w-md">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <BookMarked className="h-8 w-8 text-btech-purple mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Complete Library</h3>
              <p className="text-sm text-gray-500">All BTech branches course materials</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Users className="h-8 w-8 text-btech-blue mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Study Groups</h3>
              <p className="text-sm text-gray-500">Collaborative learning spaces</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Sparkles className="h-8 w-8 text-btech-purple mb-4" />
              <h3 className="text-lg font-medium text-gray-900">AI Assistant</h3>
              <p className="text-sm text-gray-500">24/7 doubt clearing support</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Lightbulb className="h-8 w-8 text-btech-blue mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Skill Building</h3>
              <p className="text-sm text-gray-500">Technical & soft skills development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
