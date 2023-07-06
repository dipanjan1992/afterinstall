function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      darkModeToggle.checked = true;
    } else {
      darkModeToggle.checked = false;
    }
  }

  // Function to handle theme change
  function handleThemeChange(event) {
    const newTheme = event.matches ? "dark" : "light";
    setTheme(newTheme);
  }

  // Detect the user's system preference and set the initial theme
  setTheme(prefersDarkScheme.matches ? "dark" : "light");

  // Listen for changes to the system theme preference
  prefersDarkScheme.addEventListener("change", handleThemeChange);

  // Toggle the theme when the checkbox is clicked
  darkModeToggle.addEventListener("change", function () {
    const newTheme = this.checked ? "dark" : "light";
    setTheme(newTheme);
  });
});
