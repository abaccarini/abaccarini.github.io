document.addEventListener("DOMContentLoaded", function () {
  // Function to determine the user's system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  // Load and modify particles configuration based on the system theme
  particlesJS.load("particles-js", "/assets/json/particles.json", function () {
    console.log("callback - particles.js config loaded");

    let themesetting = () => {
      let themeSetting = localStorage.getItem("theme");
      if (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") {
        themeSetting = "system";
      }
      return themeSetting;
    };
    const themeSetting = themesetting();

    // Modify particle colors based on the theme
    const theme = getSystemTheme();
    const particles = pJSDom[0].pJS.particles;
    let numParticles = 100;

    if (themeSetting == "light") {
      particles.number.value = 0;
    } else if (theme === "dark") {
      particles.number.value = numParticles;
    } else {
      particles.number.value = 0;
    }

    // Refresh particles.js settings
    pJSDom[0].pJS.fn.particlesRefresh();
  });
});
