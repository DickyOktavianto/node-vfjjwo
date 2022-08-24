//Menangkap elemn dengan dariform id="login_form"
let login_form = document.getElementById('login_form');

//tambahkan event Listener sumbit
login_form.addEventListener('submit', function (event) {
  //stop form daro reload page
  event.preventDefault();

  // console.info(event.target.email.value);
  // console.info(event.target.password.value);

  //buat variable penampung value input
  let input_email = event.target.email.value;
  let input_password = event.target.password.value;

  //default email dan password
  let my_email = 'dickyoktv25@gmail.com';
  let my_password = '234512';

  // check email
  if (input_email != my_email) {
    alert('email belum terdaftar...');
    return; //akan menghentikan proses code dibawahnya
  }

  // check password
  if (input_password != my_password) {
    alert('Password Salah!');
    return;
  }

  // berhasil
  alert('Login Berhasil');
});
