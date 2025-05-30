
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { FileText, HelpCircle, Video } from 'lucide-react';
import SubjectResources from './SubjectResources';

interface SemesterContentProps {
  courses: Array<{
    name: string;
    resources: {
      pdfs: number;
      videos: number;
      questions: number;
    };
    subjectId?: string;
  }>;
}

const SemesterContent = ({ courses }: SemesterContentProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {courses.map((course, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="hover:bg-gray-50 px-4">
            <div className="flex items-center text-left">
              <span className="font-medium">{course.name}</span>
              <div className="ml-4 flex space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  <FileText className="mr-1 h-3 w-3" />
                  {course.resources.pdfs}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                  <Video className="mr-1 h-3 w-3" />
                  {course.resources.videos}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  <HelpCircle className="mr-1 h-3 w-3" />
                  {course.resources.questions}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <SubjectResources subject={course} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SemesterContent;
