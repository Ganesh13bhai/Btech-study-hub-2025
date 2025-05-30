
import { Course } from "@/types/course";

export const TRENDING_COURSES: Course[] = [
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
    ]
  }
];
