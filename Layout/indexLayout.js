const contDinamic = document.querySelector("#cont-dinamic")
const btnHome = document.querySelector("#btn-home")
const btnWhatzapp = document.querySelector("#btn-whatzapp")
const btnZpotify = document.querySelector("#btn-zpotify")

btnHome.addEventListener('click', Home)
function Home(){   
    contDinamic.setAttribute('src','../Home/indexHome.html');
    name.innerHTML ="btn-home"
}

btnWhatzapp.addEventListener('click', whatzapp)
function whatzapp(){   
    contDinamic.setAttribute('src','../Whatzapp/indexWzp.html');
    name.innerHTML ="btn-whatzapp"
}

btnZpotify.addEventListener('click', zpotify)
function zpotify(){   
    contDinamic.setAttribute('src','../Zpotify/indexZpotify.html');
    name.innerHTML ="btn-zpotify"
}