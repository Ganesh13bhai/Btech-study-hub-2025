
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-btech-blue">Study<span className="text-btech-purple">Spark</span></span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Helping BTech students connect, learn, and excel together.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-500 hover:text-btech-blue">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-btech-blue">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-btech-blue">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-btech-blue">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-600 hover:text-btech-blue">Course Repository</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-btech-blue">Trending Courses</Link></li>
              <li><Link to="/soft-skills" className="text-gray-600 hover:text-btech-blue">Soft Skills</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-btech-blue">Question Banks</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/study-room" className="text-gray-600 hover:text-btech-blue">Study Rooms</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-btech-blue">Discussion Forums</a></li>
              <li><a href="#" className="text-gray-600 hover:text-btech-blue">Student Groups</a></li>
              <li><a href="#" className="text-gray-600 hover:text-btech-blue">Mentorship</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-btech-purple" />
                <a href="mailto:support@studyspark.com" className="text-gray-600 hover:text-btech-blue">support@studyspark.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Subscribe for Updates</h4>
              <div className="flex mt-1">
                <input
                  type="email"
                  className="shadow-sm focus:ring-btech-purple focus:border-btech-purple block w-full sm:text-sm border-gray-300 rounded-l-md py-2 px-3"
                  placeholder="Your email"
                />
                <button className="bg-btech-purple text-white rounded-r-md px-4 py-2 text-sm hover:bg-btech-blue">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} StudySpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
