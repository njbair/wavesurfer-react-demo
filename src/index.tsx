import React from 'react';
import ReactDOM from 'react-dom/client';
import peaksData from './peaks.json';
import Player from './Player';
import './vanilla';

const container = document.getElementById('root');

if (container) {
  console.log('mounting React wavesurfer');

  const peaks = peaksData.data;
  const duration = peaksData.length;

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
