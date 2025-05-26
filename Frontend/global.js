// Array of theme classes
const themes = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6', 'theme7','theme8','theme9','theme10','theme11','theme12','theme13','theme14'];

let currentThemeIndex = 0;

// Get the button element
const themeToggler = document.getElementById('themeToggler');

// Add event listener to the button
themeToggler.addEventListener('click', () => {
    // Get the body element
    const body = document.body;

    // Add fade-out class for transition
    body.classList.add('fade-out');

     // Wait for the fade-out to complete, then switch themes
     setTimeout(() => {

    // Remove the current theme
    body.classList.remove(themes[currentThemeIndex]);

    // Update the index for the next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Add the new theme
    body.classList.add(themes[currentThemeIndex]);

    // Add fade-in class for transition back
    body.classList.add('fade-in');

    // Remove fade-in class after animation completes
    setTimeout(() => {
        body.classList.remove('fade-in');
    }, 500); // Match the CSS transition duration
}, 500); // Match the CSS transition duration
});
