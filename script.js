document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const target = 2;
  const counter = document.getElementById("counter");

  const interval = setInterval(() => {
    count++;
    counter.textContent = count;

    if (count === target) {
      clearInterval(interval);
      setTimeout(() => {
        counter.textContent = `${target}+`;
      }, 400);
    }
  }, 400);
});
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  reveals.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const target = 5;
  const counter = document.getElementById("counter1");

  const interval = setInterval(() => {
    count++;
    counter.textContent = count;

    if (count === target) {
      clearInterval(interval);
      setTimeout(() => {
        counter.textContent = `${target}+`;
      }, 400);
    }
  }, 400);
});

 const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("right-[-100%]");
    if (isHidden) {
      mobileMenu.classList.remove("right-[-100%]");
      mobileMenu.classList.add("right-0");
    } else {
      mobileMenu.classList.remove("right-0");
      mobileMenu.classList.add("right-[-100%]");
    }
  });

  