
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Course } from "@/types/course";
import CourseStats from './CourseStats';
import CourseCardActions from './CourseCardActions';

interface CourseCardProps {
  course: Course;
  isEnrolled: boolean;
  onEnroll: (courseId: number) => void;
}

const CourseCard = ({ course, isEnrolled, onEnroll }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:transform hover:scale-105">
      <div className="relative h-48 w-full">
        <img 
          className="h-full w-full object-cover" 
          src={course.image} 
          alt={course.title}
        />
        <div className="absolute top-0 right-0 bg-btech-blue text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
          {course.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium text-gray-700">{course.rating}</span>
          </div>
          <button className="text-gray-400 hover:text-btech-purple">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
        
        <CourseStats duration={course.duration} students={course.students} />
        <CourseCardActions 
          courseId={course.id} 
          isEnrolled={isEnrolled} 
          onEnroll={onEnroll} 
        />
      </div>
    </div>
  );
};

export default CourseCard;
