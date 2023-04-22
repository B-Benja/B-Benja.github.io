document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const moonIcon = darkModeToggle.querySelector('.fa-moon');
  const sunIcon = darkModeToggle.querySelector('.fa-sun');

  function setDarkMode(enabled) {
    if (enabled) {
      document.documentElement.classList.add('dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = '';
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      moonIcon.style.display = '';
      sunIcon.style.display = 'none';
      localStorage.setItem('dark-mode', 'false');
    }
  }

  if (localStorage.getItem('dark-mode') === 'true') {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }

  darkModeToggle.addEventListener('click', function () {
    setDarkMode(moonIcon.style.display === '');
  });
});
