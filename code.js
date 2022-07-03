function abrirMenu() {
    let menu = document.querySelector(".nav");
    if (menu.style.display === "none" ){
        menu.style.display = "block";
    }
    else {
     menu.style.display = "none";
    }
 }