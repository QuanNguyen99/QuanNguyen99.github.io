let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".menu");
let btnClose = document.querySelector(".btn-cl")

btnMenu.addEventListener("click", function () {
    menu.classList.toggle("show")
})
btnClose.addEventListener("click", function () {
    menu.classList.toggle("show")
})


let btnCl = document.querySelector(".btn-cl2");
let btnUser = document.querySelector(".btn-user")
let user = document.querySelector(".user");

btnUser.addEventListener("click", function () {
    user.classList.toggle("show-user");
})
btnCl.addEventListener("click", function () {
    user.classList.toggle("show-user");
})


