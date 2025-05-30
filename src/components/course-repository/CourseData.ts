
type CourseData = {
  [branch: string]: {
    [semester: string]: Array<{
      name: string;
      resources: {
        pdfs: number;
        videos: number;
        questions: number;
      };
      subjectId?: string;
      difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    }>;
  };
};

export const branches = [
  "Computer Science Engineering (CSE)",
  "Electronics and Communication (ECE)",
  "Electrical Engineering (EEE)",
  "Mechanical Engineering (ME)",
  "Civil Engineering",
  "Chemical Engineering"
];

export const difficultyLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export const courseData: CourseData = {
  "Computer Science Engineering (CSE)": {
    "Semester 1": [
      { name: "Mathematics I", resources: { pdfs: 4, videos: 12, questions: 3 }, subjectId: "mathematics", difficulty: "Beginner" },
      { name: "Physics", resources: { pdfs: 3, videos: 8, questions: 2 }, subjectId: "physics", difficulty: "Beginner" },
      { name: "Basic Electrical Engineering", resources: { pdfs: 5, videos: 10, questions: 4 }, subjectId: "electrical", difficulty: "Beginner" },
      { name: "Programming Fundamentals", resources: { pdfs: 7, videos: 15, questions: 6 }, subjectId: "programming", difficulty: "Beginner" }
    ],
    "Semester 2": [
      { name: "Mathematics II", resources: { pdfs: 4, videos: 10, questions: 3 }, subjectId: "mathematics", difficulty: "Intermediate" },
      { name: "Chemistry", resources: { pdfs: 3, videos: 7, questions: 2 }, subjectId: "chemistry", difficulty: "Beginner" },
      { name: "Engineering Graphics", resources: { pdfs: 2, videos: 12, questions: 1 }, subjectId: "graphics", difficulty: "Intermediate" },
      { name: "Data Structures", resources: { pdfs: 6, videos: 14, questions: 5 }, subjectId: "datastructures", difficulty: "Intermediate" }
    ],
    "Semester 3": [
      { name: "Discrete Mathematics", resources: { pdfs: 5, videos: 11, questions: 4 }, subjectId: "discretemath", difficulty: "Advanced" },
      { name: "Object-Oriented Programming", resources: { pdfs: 7, videos: 16, questions: 6 }, subjectId: "oop", difficulty: "Intermediate" },
      { name: "Digital Systems", resources: { pdfs: 4, videos: 9, questions: 3 }, subjectId: "digitalsystems", difficulty: "Advanced" },
      { name: "Database Management Systems", resources: { pdfs: 6, videos: 13, questions: 5 }, subjectId: "dbms", difficulty: "Advanced" }
    ],
  },
  "Electronics and Communication (ECE)": {
    "Semester 1": [
      { name: "Mathematics I", resources: { pdfs: 4, videos: 12, questions: 3 }, subjectId: "mathematics", difficulty: "Beginner" },
      { name: "Physics", resources: { pdfs: 3, videos: 8, questions: 2 }, subjectId: "physics", difficulty: "Beginner" },
      { name: "Basic Electrical Engineering", resources: { pdfs: 5, videos: 10, questions: 4 }, subjectId: "electrical", difficulty: "Beginner" },
      { name: "Programming Fundamentals", resources: { pdfs: 7, videos: 15, questions: 6 }, subjectId: "programming", difficulty: "Beginner" }
    ],
  },
  "Electrical Engineering (EEE)": {
    "Semester 1": [
      { name: "Mathematics I", resources: { pdfs: 4, videos: 12, questions: 3 }, subjectId: "mathematics", difficulty: "Beginner" },
      { name: "Physics", resources: { pdfs: 3, videos: 8, questions: 2 }, subjectId: "physics", difficulty: "Beginner" },
      { name: "Basic Electrical Engineering", resources: { pdfs: 5, videos: 10, questions: 4 }, subjectId: "electrical", difficulty: "Intermediate" },
      { name: "Programming Fundamentals", resources: { pdfs: 7, videos: 15, questions: 6 }, subjectId: "programming", difficulty: "Beginner" }
    ],
  },
  "Mechanical Engineering (ME)": {
    "Semester 1": [
      { name: "Mathematics I", resources: { pdfs: 4, videos: 12, questions: 3 }, subjectId: "mathematics", difficulty: "Beginner" },
      { name: "Physics", resources: { pdfs: 3, videos: 8, questions: 2 }, subjectId: "physics", difficulty: "Beginner" },
      { name: "Basic Electrical Engineering", resources: { pdfs: 5, videos: 10, questions: 4 }, subjectId: "electrical", difficulty: "Intermediate" },
      { name: "Programming Fundamentals", resources: { pdfs: 7, videos: 15, questions: 6 }, subjectId: "programming", difficulty: "Beginner" }
    ],
  },
  "Civil Engineering": {
    "Semester 1": [
      { name: "Mathematics I", resources: { pdfs: 4, videos: 12, questions: 3 }, subjectId: "mathematics", difficulty: "Beginner" },
      { name: "Physics", resources: { pdfs: 3, videos: 8, questions: 2 }, subjectId: "physics", difficulty: "Beginner" },
      { name: "Basic Electrical Engineering", resources: { pdfs: 5, videos: 10, questions: 4 }, subjectId: "electrical", difficulty: "Intermediate" },
      { name: "Programming Fundamentals", resources: { pdfs: 7, videos: 15, questions: 6 }, subjectId: "programming", difficulty: "Beginner" }
    ],
  },
  "Chemical Engineering": {
    "Semester 1": [
      { name: "Mathematics I", resources: { pdfs: 4, videos: 12, questions: 3 }, subjectId: "mathematics", difficulty: "Beginner" },
      { name: "Physics", resources: { pdfs: 3, videos: 8, questions: 2 }, subjectId: "physics", difficulty: "Beginner" },
      { name: "Basic Electrical Engineering", resources: { pdfs: 5, videos: 10, questions: 4 }, subjectId: "electrical", difficulty: "Intermediate" },
      { name: "Programming Fundamentals", resources: { pdfs: 7, videos: 15, questions: 6 }, subjectId: "programming", difficulty: "Beginner" }
    ],
  },
};
