const progress = document.getElementById("progress");
const [prev, next] = [
  document.getElementById("prev"),
  document.getElementById("next"),
];
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const update = () => {
  circles.forEach((circle, idx) => {
    circle.classList.toggle("active", idx < currentActive);
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
};

next.addEventListener("click", () => {
  currentActive = Math.min(currentActive + 1, circles.length);
  update();
});

prev.addEventListener("click", () => {
  currentActive = Math.max(currentActive - 1, 1);
  update();
});

update();
