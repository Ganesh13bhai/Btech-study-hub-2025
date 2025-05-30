
import React from 'react';
import { Course } from '@/types/course';

interface CourseHeaderProps {
  course: Course;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-btech-purple/10 to-btech-blue/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
            <p className="mt-2 text-xl text-gray-600">{course.description}</p>
            <div className="mt-4 flex items-center">
              <span className="bg-btech-blue text-white px-3 py-1 rounded-lg text-sm font-medium">
                {course.category}
              </span>
              <span className="ml-4 text-gray-600">
                <span className="font-semibold">{course.students}</span> students enrolled
              </span>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <img 
              src={course.image} 
              alt={course.title} 
              className="h-48 w-full md:w-72 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
