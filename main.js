let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
let username;
document.getElementById("asBa").onclick = function () {

  /*  let username = document.getElementById("myText").value;*/
  let username = document.getElementById("kataForEver").innerHTML = "mytext";
    console.log(username);
}
window.onscroll= () =>{
  menu.classList.remove('fa-times')
  navbar.classList.toggle('active')
}
