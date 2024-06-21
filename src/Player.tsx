import { useState } from 'react';
import WavesurferPlayer from '@wavesurfer/react';

function Player({ medias }: { medias: Media[] }) {
  const [media, setMedia] = useState<Media>(medias[0]);
  const [wavesurfer, setWavesurfer] = useState<any>(null);
  const [barWidth, setBarWidth] = useState<number>(4);

  return (
    <>
      <WavesurferPlayer
        url={media.url}
        peaks={media.peaks ? media.peaks : undefined}
        duration={media.duration ? media.duration : undefined}
        audioRate={1}
        // autoplay
        barAlign='bottom'
        barGap={1}
        barHeight={.8}
        barRadius={4}
        barWidth={barWidth}
        dragToSeek
        height={160}
        onAudioprocess={(ws) => { console.log("onAudioprocess triggered"); }}
        onClick={(ws) => { console.log("onClick triggered"); }}
        onDblclick={(ws) => { console.log("onDblclick triggered"); }}
        onDecode={(ws) => { console.log("onDecode triggered"); }}
        onDestroy={(ws) => { console.log("onDestroy triggered"); }}
        onDrag={(ws) => { console.log("onDrag triggered"); }}
        onDragend={(ws) => { console.log("onDragend triggered"); }}
        onDragstart={(ws) => { console.log("onDragstart triggered"); }}
        onError={(ws) => { console.log("onError triggered"); }}
        onFinish={(ws) => { console.log("onFinish triggered"); }}
        onInit={(ws) => { console.log("onInit triggered"); }}
        onInteraction={(ws) => { console.log("onInteraction triggered"); }}
        onLoad={(ws) => { console.log("onLoad triggered"); }}
        onLoading={(ws) => { console.log("onLoading triggered"); }}
        onPause={(ws) => { console.log("onPause triggered"); }}
        onPlay={(ws) => { console.log("onPlay triggered"); }}
        onReady={(ws) => { console.log("onReady triggered"); setWavesurfer(ws); }}
        onRedraw={(ws) => { console.log("onRedraw triggered"); }}
        onRedrawcomplete={(ws) => { console.log("onRedrawcomplete triggered"); }}
        onScroll={(ws) => { console.log("onScroll triggered"); }}
        onSeeking={(ws) => { console.log("onSeeking triggered"); }}
        onTimeupdate={(ws) => { console.log("onTimeupdate triggered"); }}
        onZoom={(ws) => { console.log("onZoom triggered"); }}
      />
      <p>
        <button onClick={() => wavesurfer.playPause()}>Play/Pause</button>
      </p>
      <p>
        <button onClick={() => {
          if (media === medias[0]) {
            setMedia(medias[1]);
          } else {
            setMedia(medias[0]);
          }
        }}>Toggle media</button>
      </p>
      <p>
        <button onClick={() => setBarWidth(Math.min(barWidth + 1, 20))}>Increase bar width</button>
        <button onClick={() => setBarWidth(Math.max(barWidth - 1, 1))}>Decrease bar width</button>
      </p>
    </>
  );
}

export default Player;
