
import React from 'react';
import { YoutubeVideo } from '@/types/course';
import { Youtube } from 'lucide-react';
import { getYoutubeEmbedUrl } from '@/data/courses';

interface CourseVideosPanelProps {
  videos: YoutubeVideo[];
}

const CourseVideosPanel = ({ videos = [] }: CourseVideosPanelProps) => {
  if (videos.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">No video lessons available</h3>
        <p className="text-gray-500">This course doesn't have any video lessons yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
        <Youtube className="mr-2" />
        Video Lessons from Experts
      </h2>
      
      <div className="space-y-6">
        {videos.map((video) => (
          <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full aspect-video" 
                src={getYoutubeEmbedUrl(video.id)} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{video.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-600">{video.channel}</p>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseVideosPanel;
