var darklight = document.getElementById ("darklight");
darklight.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darklight.src = "Imagenes/Moon.png";
    } else{
        darklight.src = "Imagenes/Sun.png";
    }
  }