import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

function HomePage() {
  const [genre, setGenre] = useState('All');

  const filterSongs = genre === 'All' ? songs : songs.filter(song => song.genre === genre);

  return (
    <div>
      <h1>Top Songs</h1>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Pop">Pop</option>
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="Dance">Dance</option>
      </select>
      <ul>
        {filterSongs.map((song) => (
          <li key={song.id}>
            <Link to={`/song/${song.id}`}>{song.title} by {song.artist}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
