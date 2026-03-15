import { FC, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { useTheme } from '@/entities/theme';

interface Video {
  title: string;
  url: string;
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  playlist?: Video[];
}

export const VideoModal: FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title, playlist }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (playlist && isOpen) {
      const index = playlist.findIndex(v => v.url === videoUrl);
      setCurrentVideoIndex(index >= 0 ? index : 0);
    }
  }, [videoUrl, playlist, isOpen]);

  const currentVideo = playlist?.[currentVideoIndex] || { url: videoUrl, title };
  const hasPlaylist = playlist && playlist.length > 1;

  const goToNext = useCallback(() => {
    if (playlist && currentVideoIndex < playlist.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    }
  }, [playlist, currentVideoIndex]);

  const goToPrev = useCallback(() => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  }, [currentVideoIndex]);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(currentVideo.url);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasPlaylist) {
        goToNext();
      } else if (e.key === 'ArrowLeft' && hasPlaylist) {
        goToPrev();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose, hasPlaylist, goToNext, goToPrev]);

  if (!videoId) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className={cn(
            "absolute inset-0",
            isDark ? "bg-black/80 backdrop-blur-sm" : "bg-black/60 backdrop-blur-sm"
          )} />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="relative z-10 w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation & Close */}
            <div className="absolute -top-12 left-0 right-0 flex items-center justify-between">
              {/* Navigation Buttons */}
              {hasPlaylist && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrev}
                    disabled={currentVideoIndex === 0}
                    className={cn(
                      "p-2 rounded-lg transition-all duration-200",
                      "flex items-center gap-2 text-sm font-medium",
                      currentVideoIndex === 0 ? "opacity-50 cursor-not-allowed" : "",
                      isDark
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 disabled:hover:bg-cyan-500/10"
                        : "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 disabled:hover:bg-white"
                    )}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium",
                    isDark
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "bg-white text-indigo-600 border border-indigo-200"
                  )}>
                    {currentVideoIndex + 1} / {playlist.length}
                  </span>
                  <button
                    onClick={goToNext}
                    disabled={currentVideoIndex === playlist.length - 1}
                    className={cn(
                      "p-2 rounded-lg transition-all duration-200",
                      "flex items-center gap-2 text-sm font-medium",
                      currentVideoIndex === playlist.length - 1 ? "opacity-50 cursor-not-allowed" : "",
                      isDark
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 disabled:hover:bg-cyan-500/10"
                        : "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 disabled:hover:bg-white"
                    )}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className={cn(
                  "p-2 rounded-lg transition-all duration-200 ml-auto",
                  "flex items-center gap-2 text-sm font-medium",
                  isDark
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20"
                    : "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50"
                )}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Закрыть
              </button>
            </div>

            {/* Video Container */}
            <div className={cn(
              "rounded-lg overflow-hidden shadow-2xl",
              isDark ? "bg-[#0B1120] border border-cyan-500/20" : "bg-white border border-slate-200"
            )}>
              {/* Title */}
              <div className={cn(
                "px-6 py-4 border-b",
                isDark ? "border-cyan-500/10" : "border-slate-200"
              )}>
                <h3 className={cn(
                  "text-lg font-semibold",
                  isDark ? "text-cyan-400" : "text-indigo-600"
                )}>
                  {currentVideo.title}
                </h3>
                {hasPlaylist && (
                  <p className={cn(
                    "text-xs mt-1",
                    isDark ? "text-cyan-100/50" : "text-zinc-500"
                  )}>
                    Используйте ← → для навигации или Esc для закрытия
                  </p>
                )}
              </div>

              {/* Video */}
              <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
