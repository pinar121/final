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
})()
let table = new DataTable('#myTable');
let myBtn = document.querySelector(".myBtn")
let myBtn2 = document.querySelector(".myBtn2")

myBtn.addEventListener("click", () => {
    location.href = "../home2/home2.html"
})

let users = JSON.parse(localStorage.getItem("users")) || []
let user = JSON.parse(localStorage.getItem("user"))
let komputers = JSON.parse(localStorage.getItem("komputers")) || []
let modal1 = new bootstrap.Modal(document.querySelector(".modal1"))
let form = document.querySelector("form")
let kataqoriya = document.querySelector("#kataqoriya")
let Ad = document.querySelector("#Ad")
let Qiymet = document.querySelector("#Qiymet")
let tesvir = document.querySelector("#tesvir")
let Yeni = document.querySelector("#Yeni")
let Şekil = document.querySelector("#Şekil")
let əməliYaddaş = document.querySelector("#əməliYaddaş")
let MərkəziProsessor = document.querySelector("#MərkəziProsessor")
let daimYaddaş = document.querySelector("#daimYaddaş")
let daimYaddaşTibbi = document.querySelector("#daimYaddaşTibbi")
let ƏməliyyatSistemi = document.querySelector("#ƏməliyyatSistemi")
function generateId() {
    return komputers.length ? komputers[komputers.length - 1].id + 1 : 1
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (form.checkValidity()) {
        let komputer = {
            id: generateId(),
            kataqoriya: kataqoriya.value,
            Ad: Ad.value,
            Qiymet: Qiymet.value,
            tesvir: tesvir.value,
            Yeni: Yeni.value,
            Şekil: Şekil.value,
            əməliYaddaş: əməliYaddaş.value,
            MərkəziProsessor: MərkəziProsessor.value,
            daimYaddaş: daimYaddaş.value,
            daimYaddaşTibbi: daimYaddaşTibbi.value,
            ƏməliyyatSistemi: ƏməliyyatSistemi.value,
            videoKart: videoKart.value,
            sahib: user.IstifadeçiAdı,
        }
        komputers.push(komputer)
        localStorage.setItem("komputers", JSON.stringify(komputers))
        location.reload()
    }
})


myBtn2.addEventListener("click", (e) => {
    modal1.show()
})

function Displaykomputer() {
    let filteredkomputerler = komputers.filter(function (komputer) {
        return komputer.sahib == user.IstifadeçiAdı;
    });
    filteredkomputerler.forEach(function (komputer) {
        if (komputer.id && komputer.Ad && komputer.Şekil && komputer.Qiymet) {
            table.row.add([
                komputer.id,
                komputer.Ad,
                komputer.Qiymet,
                `<img src="${komputer.Şekil}" class="komputerinşəkli" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;object-fit: cover; height: 100px; width: 100px;">`,
                `<div id="actionDiv">
                <button onclick="removekomputer(${komputer.id})" class="btn btn-danger">Sil</button><button onclick="editkomputer(${komputer.id})" style="margin-left:10px" class="btn btn-info">Redaktə</button>
                </div>`
            ]).draw();
        }
    })
}
Displaykomputer() ;

function removekomputer(komputersId){
    let filterKomputers = komputers.filter(function(item){
        return item.id != komputersId
    })
    localStorage.setItem("komputers",JSON.stringify(filterKomputers))
    location.reload()
}
