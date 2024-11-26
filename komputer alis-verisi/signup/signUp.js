// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

let users = JSON.parse(localStorage.getItem("users")) || []

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')


let secondBtn = document.querySelector(".secondBtn")
let form = document.querySelector("form")

secondBtn.addEventListener("click", (e) => {
  e.preventDefault()
  setTimeout(() => {
    location.href = "../signIn/signIn.html"
  }, 1000);
})

let firstInput = document.querySelector(".firstInput")
let secondInput = document.querySelector(".secondInput")
let thirdInput = document.querySelector(".thirdInput")
let fourthInput = document.querySelector(".fourthInput")

let liveAlertPlaceholder = document.querySelector("#liveAlertPlaceholder")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (form.checkValidity()) {
    if (alertTrigger) {
      console.log("hello")
      
        liveAlertPlaceholder.innerHTML = ""
        appendAlert('Istifadeçi uğurla yaradıldı', 'success')
        setTimeout(() => {
          location.href = "../signIn/signIn.html"
        }, 1000);
      
    }
    let user1 = {
      Ad: firstInput.value,
      Telefon: secondInput.value,
      IstifadeçiAdı: thirdInput.value,
      Şifre: fourthInput.value,
    }
    users.push(user1)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
  }
})
