
import React from 'react';
import { Download, FileText, HelpCircle, Video } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ENGINEERING_READING_MATERIALS, ENGINEERING_VIDEOS } from "@/data/courses";

interface ResourcesProps {
  subject: {
    name: string;
    resources: {
      pdfs: number;
      videos: number;
      questions: number;
    };
    subjectId?: string;
  };
}

const SubjectResources = ({ subject }: ResourcesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium flex items-center text-blue-800 mb-3">
          <FileText className="mr-2 h-4 w-4" />
          Study Materials
        </h4>
        <ul className="space-y-2">
          {subject.subjectId && ENGINEERING_READING_MATERIALS[subject.subjectId] ? (
            ENGINEERING_READING_MATERIALS[subject.subjectId].map((material, i) => (
              <li key={i} className="text-sm">
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Download className="h-3 w-3 mr-1" />
                  {material.title} ({material.estimatedReadTime})
                </a>
              </li>
            ))
          ) : (
            Array.from({ length: subject.resources.pdfs }).map((_, i) => (
              <li key={i} className="text-sm">
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Download className="h-3 w-3 mr-1" />
                  {subject.name} Notes Part {i + 1}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-medium flex items-center text-purple-800 mb-3">
          <Video className="mr-2 h-4 w-4" />
          Video Lectures
        </h4>
        <ul className="space-y-2">
          {subject.subjectId && ENGINEERING_VIDEOS[subject.subjectId] ? (
            ENGINEERING_VIDEOS[subject.subjectId].map((video, i) => (
              <li key={i} className="text-sm">
                <a href="#" className="flex items-center text-purple-600 hover:text-purple-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  {video.title} ({video.duration})
                </a>
              </li>
            ))
          ) : (
            Array.from({ length: Math.min(5, subject.resources.videos) }).map((_, i) => (
              <li key={i} className="text-sm">
                <a href="#" className="flex items-center text-purple-600 hover:text-purple-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Lecture {i + 1}: {["Introduction", "Basic Concepts", "Advanced Topics", "Practice Problems", "Revision"][i]}
                </a>
              </li>
            ))
          )}
          {(!subject.subjectId || !ENGINEERING_VIDEOS[subject.subjectId]) && subject.resources.videos > 5 && (
            <li className="text-sm text-purple-600">
              <a href="#" className="hover:underline">
                + {subject.resources.videos - 5} more videos
              </a>
            </li>
          )}
        </ul>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium flex items-center text-green-800 mb-3">
          <HelpCircle className="mr-2 h-4 w-4" />
          Question Banks
        </h4>
        <ul className="space-y-2">
          {Array.from({ length: subject.resources.questions }).map((_, i) => (
            <li key={i} className="text-sm">
              <a href="#" className="flex items-center text-green-600 hover:text-green-800">
                <Download className="h-3 w-3 mr-1" />
                {["Previous Year Papers", "Practice Questions", "Quiz Questions"][i % 3]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {subject.subjectId && (
        <div className="mt-4 flex justify-center md:col-span-3">
          <Link to={`/course/${subject.subjectId}`}>
            <Button className="bg-btech-purple hover:bg-btech-blue">
              View Complete Course
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubjectResources;
