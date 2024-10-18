let currentIndex = 0;
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;

function moveCarousel(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  const carouselTrack = document.querySelector(".carousel-track");
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}
