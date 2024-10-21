import React, { useState, useRef, useEffect } from 'react';
import {  Volume2, VolumeX } from 'lucide-react';
import { Icons } from './icons';

interface VideoPlayerProps {
  src: string
  onLoadedData?: () => void
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, onLoadedData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.35); 
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const volumeBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(progress);
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      video.volume = volume; 
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [volume]);
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const seekPosition = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = seekPosition * videoRef.current.duration;
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && volumeBarRef.current) {
      const rect = volumeBarRef.current.getBoundingClientRect();
      const newVolume = (e.clientX - rect.left) / rect.width;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0 && isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  return (
    <div className="w-full max-w-[23rem] mx-auto">
      <div className="relative  overflow-hidden">
        <video 
          ref={videoRef}
          src={src}
          className="w-full h-[35.5rem] object-cover"
          onClick={togglePlay}
          onLoadedData={onLoadedData}
        />
        <div 
          ref={progressBarRef}
          className="absolute z-20 bottom-0 left-0 right-0 mx-[1.1875rem] mb-[1.1875rem] h-[1.1875rem] bg-gray cursor-pointer rounded-[2.5rem]"
          style={{ width: 'calc(100% - 2.375rem)' }}
          onClick={handleSeek}
        >
          <div 
            className="h-full bg-blue rounded-[2.5rem]" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={togglePlay}
        >
          {!isPlaying && <Icons.Play  />}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <button 
          onClick={toggleMute} 
          className="text-gray hover:text-gray-medium transition-colors"
        >
          {isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}
        </button>
        <div 
          ref={volumeBarRef}
          className="ml-2 w-24 h-4 bg-gray rounded-full cursor-pointer"
          onClick={handleVolumeChange}
        >
          <div 
            className="h-full bg-blue rounded-full" 
            style={{ width: `${volume * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;