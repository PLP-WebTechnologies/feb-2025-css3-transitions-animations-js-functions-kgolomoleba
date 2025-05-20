// Get elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const dashboard = document.getElementById('dashboard');
const userInfo = document.querySelector('.user-info');
const eventsList = document.getElementById('events-list');
const aboutBtn = document.getElementById('about-btn');
const logoutBtn = document.getElementById('logout-btn');
const aboutModal = document.getElementById('about-modal');
const modalClose = document.getElementById('modal-close');

// Sample Upcoming Events
const events = [
  {
    title: "Cape Town Sunset Fest",
    date: "2025-12-15",
    location: "Clifton Beach, Cape Town",
  },
  {
    title: "Joburg Street Vibes",
    date: "2025-11-30",
    location: "Maboneng Precinct, Johannesburg",
  },
  {
    title: "Durban Summer Splash",
    date: "2025-12-22",
    location: "uShaka Marine, Durban",
  },
];

// Handle Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = usernameInput.value.trim();
  if (name) {
    loginForm.classList.add('hidden');
    dashboard.classList.remove('hidden');
    userInfo.textContent = `Hello, ${name}! Here are your upcoming vibes:`;
    showEvents();
  }
});

// Show Events
function showEvents() {
  eventsList.innerHTML = '';
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;
    eventsList.appendChild(eventCard);
  });
}

// About Us Modal
aboutBtn.addEventListener('click', () => {
  aboutModal.classList.add('show');
});

// Close Modal
modalClose.addEventListener('click', () => {
  aboutModal.classList.remove('show');
});

// Close modal if clicked outside
window.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.classList.remove('show');
  }
});

// Logout
logoutBtn.addEventListener('click', () => {
  dashboard.classList.add('hidden');
  loginForm.classList.remove('hidden');
  usernameInput.value = '';
});
