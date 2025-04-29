// "use client"

// import React, { useState } from 'react';
// import PlatformSelector from '../components/PlatformSelector';
// import VersionCard from '../components/VersionCard';
// import { appVersions } from '../data/appVersions';
// import "../index.css";

// const Index = () => {
//   const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios'>('android');
  
//   const versions = appVersions[selectedPlatform];
//   const latestVersion = versions[0];
//   const olderVersions = versions.slice(1);

//   return (
//     <div className="min-h-screen px-4 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//             App Version Vault
//           </h1>
//           <p className="text-muted-foreground max-w-md mx-auto">
//             Download the latest versions of our application for your device
//           </p>
//         </div>

//         <div className="flex justify-center mb-12">
//           <PlatformSelector 
//             selectedPlatform={selectedPlatform}
//             onSelectPlatform={setSelectedPlatform}
//           />
//         </div>

//         <div className="space-y-8">
//           <section>
//             <h2 className="text-2xl font-semibold mb-4">Latest Version</h2>
//             <VersionCard version={latestVersion} isLatest={true} />
//           </section>
          
//           <section>
//             <h2 className="text-2xl font-semibold mb-4">Previous Versions</h2>
//             <div className="grid gap-4">
//               {olderVersions.map((version, index) => (
//                 <VersionCard key={index} version={version} />
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;



"use client";

import React, { useState, useEffect } from 'react';
import PlatformSelector from '../components/PlatformSelector';
import VersionCard from '../components/VersionCard';
import { appVersions } from '../data/appVersions';
import "../index.css"; // Make sure this is imported

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'android' | 'ios'>('android');
  const [isPageLoaded, setIsPageLoaded] = useState(false); // State for page load

  const versions = appVersions[selectedPlatform];
  const latestVersion = versions[0];
  const olderVersions = versions.slice(1);

  useEffect(() => {
    // Set page loaded state after the component mounts
    setIsPageLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen px-4 py-8 md:py-12 ${isPageLoaded ? 'fade-in' : ''}`}>
      {/* Toolbar with Home link and Download text */}
      <div className="absolute top-4 left-4">
        <a href="/" className="text-sm text-blue-600 hover:underline hover:text-blue-800 font-medium">
          Home
        </a>
        <p className="inline-block text-sm text-gray-600 ml-2">/ Download</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            App Version Vault
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Download the latest versions of our application for your device
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <PlatformSelector 
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Version</h2>
            <VersionCard version={latestVersion} isLatest={true} />
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Previous Versions</h2>
            <div className="grid gap-4">
              {olderVersions.map((version, index) => (
                <VersionCard key={index} version={version} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
