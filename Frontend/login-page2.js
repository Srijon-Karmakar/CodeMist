/* JS FILE */
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.innerHTML = `
        <h2>Login</h2>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Username" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" required>
        </div>
        <button type="submit" class="login-button">Login</button>
    `;
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    loginForm.innerHTML = `
        <h2>Signup</h2>
        <div class="form-group">
            <label for="signup-username">Username</label>
            <input type="text" id="signup-username" placeholder="Username" required>
        </div>
        <div class="form-group">
            <label for="signup-email">Email</label>
            <input type="email" id="signup-email" placeholder="Email" required>
        </div>
        <div class="form-group">
            <label for="signup-password">Password</label>
            <input type="password" id="signup-password" placeholder="Password" required>
        </div>
        <button type="submit" class="login-button">Signup</button>
    `;
});

// home button
document.getElementById('go-to-home').addEventListener('click', () => {
    location.href = 'home-page.html'; 
  });
  