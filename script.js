function checkScroll() {
  const header = document.getElementById('header');
  const headerImage = document.getElementById('header-image');
  const headerText = document.getElementById('header-text');

  // Berechne die Position des Headers im Verhältnis zum Viewport
  const headerBottom = header.getBoundingClientRect().bottom;

  // Wenn der Header nicht mehr im Viewport sichtbar ist
  if (headerBottom < 0) {
    // Füge die Ausblend-Animationen hinzu
    console.log("Unten");
    headerImage.classList.remove('fade-in-left');
    headerText.classList.remove('fade-in-right');
    headerImage.classList.add('fade-out-left');
    headerText.classList.add('fade-out-right');
  } else {
    // Stelle sicher, dass die Animationen zurückgesetzt werden, wenn der Header sichtbar ist
    headerImage.classList.remove('fade-out-left');
    headerText.classList.remove('fade-out-right');
    headerImage.classList.add('fade-in-left');
    headerText.classList.add('fade-in-right');
  }
}

function checkDCRScroll() {
  const features = document.querySelectorAll('.feature'); // Alle Feature-Container auswählen

  features.forEach(feature => {
      const rect = feature.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
          // Wenn das Feature sichtbar ist, Animation hinzufügen
          if (feature.classList.contains('fade-in-left')) {
              feature.classList.remove('fade-out-left');
              feature.classList.add('fade-in-left');
          } else {
              feature.classList.remove('fade-out-right');
              feature.classList.add('fade-in-right');
          }
      } else {
          // Wenn das Feature nicht mehr sichtbar ist, Animation entfernen
          if (feature.classList.contains('fade-in-left')) {
              feature.classList.remove('fade-in-left');
              feature.classList.add('fade-out-left');
          } else {
              feature.classList.remove('fade-in-right');
              feature.classList.add('fade-out-right');
          }
      }
  });
}

// Event Listener für das Scrollen
window.addEventListener('scroll', checkScroll);