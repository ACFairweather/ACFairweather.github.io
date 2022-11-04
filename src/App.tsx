import React, { useState } from 'react';
import './App.css';
import BookTable from './components/books-table';
import NavBar from './components/nav-bar';
import PodcastTable from './components/podcasts-table';

function App() {
  const [showBooks, setShowBooks] = useState(false);
  const [showPodcasts, setShowPodcasts] = useState(false);

  // document.body.style.backgroundColor = '#121212';
  document.body.style.backgroundImage = 'linear-gradient(to right, #000000, #121212, #000000)';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';

  const displayBooks = (): void => {
    // showBooks ? setShowBooks(false) : setShowBooks(true) --Turns button into a on/off toggle
    setShowPodcasts(false) //Must be a better way to do this
    setShowBooks(true)

  }

  const displayPodcasts = (): void => {
    setShowBooks(false)
    setShowPodcasts(true)
  }

  const displayHome = (): void => {
    setShowBooks(false)
    setShowPodcasts(false)
  }

  return (
    <div className="App">
      <NavBar displayBooks={displayBooks} displayPodcasts={displayPodcasts} displayHome={displayHome}/>
      {showBooks && <BookTable />}
      {showPodcasts && <PodcastTable />}
    </div>
  );
}

export default App;
