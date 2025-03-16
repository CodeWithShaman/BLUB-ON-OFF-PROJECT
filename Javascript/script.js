let imageBd = document.getElementById("img1");
let imgDb = document.getElementById("img2");
let btnClick = document.getElementById("btn2");

function toggleBulb() {
    if (btnClick.innerText === "ON") {
        btnClick.innerText = "OFF";
        imageBd.setAttribute("src", "Images/w-blub.png");
        imageBd.style.width = "300px";
        imageBd.style.height = "320px";
        imageBd.style.display = "block";
        imgDb.style.display = "none";
        btnClick.style.backgroundColor = 'red'
        btnClick.style.color = 'white'

    } else {
        btnClick.innerText = "ON"; // Change button text
        imgDb.setAttribute("src", "Images/blub.png");
        imgDb.style.width = "340px";
        imgDb.style.height = "290px";
        imageBd.style.display = "none";
        imgDb.style.display = "block";
        btnClick.style.backgroundColor = 'green'
        btnClick.style.color = 'white'
    }
}
