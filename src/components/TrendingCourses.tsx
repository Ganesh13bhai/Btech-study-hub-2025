
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import CourseCard from './courses/CourseCard';
import { TRENDING_COURSES } from './courses/TrendingCoursesData';

const TrendingCourses = () => {
  // Track enrollment state for each course
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  const handleEnroll = (courseId: number) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      toast.success("Successfully enrolled in course!", {
        description: "You can now access course materials and begin learning."
      });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trending Courses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore the latest courses in emerging technologies
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TRENDING_COURSES.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              isEnrolled={enrolledCourses.includes(course.id)}
              onEnroll={handleEnroll}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="outline" className="inline-flex items-center">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
