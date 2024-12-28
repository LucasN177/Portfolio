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