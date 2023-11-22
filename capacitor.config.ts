import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.jm.rutas_driver',
  appName: 'rutas_driver',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
