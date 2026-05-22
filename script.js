```javascript
// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
  console.log('YouTube Thumbnail Downloader loaded successfully!');
  
  // DOM Elements
  const youtubeUrlInput = document.getElementById('youtube-url');
  const fetchBtn = document.getElementById('fetch-btn');
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  const errorMessage = document.querySelector('.error-message');
  const successMessage = document.querySelector('.success-message');
  
  // YouTube thumbnail quality options
  const thumbnailQualities = [
    { label: 'High Quality (HQ)', resolution: 'hqdefault', width: 640, height: 360 },
    { label: 'Standard Definition (SD)', resolution: 'sddefault', width: 640, height: 480 },
    { label: 'Medium Quality', resolution: 'mqdefault', width: 320, height: 180 },
    { label: 'Default', resolution: 'default', width: 120, height: 68 }
  ];
  
  // Extract video ID from various YouTube URL formats
  function extractVideoId(url) {
    const patterns = [
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
      /^(PL[\w-]{16,})(?:(?:\|)|(?:[^\w-]))/ // Playlist URLs
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return null;
  }
  
  // Fetch thumbnails for a video ID
  async function fetchThumbnails(videoId) {
    try {
      // We'll simulate fetching by