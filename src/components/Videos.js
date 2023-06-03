import React from 'react';

function Videos() {
  const handleWatchVideos = () => {
    // Open the TikTok profile in a new tab or window
    window.open('https://www.tiktok.com/@namamadden', '_blank');
  };

  return (
    <div className="home-container">
      <h1>Watch my Madden Videos on TikTok</h1>
      {/* Display a heading */}
      
      <h1>Click Below</h1>
      {/* Display another heading */}
      
      <button className='custom-button' onClick={handleWatchVideos}>Watch Videos</button>
      {/* Display a button that triggers the handleWatchVideos function when clicked */}
    </div>
  );
}

export default Videos;
