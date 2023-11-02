import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'name.razvanpopa.raztoolbox',
  appName: "Raz's Toolbox",
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
