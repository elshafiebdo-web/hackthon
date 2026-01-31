document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigation clicked");
  });
});


const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;


document.querySelectorAll(".step-check").forEach(check => {
  check.addEventListener("change", () => {
    const step = check.closest(".step");
    step.classList.toggle("completed", check.checked);
  });
});
