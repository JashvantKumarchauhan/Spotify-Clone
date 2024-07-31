import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for songs or artists"
      />
      <ul>
        {filteredSongs.map((song) => (
          <li key={song.id}>
            <Link to={`/song/${song.id}`}>{song.title} by {song.artist}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
