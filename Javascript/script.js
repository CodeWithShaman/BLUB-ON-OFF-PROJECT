let imageBd = document.getElementById("img1");
let imgDb = document.getElementById("img2");
let btnClick = document.getElementById("btn2"); 
let btnHide = document.getElementById("btn3");
let container = document.getElementsByClassName("container");
// container.style.display = 'none' 

function on() {
  imageBd.setAttribute("src", "Images/w-blub.png");
  imageBd.style.width = "300px";
  imageBd.style.height = "320px";
  imageBd.style.display = "block";
  imgDb.style.display = "none";
  btnClick.style.display = "none"
  btnHide.style.display = "block"


}
function off() {
    imgDb.setAttribute(
    "src", "Images/blub.png");
  imgDb.style.width = "340px";
  imgDb.style.height = "290px";
  imageBd.style.display = "none";
  imgDb.style.display = "block";
  btnHide.style.display = "none"
  btnClick.style.display = "block"
}
