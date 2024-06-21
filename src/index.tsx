import React from 'react';
import ReactDOM from 'react-dom/client';
import peaksData from './audio-peaks.json';
import peaksDataB from './CantinaBand60-peaks.json';
import Player from './Player';
import './vanilla';

const container = document.getElementById('root');

if (container) {
  console.log('mounting React wavesurfer');

  const usePeaks = container.dataset.usePeaks === 'true';

  const medias = [
    {
      url: '/audio.mp3',
      peaks: usePeaks ? [peaksData.data] : undefined,
      duration: usePeaks ? peaksData.length : undefined,
    },
    {
      url: '/CantinaBand60.wav',
      peaks: usePeaks ? [peaksDataB.data] : undefined,
      duration: usePeaks ? peaksDataB.length : undefined,
    }
  ]

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Player medias={medias} />
    </React.StrictMode>
  );
}
