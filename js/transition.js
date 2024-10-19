const boxes = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
boxes.forEach((box) => observer.observe(box));
