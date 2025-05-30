
import { Course, YoutubeVideo, ReadingMaterial } from "@/types/course";

// This would typically come from an API or database
export const COURSES: Course[] = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of machine learning algorithms and their applications",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    rating: 4.8,
    students: 1243,
    duration: "8 weeks",
    category: "Artificial Intelligence",
    chapters: [
      { id: 101, title: "Introduction to Machine Learning", type: "video", completed: false },
      { id: 102, title: "Supervised Learning Algorithms", type: "video", completed: false },
      { id: 103, title: "Unsupervised Learning Algorithms", type: "text", completed: false },
      { id: 104, title: "Neural Networks Basics", type: "video", completed: false },
    ],
    youtubeVideos: [
      { id: "mJeNghZXtMo", title: "Machine Learning for Everybody", channel: "CodeBasics", duration: "54:23" },
      { id: "aircAruvnKk", title: "Neural Networks Explained", channel: "3Blue1Brown", duration: "19:13" },
      { id: "JcI5Vnw0b2c", title: "Machine Learning Algorithms Simplified", channel: "StatQuest", duration: "23:45" }
    ],
    readingMaterials: [
      { id: 1001, title: "Introduction to Machine Learning with Python", type: "pdf", author: "Andreas C. Müller", estimatedReadTime: "45 mins", url: "#" },
      { id: 1002, title: "Understanding Neural Networks from First Principles", type: "article", author: "Andrej Karpathy", estimatedReadTime: "20 mins", url: "#" },
      { id: 1003, title: "The Math Behind Machine Learning", type: "pdf", author: "Rachel Thomas", estimatedReadTime: "30 mins", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Web Development with React",
    description: "Master modern web development using React.js and related technologies",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=60",
    rating: 4.7,
    students: 982,
    duration: "10 weeks",
    category: "Web Development",
    chapters: [
      { id: 201, title: "React Fundamentals", type: "video", completed: false },
      { id: 202, title: "Component Lifecycle", type: "text", completed: false },
      { id: 203, title: "State Management with Redux", type: "video", completed: false },
      { id: 204, title: "Building Full-Stack Applications", type: "video", completed: false },
    ],
    youtubeVideos: [
      { id: "w7ejDZ8SWv8", title: "React JS Crash Course", channel: "Traversy Media", duration: "1:48:47" },
      { id: "4UZrsTqkcW4", title: "Full React Tutorial", channel: "Net Ninja", duration: "2:30:15" },
      { id: "Ke90Tje7VS0", title: "React for Beginners", channel: "Programming with Mosh", duration: "1:27:35" }
    ],
    readingMaterials: [
      { id: 2001, title: "The Road to React", type: "pdf", author: "Robin Wieruch", estimatedReadTime: "50 mins", url: "#" },
      { id: 2002, title: "Understanding React's State Management", type: "article", author: "Dan Abramov", estimatedReadTime: "25 mins", url: "#" },
      { id: 2003, title: "Functional Components vs. Class Components", type: "article", author: "Kent C. Dodds", estimatedReadTime: "15 mins", url: "#" }
    ]
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    description: "Get started with cloud computing and prepare for AWS certification",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=60",
    rating: 4.9,
    students: 756,
    duration: "6 weeks",
    category: "Cloud Computing",
    chapters: [
      { id: 301, title: "Cloud Computing Basics", type: "video", completed: false },
      { id: 302, title: "AWS Core Services", type: "video", completed: false },
      { id: 303, title: "Security and Compliance", type: "text", completed: false },
      { id: 304, title: "Pricing and Support", type: "video", completed: false },
    ],
    youtubeVideos: [
      { id: "3hLmDS179YE", title: "AWS Certified Cloud Practitioner Training", channel: "freeCodeCamp", duration: "3:58:40" },
      { id: "SOTamWNgDKc", title: "AWS Services Overview", channel: "TechWorld with Nana", duration: "29:13" },
      { id: "ulprqHctyLk", title: "AWS for Beginners", channel: "Stephane Maarek", duration: "1:13:45" }
    ],
    readingMaterials: [
      { id: 3001, title: "AWS Certified Cloud Practitioner Study Guide", type: "pdf", author: "Ben Piper", estimatedReadTime: "60 mins", url: "#" },
      { id: 3002, title: "Understanding AWS Cost Optimization", type: "article", author: "Adrian Cantrill", estimatedReadTime: "35 mins", url: "#" },
      { id: 3003, title: "AWS Security Best Practices", type: "pdf", author: "AWS Team", estimatedReadTime: "40 mins", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Blockchain Development",
    description: "Learn to build decentralized applications on blockchain platforms",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=60",
    rating: 4.6,
    students: 532,
    duration: "8 weeks",
    category: "Blockchain",
    chapters: [
      { id: 401, title: "Blockchain Fundamentals", type: "video", completed: false },
      { id: 402, title: "Smart Contract Development", type: "text", completed: false },
      { id: 403, title: "Decentralized Applications", type: "video", completed: false },
      { id: 404, title: "Security in Blockchain", type: "video", completed: false },
    ],
    youtubeVideos: [
      { id: "gyMwXuJrbJQ", title: "Learn Blockchain, Solidity, and Full Stack Web3 Development", channel: "freeCodeCamp", duration: "16:00:23" },
      { id: "M576WGiDBdQ", title: "Blockchain Technology Explained", channel: "Simply Explained", duration: "17:49" },
      { id: "coQ5dg8wM2o", title: "Smart Contracts for Beginners", channel: "Dapp University", duration: "2:05:32" }
    ],
    readingMaterials: [
      { id: 4001, title: "Mastering Ethereum", type: "pdf", author: "Andreas M. Antonopoulos", estimatedReadTime: "70 mins", url: "#" },
      { id: 4002, title: "Introduction to Smart Contracts", type: "article", author: "Vitalik Buterin", estimatedReadTime: "25 mins", url: "#" },
      { id: 4003, title: "Blockchain Security Considerations", type: "article", author: "ConsenSys Team", estimatedReadTime: "35 mins", url: "#" }
    ]
  }
];

// Default materials for all courses that don't have specific materials
export const DEFAULT_YOUTUBE_VIDEOS: YoutubeVideo[] = [
  { id: "rfscVS0vtbw", title: "Learn Python - Full Course for Beginners", channel: "freeCodeCamp", duration: "4:26:51" },
  { id: "ZSPZob_83Jo", title: "C Programming Tutorial for Beginners", channel: "Programming with Mosh", duration: "3:46:13" },
  { id: "KJgsSFOSQv0", title: "C Programming for Beginners", channel: "freeCodeCamp", duration: "3:46:13" }
];

export const DEFAULT_READING_MATERIALS: ReadingMaterial[] = [
  { id: 9001, title: "Learning Python", type: "pdf", author: "Mark Lutz", estimatedReadTime: "60 mins", url: "#" },
  { id: 9002, title: "The C Programming Language", type: "pdf", author: "Brian Kernighan & Dennis Ritchie", estimatedReadTime: "45 mins", url: "#" },
  { id: 9003, title: "Programming: Principles and Practice Using C++", type: "pdf", author: "Bjarne Stroustrup", estimatedReadTime: "55 mins", url: "#" }
];

// Engineering subject-specific materials
export const ENGINEERING_VIDEOS: { [key: string]: YoutubeVideo[] } = {
  "mathematics": [
    { id: "jbIQW0gxgxo", title: "Engineering Mathematics - Complete Playlist", channel: "GATE Academy", duration: "6:32:15" },
    { id: "8vTGj1xhsCg", title: "Linear Algebra Full Course", channel: "Academic Lesson", duration: "3:22:45" },
    { id: "HfACrKJ_Y2w", title: "Calculus for Engineers", channel: "Math Excellence", duration: "4:15:20" }
  ],
  "physics": [
    { id: "ZM8ECpBuQYE", title: "Physics for Engineers - Complete Course", channel: "Physics Academy", duration: "8:12:34" },
    { id: "0XPXNR-fHSU", title: "Engineering Mechanics", channel: "NPTEL", duration: "5:45:21" },
    { id: "ApUkbMIJtE0", title: "Physics: Electricity & Magnetism", channel: "MIT OpenCourseWare", duration: "3:56:12" }
  ],
  "electrical": [
    { id: "oDY_V8OHUpQ", title: "Basic Electrical Engineering", channel: "NPTEL", duration: "7:21:43" },
    { id: "3GHR4WjgJ-g", title: "Circuit Analysis for Beginners", channel: "Engineering Academy", duration: "4:32:10" },
    { id: "FXlUxTX1GQY", title: "AC/DC Circuits Explained", channel: "ElectroBOOM", duration: "2:15:30" }
  ],
  "programming": [
    { id: "rfscVS0vtbw", title: "Learn Python - Full Course for Beginners", channel: "freeCodeCamp", duration: "4:26:51" },
    { id: "vLnPwxZdW4Y", title: "C++ Tutorial for Beginners", channel: "freeCodeCamp", duration: "4:01:23" },
    { id: "grEKMHGYyns", title: "Java Programming for Engineers", channel: "CodeWithHarry", duration: "3:45:12" }
  ]
};

export const ENGINEERING_READING_MATERIALS: { [key: string]: ReadingMaterial[] } = {
  "mathematics": [
    { id: 1001, title: "Advanced Engineering Mathematics", type: "pdf", author: "Erwin Kreyszig", estimatedReadTime: "75 mins", url: "#" },
    { id: 1002, title: "Linear Algebra for Engineers", type: "article", author: "Gilbert Strang", estimatedReadTime: "40 mins", url: "#" },
    { id: 1003, title: "Calculus: Early Transcendentals", type: "pdf", author: "James Stewart", estimatedReadTime: "60 mins", url: "#" }
  ],
  "physics": [
    { id: 2001, title: "University Physics", type: "pdf", author: "Young & Freedman", estimatedReadTime: "65 mins", url: "#" },
    { id: 2002, title: "Engineering Mechanics: Dynamics", type: "pdf", author: "R.C. Hibbeler", estimatedReadTime: "55 mins", url: "#" },
    { id: 2003, title: "The Feynman Lectures on Physics", type: "article", author: "Richard Feynman", estimatedReadTime: "45 mins", url: "#" }
  ],
  "electrical": [
    { id: 3001, title: "Electric Circuits", type: "pdf", author: "James W. Nilsson", estimatedReadTime: "50 mins", url: "#" },
    { id: 3002, title: "Principles of Electronics", type: "pdf", author: "V.K. Mehta", estimatedReadTime: "55 mins", url: "#" },
    { id: 3003, title: "Digital Design", type: "article", author: "M. Morris Mano", estimatedReadTime: "60 mins", url: "#" }
  ],
  "programming": [
    { id: 4001, title: "Clean Code", type: "pdf", author: "Robert C. Martin", estimatedReadTime: "70 mins", url: "#" },
    { id: 4002, title: "Introduction to Algorithms", type: "pdf", author: "Thomas H. Cormen", estimatedReadTime: "80 mins", url: "#" },
    { id: 4003, title: "Programming in C for Engineers", type: "article", author: "Kernighan & Ritchie", estimatedReadTime: "45 mins", url: "#" }
  ]
};

export const getYoutubeEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`;
};
