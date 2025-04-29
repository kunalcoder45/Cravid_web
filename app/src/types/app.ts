export type AppVersion = {
    versionNumber: string;
    releaseDate: string;
    changes: string[];
    downloadUrl: string;
  };
  
  export type AppData = {
    android: AppVersion[];
    ios: AppVersion[];
  };
  