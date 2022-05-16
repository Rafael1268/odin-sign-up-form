const submitBtn = document.getElementById('submitBtn');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const errorMsg = document.querySelector('#errorMsg');

console.log(submitBtn);
submitBtn.addEventListener('click', () => validate(event));

function validate(e) {
  if(password.value === confirmPassword.value) {
    errorMsg.innerHTML= '';
  } else {
    errorMsg.innerHTML = '*Passwords do not match';
    e.preventDefault();
  }
}