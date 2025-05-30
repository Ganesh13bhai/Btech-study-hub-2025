
import React from 'react';
import { Clock, Users } from 'lucide-react';

interface CourseStatsProps {
  duration: string;
  students: number;
}

const CourseStats = ({ duration, students }: CourseStatsProps) => {
  return (
    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-1" />
        {duration}
      </div>
      <div className="flex items-center">
        <Users className="h-4 w-4 mr-1" />
        {students} students
      </div>
    </div>
  );
};

export default CourseStats;
