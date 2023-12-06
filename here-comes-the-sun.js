//hw

const start = performance.now(); // Get the start timestamp

function animateBackground() {
  const elapsed = performance.now() - start; // Calculate elapsed time

  // Calculate the color value based on elapsed time
  const colorValue = Math.min(255, Math.round(elapsed / 5)); // Increment by 1 every frame

  // Set the background color using the calculated color value
  document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  // Check if the animation should continue
  if (colorValue < 255) {
    requestAnimationFrame(animateBackground); // Continue the animation
  }
}

// Start the animation
requestAnimationFrame(animateBackground);
