let li = document.querySelector("li")
let komputers2 = JSON.parse(localStorage.getItem("komputers2"))
let acer = document.querySelector(".acer")
let hP = document.querySelector(".hP")
let asus = document.querySelector(".asus")
let dell = document.querySelector(".dell")
let lenovo = document.querySelector(".lenovo")
let lG = document.querySelector(".lG")
let casper = document.querySelector(".casper")
let fujitsu = document.querySelector(".fujitsu")
let nexus = document.querySelector(".nexus")
let samsung = document.querySelector(".samsung")
let toshiba = document.querySelector(".toshiba")
let sony = document.querySelector(".sony")
let Ad = document.querySelector("#Ad")
let tesvir = document.querySelector("#tesvir")
let Qiymet = document.querySelector("#Qiymet")
let Yeni = document.querySelector("#Yeni")
let Telefon = document.querySelector("#Telefon")
let btn1 = document.querySelector(".btn1")
let komputerParent = document.querySelector(".komputerParent")
let komputers = JSON.parse(localStorage.getItem("komputers"))


function komputerInfo(komputers3id) {
  let komp = komplarim.find(function (item) {
    return item.id == komputers3id
  })
  parent1.innerHTML = `<div class="card parent1" style="width: 18rem;">
    <img src="./product_image_556946639933_0.webp" class="card-img-top" alt="...">
    <div class="card-body">
      <label for="Ad" class="card-text">${komp.Ad}</label>
      <br>
      <label for="tesvir">${komp.tesvir}</label>
      <br>
      <label for="Qiymet">${komp.Qiymet}</label>
      <br>
      <label for="Yeni">${komp.Yeni}</label>
      <br>
      <label for="Telefon">${komp.Telefon}</label>
      <br>
      <button class="btn btn-primary text-light btn1">Ətraflı</button>
    </div>
  </div>`
}


li.addEventListener("click", (e) => {
  li.classList.toggle("active1")
})

komputers.forEach(komp => {
  let element = `<div class="card product" id="acer-div sony-div toshiba-div nexus-div nexus-div fujitsu-div casper-div lG-div lenovo-div dell-div asus-div hP-div   parent1" style="width: 18rem;">
  <img src="${komp.Şekil}" class="card-img-top" alt="...">
  <div class="card-body">
    <label for="Ad" class="card-text">${komp.Ad}</label>
    <br>
    <label for="tesvir">${komp.tesvir}</label>
    <br>
    <label for="Qiymet">${komp.Qiymet}</label>
    <br>
    <label for="Yeni">${komp.Yeni}</label>
    <br>
    <label for="Telefon">${komp.kataqoriya}</label>
    <br>
    <button class="btn btn-primary  data-bs-toggle="modal" data-bs-target="#exampleModal" text-light btn1">Ətraflı</button>
  </div>
</div>`
komputerParent.innerHTML += element
});

document.getElementById('search').addEventListener('input', function() {
  var searchValue = this.value.toLowerCase();
  
  // Divleri gizle
  document.getElementById('acer-div').style.display = 'none';
  document.getElementById('asus-div').style.display = 'none';
  document.getElementById('hP-div').style.display = 'none';
  document.getElementById('dell-div').style.display = 'none';
  document.getElementById('lenovo-div').style.display = 'none';
  document.getElementById('lG-div').style.display = 'none';
  document.getElementById('casper-div').style.display = 'none';
  document.getElementById('fujitsu-div').style.display = 'none';
  document.getElementById('nexus-div').style.display = 'none';
  document.getElementById('samsung-div').style.display = 'none';
  document.getElementById('toshiba-div').style.display = 'none';
  document.getElementById('sony-div').style.display = 'none';
  
  // Arama değerine göre div göster
  if (searchValue === 'acer') {
    document.getElementById('acer-div').style.display = 'block';
  } else if (searchValue === 'asus') {
    document.getElementById('asus-div').style.display = 'block';
  }
});

let sehife1 = document.querySelector(".sehife1")

sehife1.addEventListener("click",()=>{
  location.href = "../myKomputer/myKomputer.html"
})