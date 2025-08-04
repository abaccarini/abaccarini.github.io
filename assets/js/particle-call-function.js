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

    // Modify particle colors based on the theme
    const theme = getSystemTheme();
    const particles = pJSDom[0].pJS.particles;

    let drac_colors = [
      "#6272A4",
      "#8BE9FD",
      "#50FA7B",
      "#FFB86C",
      "#FF79C6",
      "#BD93F9",
      "#FF5555",
      "#F1FA8C",
      "#a3a39d",
      "#a3a39d",
      "#a3a39d",
      "#a3a39d",
      "#a3a39d",
      "#a3a39d",
      "#a3a39d",
    ];
    if (theme === "dark") {
      particles.color.value = drac_colors;
      particles.line_linked.color = "#ffffff";
    } else {
      particles.color.value = "#c2c2c2";
      particles.line_linked.color = "#c2c2c2";
    }

    // Refresh particles.js settings
    pJSDom[0].pJS.fn.particlesRefresh();
  });
});
