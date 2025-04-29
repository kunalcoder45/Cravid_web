import React from 'react';
import { cn } from '@/lib/utils';

type PlatformSelectorProps = {
  selectedPlatform: 'android' | 'ios';
  onSelectPlatform: (platform: 'android' | 'ios') => void;
};

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: PlatformSelectorProps) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-secondary/30 backdrop-blur-sm p-2 rounded-full">
      <button
        className={cn(
          "platform-button",
          selectedPlatform === 'android' ? 'active' : 'inactive'
        )}
        onClick={() => onSelectPlatform('android')}
      >
        Android
      </button>
      <button
        className={cn(
          "platform-button",
          selectedPlatform === 'ios' ? 'active' : 'inactive'
        )}
        onClick={() => onSelectPlatform('ios')}
      >
        iOS
      </button>
    </div>
  );
};

export default PlatformSelector;