
import React from 'react';
import { Chapter } from '@/types/course';
import { Book, Play, FileText, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

interface CourseChaptersPanelProps {
  chapters: Chapter[];
  setChapters: React.Dispatch<React.SetStateAction<Chapter[]>>;
}

const CourseChaptersPanel = ({ chapters = [], setChapters }: CourseChaptersPanelProps) => {
  const markAsComplete = (chapterId: number) => {
    setChapters(chapters.map(chapter => 
      chapter.id === chapterId ? { ...chapter, completed: true } : chapter
    ));
    toast.success("Chapter marked as complete", {
      description: "Your progress has been updated."
    });
  };

  const completedCount = chapters.filter(chapter => chapter.completed).length;
  const progressPercentage = chapters.length > 0 ? (completedCount / chapters.length) * 100 : 0;

  if (chapters.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">No chapters available</h3>
        <p className="text-gray-500">This course doesn't have any chapters yet.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Book className="mr-2" />
          Course Content
        </h2>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-600 mr-2">
            {completedCount} of {chapters.length} completed
          </span>
          <span className="font-medium text-btech-purple">
            {progressPercentage.toFixed(0)}%
          </span>
        </div>
      </div>

      <Progress value={progressPercentage} className="h-2 mb-6" />

      <div className="space-y-4">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-white">
              <div className="flex items-start space-x-3">
                {chapter.type === 'video' ? (
                  <Play className="h-5 w-5 text-btech-blue mt-1" />
                ) : (
                  <FileText className="h-5 w-5 text-btech-purple mt-1" />
                )}
                <div>
                  <h3 className="font-medium">{chapter.title}</h3>
                  <p className="text-sm text-gray-500">{chapter.type === 'video' ? 'Video Lesson' : 'Reading Material'}</p>
                </div>
              </div>
              <div>
                {chapter.completed ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                ) : (
                  <Button 
                    size="sm" 
                    onClick={() => markAsComplete(chapter.id)}
                    variant="outline"
                  >
                    Mark as Complete
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseChaptersPanel;
