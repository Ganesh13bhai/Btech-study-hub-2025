
import React from 'react';
import { 
  MessageSquare, 
  FileText, 
  PenTool, 
  Users, 
  Target, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

const SOFT_SKILLS = [
  {
    id: 1,
    title: "Effective Communication",
    description: "Learn to express ideas clearly and effectively in professional settings",
    icon: MessageSquare,
    lessons: 8,
    duration: "4 hours",
    level: "Beginner",
    color: "blue"
  },
  {
    id: 2,
    title: "Resume Building",
    description: "Create impactful resumes that highlight your strengths and experiences",
    icon: FileText,
    lessons: 6,
    duration: "3 hours",
    level: "Intermediate",
    color: "purple"
  },
  {
    id: 3,
    title: "Technical Writing",
    description: "Develop skills to write clear technical documentation and reports",
    icon: PenTool,
    lessons: 10,
    duration: "5 hours",
    level: "Intermediate",
    color: "green"
  },
  {
    id: 4,
    title: "Team Collaboration",
    description: "Learn strategies for effective teamwork and group project management",
    icon: Users,
    lessons: 7,
    duration: "3.5 hours",
    level: "Beginner",
    color: "orange"
  },
  {
    id: 5,
    title: "Interview Preparation",
    description: "Master techniques to excel in technical and behavioral interviews",
    icon: Target,
    lessons: 12,
    duration: "6 hours",
    level: "Advanced",
    color: "red"
  },
  {
    id: 6,
    title: "Time Management",
    description: "Optimize your productivity with proven time management techniques",
    icon: Clock,
    lessons: 5,
    duration: "2.5 hours",
    level: "Beginner",
    color: "teal"
  }
];

const getColorClass = (color: string) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    orange: "bg-orange-100 text-orange-800",
    red: "bg-red-100 text-red-800",
    teal: "bg-teal-100 text-teal-800"
  };
  return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
};

const SoftSkills = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Soft Skills Development
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Enhance your professional skills to complement your technical knowledge
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SOFT_SKILLS.map((skill) => {
            const IconComponent = skill.icon;
            const colorClass = getColorClass(skill.color);
            
            return (
              <Card key={skill.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-lg ${colorClass}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {skill.lessons} lessons
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {skill.duration}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    Start Learning
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/soft-skills">
            <Button variant="outline" className="inline-flex items-center">
              Explore All Soft Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
