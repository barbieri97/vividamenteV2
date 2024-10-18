const boxesL = document.querySelectorAll(".hidden-left");
const boxesR = document.querySelectorAll(".hidden-right");
const boxesU = document.querySelectorAll(".hidden-up");
const boxesD = document.querySelectorAll(".hidden-down");
const boxesList = document.querySelectorAll(".hidden.list");

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

const observerList = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show-list");
        }, index * 200);
        // observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

boxesL.forEach((box) => observer.observe(box));
boxesR.forEach((box) => observer.observe(box));
boxesU.forEach((box) => observer.observe(box));
boxesD.forEach((box) => observer.observe(box));
boxesL.forEach((box) => observerList.observe(box));
