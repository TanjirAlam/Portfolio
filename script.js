//  document.getElementById("year").textContent = new Date().getFullYear();
//     lucide.createIcons();
    // Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize Lucide icons
lucide.createIcons();

// Toggle light/dark theme
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const icon = toggleBtn.querySelector("i");
  icon.setAttribute("data-lucide", document.documentElement.classList.contains("dark") ? "sun" : "moon");
  lucide.createIcons();
});

// animationn
 function animateText(id, text, delay = 50) {
    const container = document.getElementById(id);
    container.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "letter";
      span.style.animationDelay = `${index * delay}ms`;
      container.appendChild(span);
    });
  }

  animateText("animatedHeading", "Hi, I'm Tanjir Alam", 50);
  animateText("animatedSubheading", "Full-Stack MERN Developer", 30);