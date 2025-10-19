document.addEventListener("DOMContentLoaded", ()=>{
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a");
  

  window.addEventListener("scroll", ()=>{
    let current = "";
    sections.forEach((section)=>{
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
      } 
 });

  })})


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // المدة بالمللي ثانية (1000 = 1 ثانية)
        let startTime = null;

        function animationScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // التقدم في التمرير (0 إلى 1)

            window.scrollTo(0, startPosition + distance * progress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animationScroll);
            }
        }

        requestAnimationFrame(animationScroll);
      });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});