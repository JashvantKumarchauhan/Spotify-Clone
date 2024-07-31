import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Search from './components/Search';
import SongDetail from './components/SongDetail';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
        <MusicPlayer />
      </div>
    </Router>
  );
}

export default App;
