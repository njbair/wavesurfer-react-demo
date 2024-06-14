import React from 'react';
import ReactDOM from 'react-dom/client';
import peaksData from './peaks.json';
import Player from './Player';
import './vanilla';

const container = document.getElementById('root');

if (container) {
  console.log('mounting React wavesurfer');

  const usePeaks = container.dataset.usePeaks === 'true';
  const peaks = usePeaks ? peaksData.data : false;
  const duration = usePeaks ? peaksData.length : false;

  const url = "/audio.mp3";

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Player media={{url, peaks, duration}} />
    </React.StrictMode>
  );
}
