function openMenu(){
    var a = document.getElementsByClassName('menu-lateral')[0];
    a.style.left = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
}

function closeMenu(){
    var a = document.getElementsByClassName('menu-lateral')[0];
    a.style.left = "-75%";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}