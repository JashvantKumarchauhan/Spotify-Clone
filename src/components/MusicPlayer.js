import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '../data/songs';

function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div>
      {currentSong && (
        <AudioPlayer
          src={currentSong.audioUrl}
          onPlay={() => console.log('Playing...')}
          onPause={() => console.log('Paused')}
          onEnded={() => console.log('Ended')}
          controls
        />
      )}
      <div>
        {songs.map((song) => (
          <button key={song.id} onClick={() => setCurrentSong(song)}>
            Play {song.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MusicPlayer;
