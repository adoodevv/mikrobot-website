import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mikrobot Academy - Robotics Education Platform',
    short_name: 'Mikrobot',
    description: 'Robotics education platform empowering the next generation with hands-on learning. Programs for students ages 6-18.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0c4a6e',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

