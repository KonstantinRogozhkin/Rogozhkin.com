import { FC } from 'react';
import { cn } from '@/shared/lib/utils';

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ 
  src, 
  title,
  className 
}) => {
  // Извлекаем ID видео из YouTube URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(src);

  if (!videoId) {
    return null;
  }

  return (
    <div className={cn("relative w-full rounded-lg overflow-hidden", className)}>
      <div className="relative pb-[56.25%]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};
