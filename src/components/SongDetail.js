import React from 'react';
import { useParams } from 'react-router-dom';
import { songs } from '../data/songs';

function SongDetail() {
  const { id } = useParams();
  const song = songs.find(song => song.id === parseInt(id));

  if (!song) return <div>Song not found</div>;

  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
      <audio controls src={song.audioUrl}></audio>
    </div>
  );
}

export default SongDetail;
