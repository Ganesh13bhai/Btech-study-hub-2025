
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CourseRepository from '@/components/CourseRepository';
import TrendingCourses from '@/components/TrendingCourses';
import SoftSkills from '@/components/SoftSkills';
import StudyRoomCreate from '@/components/StudyRoomCreate';
import ChatbotButton from '@/components/ChatbotButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CourseRepository />
        <TrendingCourses />
        <SoftSkills />
        <StudyRoomCreate />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
