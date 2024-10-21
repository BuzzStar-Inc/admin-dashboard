'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DialogHeader, Dialog, DialogContent } from '@/components/ui/dialog';
import VideoPlayer from '@/components/ui/video-player';
import { Buzz } from './types';
import { Icons } from '@/components/ui/icons';

export const CreatorDetailsModal = ({
  buzz: { name, date, time, duration, partner, videoUrl },
  isOpen,
  onClose
}: {
  buzz: Buzz;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[843px]">
        <DialogHeader />
        <div className="grid lg:grid-cols-5 gap-4 mt-4">
          <div className="lg:col-span-2 space-y-4 lg:p-8">
            <h2 className="text-2xl font-extrabold pb-2">{name}</h2>
            <p className="text-sm font-medium">{date}</p>
            <p className="text-sm font-medium">{time}</p>{' '}
            <p className="text-sm font-medium">{duration}</p>
            <p className="text-sm font-medium">
              <span className="text-black">with </span>
              <span className="text-blue underline">{partner}</span>
            </p>
            <Button variant="link" className="px-0 py-0 block h-5 underline">
              Download Video
            </Button>
            <Button
              variant="destructive"
              className="px-0 py-0 block h-5 underline"
            >
              Delete Video
            </Button>
          </div>
          <div className="lg:col-span-3 flex justify-center">
            {isVideoLoading && (
              <Icons.Spinner className="m-auto h-[2rem] w-[2rem] animate-spin text-blue" />
            )}
            <div className={isVideoLoading ? 'hidden' : ''}>
              <VideoPlayer src={videoUrl} onLoadedData={handleVideoLoad} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
