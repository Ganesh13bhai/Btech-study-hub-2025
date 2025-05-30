
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BookOpen } from 'lucide-react';

interface CourseCardActionsProps {
  courseId: number;
  isEnrolled: boolean;
  onEnroll: (courseId: number) => void;
}

const CourseCardActions = ({ courseId, isEnrolled, onEnroll }: CourseCardActionsProps) => {
  return (
    <>
      {isEnrolled ? (
        <Link to={`/course/${courseId}`} className="w-full">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center">
            <BookOpen className="mr-2 h-4 w-4" />
            Study Now
          </Button>
        </Link>
      ) : (
        <Button 
          className="w-full bg-btech-purple hover:bg-btech-blue text-white"
          onClick={() => onEnroll(courseId)}
        >
          Enroll Now
        </Button>
      )}
    </>
  );
};

export default CourseCardActions;
