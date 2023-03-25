import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.razvanpopa.raztoolbox',
  appName: "Raz's Toolbox",
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    // D:\work\repos\termita81\raz-toolbox\android\app\src\main\assets\capacitor.config.json
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
