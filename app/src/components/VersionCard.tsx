import React from 'react';
import { Download } from 'lucide-react';
import { AppVersion } from '../types/app';

type VersionCardProps = {
  version: AppVersion;
  isLatest?: boolean;
};

const VersionCard = ({ version, isLatest = false }: VersionCardProps) => {
  return (
    <div className="version-card group">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg">
              Version {version.versionNumber}
              {isLatest && (
                <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                  Latest
                </span>
              )}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">Released on {version.releaseDate}</p>
        </div>
        
        {/* Download Button */}
        <a
          href={version.downloadUrl}  // Use the provided download URL
          download  // Ensures that it triggers the file download
          className="download-button text-white hover:text-white transition-colors duration-200" // Hover effect added
          title={`Download version ${version.versionNumber}`}
        >
          <Download size={18} />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-1">What's new:</h4>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          {version.changes.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VersionCard;
