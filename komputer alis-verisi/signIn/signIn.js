const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');
  alertPlaceholder.innerHTML = ""
  alertPlaceholder.append(wrapper);
};

let form = document.querySelector("form");
let signinsFirstInput = document.querySelector(".signinsFirstInput");
let signinSecondInput = document.querySelector(".signinSecondInput");
let fourthBtn = document.querySelector(".fourthBtn");

let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(signinsFirstInput)
console.log(signinSecondInput)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    appendAlert('Formu düzgün doldurun!', 'danger');
    return;
  }
  let user = users.find((e) => {
    console.log(e.IstifadeçiAdı)
    console.log(signinsFirstInput.value)
    console.log(e.Şifre)
    console.log(signinSecondInput.value)
    return e.IstifadeçiAdı == signinsFirstInput.value && e.Şifre == signinSecondInput.value
})
  if (user) {
  localStorage.setItem("user", JSON.stringify(user));
  appendAlert('Məlumatlar Doğrudur', 'success');
  setTimeout(() => {
    location.href = "../home2/home2.html";
  }, 1000);
} else {
  appendAlert('Parol və ya istifadəçi adı yanlışdır', 'danger');
}
});

fourthBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    location.href = "../signUp/signup.html";
  }, 1000);
});