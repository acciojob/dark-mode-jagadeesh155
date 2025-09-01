// Select button
const toggleBtn = document.getElementById('toggleTheme');

// Check localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Toggle theme on button click
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
