
import React from 'react';
import { Chapter } from '@/types/course';
import { Progress } from '@/components/ui/progress';

interface CourseProgressSidebarProps {
  chapters: Chapter[];
}

const CourseProgressSidebar = ({ chapters }: CourseProgressSidebarProps) => {
  const completedCount = chapters.filter(chapter => chapter.completed).length;
  const progressPercentage = chapters.length > 0 ? (completedCount / chapters.length) * 100 : 0;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Course Progress</h3>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Completion</span>
          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Chapters</span>
          <span>{chapters.length}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Completed</span>
          <span>{completedCount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Remaining</span>
          <span>{chapters.length - completedCount}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressSidebar;
