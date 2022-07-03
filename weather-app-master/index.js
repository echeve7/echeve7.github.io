let temperatura = document.querySelector(".temperatura");
let clima = document.querySelector(".clima");
let fecha = document.querySelector(".dia-actual");
let ubicacion = document.querySelector(".ubicacion");

let velocidad = document.querySelector(".veloci");

let porcentaje = document.querySelector(".porcen");
let progress = document.querySelector(".progress-bar");

let miles = document.querySelector(".miles");

let mb = document.querySelector(".mb");

const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function mostrarBusqueda() {
    document.querySelector(".container-hide").style.display = "flex";
    document.querySelector(".container-aside").style.display = "none";
}

function cerrarBusqueda() {
    document.querySelector(".container-hide").style.display = "none";
    document.querySelector(".container-aside").style.display = "flex";
}

let searchForm = document.querySelector(".search_submit");

searchForm.addEventListener("submit", e =>{
    e.preventDefault();
    
})




function buscarCiudad() {
   var city = document.querySelector(".input-buscar").value;

   if(city != "") {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&&appid=8dc6c32a031b53e8a407ff059261afb9`)
            .then(response => response.json() )
            .then(data => {
                console.log(data)
                temperatura.innerHTML = Math.trunc(data.list[0].main.temp) + "°c";
                clima.innerHTML = data.list[0].weather[0].description;
                document.querySelector(".img-shower").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon+".png";
                // fecha.innerHTML = data.
                ubicacion.innerHTML = data.city.name + " " + data.city.country;
                velocidad.innerHTML = data.list[0].wind.speed + "mph";
                porcentaje.innerHTML = data.list[0].main.humidity;
                progress.value = data.list[0].main.humidity;
                mb.innerHTML = data.list[0].main.pressure;
                miles.innerHTML = data.list[0].visibility;
                let fecha = new Date();
                document.querySelector(".dia-actual").innerHTML = dias[fecha.getDay()] + ", " + fecha.getDate() + " " + meses[fecha.getMonth()]; 
                

                for(var i = 0; i < 5; i++) {

                    document.querySelector(".img-" + (i+1)).src = "http://openweathermap.org/img/wn/" + data.list[i+1].weather[0].icon+".png";

                    document.querySelector(".max-" + (i+1)).innerHTML = Math.trunc(data.list[i+1].main.temp_max) + " C";

                    document.querySelector(".min-" + (i+1)).innerHTML = Math.trunc(data.list[i+1].main.temp_min) + " C";
                    

                }
                
                
                

                function checkDay (day) {

                    console.log(day + "-" + fecha.getDay())

                    if(day + fecha.getDay() > 6){
                        return day + fecha.getDay() -7;
                    }
                    else {
                        return day + fecha.getDay();
                    }
                }

                for(i=0;1<4;i++){
                    document.querySelector(".day-" + (i+1)).innerHTML = dias[checkDay(i+2)];
                }


            })
            .catch(err => console.log(err))

        document.querySelector(".container-hide").style.display = "none";
        document.querySelector(".container-aside").style.display = "flex";        
   } else {
       alert("Debes escribir la ciudad antes de presionar el boton de 'Buscar' ")
   } 

}


