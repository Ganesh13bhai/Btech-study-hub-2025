
export interface Chapter {
  id: number;
  title: string;
  type: 'video' | 'text';
  completed: boolean;
}

export interface YoutubeVideo {
  id: string;
  title: string;
  channel: string;
  duration: string;
}

export interface ReadingMaterial {
  id: number;
  title: string;
  type: 'pdf' | 'article';
  author: string;
  estimatedReadTime: string;
  url: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  category: string;
  chapters: Chapter[];
  youtubeVideos?: YoutubeVideo[];
  readingMaterials?: ReadingMaterial[];
}
