// Array of image URLs
const images = [
    'yay/ixil1.png', // Replace with your image paths
    'yay/ixil2.png',
    'yay/ixil3.png'
  ];
  
  let currentIndex = 0; // Track the current image index
  const imageElement = document.getElementById('changing-image'); // Get the <img> element
  
  // Function to change the image
  function changeImage() {
    currentIndex++; // Increment the index
  
    // Check if there are more images left
    if (currentIndex < images.length) {
      imageElement.src = images[currentIndex]; // Update the image source
    } else {
      clearInterval(imageInterval); // Stop the interval when done
    }
  }
  
  // Change the image every 30 minutes
  const imageInterval = setInterval(changeImage, 1800000);
  