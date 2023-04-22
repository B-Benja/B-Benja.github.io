(function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  if (darkModeToggle) {
    // Check if localStorage has a value for 'dark-mode'
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
      darkModeToggle.checked = true;
    } else {
      document.documentElement.classList.remove('dark');
      darkModeToggle.checked = false;
    }

    darkModeToggle.addEventListener('change', function() {
      if (darkModeToggle.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', 'false');
      }
    });
  }
})();
