import WaveSurfer from 'wavesurfer.js';
import peaksData from './peaks.json';

const container = document.getElementById('waveform');

if (container) {
  console.log('mounting Vanilla JS wavesurfer');

  const url = "/audio.mp3";
  const peaks = peaksData.data ? [peaksData.data] : undefined;
  const duration = peaksData.length || undefined;
  const wavesurfer = WaveSurfer.create({
    container: container,
    url,
    peaks,
    duration,
    audioRate: 1,
    // autoplay: true,
    barAlign: 'bottom',
    barGap: 1,
    barHeight: 0.8,
    barRadius: 4,
    barWidth: 4,
    dragToSeek: true,
    height: 160,
  });
  const button = document.createElement('button');
  button.innerText = 'Play/Pause';
  button.addEventListener('click', () => wavesurfer.playPause());
  container.appendChild(button);

  wavesurfer.on('audioprocess', () => { console.log('audioprocess triggered'); });
  wavesurfer.on('click', () => { console.log('click triggered'); });
  wavesurfer.on('dblclick', () => { console.log('dblclick triggered'); });
  wavesurfer.on('decode', () => { console.log('decode triggered'); });
  wavesurfer.on('destroy', () => { console.log('destroy triggered'); });
  wavesurfer.on('drag', () => { console.log('drag triggered'); });
  wavesurfer.on('dragend', () => { console.log('dragend triggered'); });
  wavesurfer.on('dragstart', () => { console.log('dragstart triggered'); });
  wavesurfer.on('error', (error) => { console.log('error triggered', error); });
  wavesurfer.on('finish', () => { console.log('finish triggered'); });
  wavesurfer.on('init', () => { console.log('init triggered'); });
  wavesurfer.on('interaction', () => { console.log('interaction triggered'); });
  wavesurfer.on('load', () => { console.log('load triggered'); });
  wavesurfer.on('loading', () => { console.log('loading triggered'); });
  wavesurfer.on('pause', () => { console.log('pause triggered'); });
  wavesurfer.on('play', () => { console.log('play triggered'); });
  wavesurfer.on('ready', () => { console.log('ready triggered'); });
  wavesurfer.on('redraw', () => { console.log('redraw triggered'); });
  wavesurfer.on('redrawcomplete', () => { console.log('redrawcomplete triggered'); });
  wavesurfer.on('scroll', () => { console.log('scroll triggered'); });
  wavesurfer.on('seeking', () => { console.log('seeking triggered'); });
  wavesurfer.on('timeupdate', () => { console.log('timeupdate triggered'); });
  wavesurfer.on('zoom', () => { console.log('zoom triggered'); });
}