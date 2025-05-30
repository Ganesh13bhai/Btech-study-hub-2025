
import React, { useState } from 'react';
import { Book, Filter } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { branches, courseData, difficultyLevels } from './course-repository/CourseData';
import BranchSelector from './course-repository/BranchSelector';
import SemesterContent from './course-repository/SemesterContent';

const CourseRepository = () => {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficultyLevels[0]);

  // Filter courses based on selected difficulty
  const getFilteredCourses = (semester: string) => {
    const coursesForSemester = courseData[selectedBranch]?.[semester] || [];
    
    if (selectedDifficulty === 'All Levels') {
      return coursesForSemester;
    }
    
    return coursesForSemester.filter(course => course.difficulty === selectedDifficulty);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Course Repository
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Access all the resources you need for your BTech program
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <BranchSelector 
              branches={branches}
              selectedBranch={selectedBranch}
              setSelectedBranch={setSelectedBranch}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
            />

            <div className="md:col-span-3">
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="bg-gray-50 px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                      <Book className="mr-2 h-5 w-5 text-btech-purple" />
                      {selectedBranch}
                    </h3>
                    {selectedDifficulty !== 'All Levels' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <Filter className="mr-1 h-3 w-3" />
                        {selectedDifficulty}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <Tabs defaultValue="Semester 1">
                    <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                      {Object.keys(courseData[selectedBranch] || {}).map((semester) => (
                        <TabsTrigger key={semester} value={semester}>
                          {semester}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {Object.entries(courseData[selectedBranch] || {}).map(([semester]) => (
                      <TabsContent key={semester} value={semester}>
                        {getFilteredCourses(semester).length > 0 ? (
                          <SemesterContent courses={getFilteredCourses(semester)} />
                        ) : (
                          <div className="text-center py-10">
                            <p className="text-gray-500">No {selectedDifficulty.toLowerCase()} courses found for this semester.</p>
                            <button 
                              className="mt-4 text-btech-purple hover:underline" 
                              onClick={() => setSelectedDifficulty('All Levels')}
                            >
                              Show all courses
                            </button>
                          </div>
                        )}
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRepository;
