document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const themeElement = document.documentElement;
  
    function toggleDarkMode() {
      themeElement.classList.toggle('dark-mode');
    }
  
    toggleButton.addEventListener('click', toggleDarkMode);
  });
  