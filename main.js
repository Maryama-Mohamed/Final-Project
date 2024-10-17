
const menus = document.querySelector("ul");
// console.log(menus)
const header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");

const closeBtnEl = document.querySelector(".colse-btn");

menuBtn.addEventListener("click", () =>{

    // console.log("maryama close");

  menus.classList.add("display");

});

closeBtnEl.addEventListener("click", () =>{

 menus.classList.remove("display");

});

window.addEventListener("scroll", () =>{
    if(document.documentElement.scrollTop > 20){

        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})