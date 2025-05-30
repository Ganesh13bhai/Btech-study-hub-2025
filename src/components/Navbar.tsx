
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Sparkles, Users2, GraduationCap, BookMarked, Lightbulb, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-btech-purple" />
              <span className="font-bold text-2xl text-gray-900">BTech<span className="text-btech-purple">StudyHub</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-btech-purple flex items-center">
              <BookMarked className="w-4 h-4 mr-1" />
              Course Library
            </Link>
            <Link to="/study-room" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-btech-purple flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Study Rooms
            </Link>
            <Link to="/soft-skills" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-btech-purple flex items-center">
              <Lightbulb className="w-4 h-4 mr-1" />
              Soft Skills
            </Link>
            <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-btech-purple flex items-center">
              <LogIn className="w-4 h-4 mr-1" />
              Login
            </Link>
            <Button className="ml-4 bg-btech-purple hover:bg-btech-blue text-white flex items-center">
              <Users2 className="w-4 h-4 mr-1" />
              Join Community
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-btech-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/courses" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-btech-blue"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Courses
              </div>
            </Link>
            <Link 
              to="/study-room" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-btech-blue"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Study Rooms
              </div>
            </Link>
            <Link 
              to="/soft-skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-btech-blue"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Soft Skills
              </div>
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-btech-blue"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </div>
            </Link>
            <Button 
              className="w-full mt-2 bg-btech-purple hover:bg-btech-blue text-white"
              onClick={toggleMenu}
            >
              <Users2 className="w-4 h-4 mr-2" />
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
