let homesFirstAlert = document.querySelector("homesFirstAlert")
let homesBtn = document.querySelector(".firstHomesBtn")
let secondHomesBtn = document.querySelector(".secondHomesBtn")
let thirdHomesBtn = document.querySelector(".thirdHomesBtn")

thirdHomesBtn.addEventListener("click",()=>{
    location.href = "../signIn/signIn.html"
})

secondHomesBtn.addEventListener("click",()=>{
    location.href = "../komputerAlis-verisi/komputer.html"
})

homesBtn.addEventListener("click",()=>{
    location.href = "../myKomputer/myKomputer.html"
})