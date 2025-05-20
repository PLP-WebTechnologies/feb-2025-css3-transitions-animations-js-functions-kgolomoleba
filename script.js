// DOM elements
const themeToggle = document.getElementById('themeToggle');
const usernameInput = document.getElementById('username');
const userForm = document.getElementById('userForm');
const userDisplay = document.getElementById('userDisplay');
const nameFeedback = document.getElementById('nameFeedback');
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

// Load stored preferences on startup
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  const savedName = localStorage.getItem('username');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  if (savedName) {
    userDisplay.textContent = savedName;
    usernameInput.value = savedName;
  }
};

// Toggle dark mode and save preference
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Form submission
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = usernameInput.value.trim();

  if (name.length < 3) {
    nameFeedback.textContent = 'Name must be at least 3 characters.';
    return;
  }

  localStorage.setItem('username', name);
  userDisplay.textContent = name;
  nameFeedback.textContent = 'Name saved ✅';
  nameFeedback.style.color = 'green';
});

// Open and close modal
openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
