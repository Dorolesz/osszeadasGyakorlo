import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

let num1, num2, valasz;

function egyenletGeneralas(){
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;
  valasz = num1 + num2;
  
  document.getElementById('egyenlet').textContent = `${num1} + ${num2} = `;
}

document.addEventListener('DOMContentLoaded', function() {
  egyenletGeneralas();

  document.getElementById('checkButton').addEventListener('click', function () {
    const felhasznaloValasza = parseInt(document.getElementById('answer').value.trim(), 10);
    const feedback = document.getElementById('feedback');

    if (felhasznaloValasza === valasz) {
      document.body.classList.remove('incorrect');
      document.body.classList.add('correct');
      feedback.textContent = "Helyes válasz!";
      feedback.className = "alert alert-success";
    } else {
      document.body.classList.remove('correct');
      document.body.classList.add('incorrect');
      feedback.textContent = "Hibás válasz!"
      feedback.className = "alert alert-danger"
    }
  });
})