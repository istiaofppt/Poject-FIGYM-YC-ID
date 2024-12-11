const container = document.querySelector('.container-2');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const FormLogin = document.getElementById('p5');
const LoginButton = document.getElementById('loginNow')

registerBtn.addEventListener('click', () =>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
});

LoginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action of the link
    // Toggle visibility of the 'p5' div
    if (FormLogin.style.display === 'none') {
      FormLogin.style.display = 'block'; // Show the div
    } else {
      FormLogin.style.display = 'none'; // Hide the div
    }
  });
  