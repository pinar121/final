const carousel = new bootstrap.Carousel(".carousel")

let homesFirstBtn = document.querySelector(".homesFirstBtn")

homesFirstBtn.addEventListener("click",()=>{
    setTimeout(() => {
        location.href = "../signIn/signIn.html"
    }, 1000);
})
