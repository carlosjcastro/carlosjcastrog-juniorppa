var darklight = document.getElementById ("darklight");

darklight.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        darklight.src = "Imagenes/Sun.png";
    } else{
        darklight.src = "Imagenes/Moon.png";
    }
}