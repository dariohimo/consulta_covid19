console.log("conectado")

const form = document.getElementById("myForm") //ok

//const confirmados = document.getElementById("#confirmed")

//const seleccionPais = document.querySelector("#Paises")


form.addEventListener('submit', function(e){
 
    e.preventDefault()

  var country = document.getElementById("country").value

  console.log(country)

  var url = "https://disease.sh/v3/covid-19/countries/" + country

     //cases


   covidData(url)
   
//   let creaImagenBandera = document.createElement("img");
//   creaImagenBandera.removeAttribute( 'src',  `${flag}`  )

 //let list = document.getElementById("bandera");                        ****
 //    list.removeChild(list.childNodes[0]); 

//confirmados.innerHTML = cases

});



//var url = "https://disease.sh/v3/covid-19/countries/" 

async function covidData(url){
    let response = await fetch(url)
    let dataCovid= await response.json()

    //let claves = Object.values(dataCovid);
      console.log("revisar que es >>> ", dataCovid) ;
    
    //console.log(dataCovid)

    let DivDeaths = document.querySelector("#deaths"); 
    
        DivDeaths.innerHTML =  "deaths :" + "&nbsp&nbsp&nbsp&nbsp" + dataCovid.deaths;

    let divRecovered = document.querySelector("#recovered"); 

        divRecovered.innerHTML =  "recovered :" + "&nbsp&nbsp&nbsp&nbsp" + dataCovid.recovered;

    let divCases = document.querySelector("#cases");
    
        divCases.innerHTML =  "cases :" + "&nbsp&nbsp&nbsp&nbsp" + dataCovid.cases; // + dataCovid.country + dataCovid.countryInfo.flag;
    
        ///codigo bandera copiado de la funcion bandera que no es necesaria.
        //
        let flag = dataCovid.countryInfo.flag;
        let banderaImagen =   document.getElementById("bandera") ;
        //
        banderaImagen.innerHTML = `<img src="${flag}" alt="${dataCovid.country} width="50px" height="50px" class="bandera" > `



   // let selectPaises = document.querySelector("#Paises");
    //selectPaises.innerHTML =  ´<option value="${data.cas}"> ${data.cas}</Option> `;
   
   // let paisesImg= document.querySelector(".banderaPais");

    //paisesImg.innerHTML = "bandera" + data.countryInfo.flag +  data.country;
    
    //paisesImg.createElement += <img src="data.countryInfo.flag" alt="data.country>
   // elem.setAttribute("src", "http://img.zohostatic.com/discussions/v1/images/defaultPhoto.png");
   
    //paisesImg.createElement += ("img");
    //paisesImg.setAttribute("src", "data.countryInfo.flag");

    //let bandera = document.querySelector(".bandera");

     //console.log(dataCovid.countryInfo.flag)
    /*
     let userFullnames = users.map(function(element){
        return `${element.firstName} ${element.lastName}`;
    })
    */
    
    //console.log(userFullnames);
   
/*
    dataCovid.map(function(element){
        console.log(`Map = ${element.flag} ${element.country}`)
    })
*/
    function verBandera (e) {
       
       //  let flag = dataCovid.countryInfo.flag;

        // let bandera = document.querySelector(".banderaPais");

       //bandera.innerHTML += ` <img src="${imagen}" height="50px" width="50px"> ` 
           /* `hello world ${x} times` */

           /////crear imagen con new Image
           ///
         /*  const image = new Image;  //document.createElement('img') //new Image(50, 50)    //img objeta
                 image.src  = flag
                 image.id = "img-bandera"
                 image.height = "20"
                 image.width  = "20"
          
           document.querySelector('.bandera').appendChild(image)

           */
           //down.innerHTML = "Image Element Added."; 
           //document.querySelector('.bandera').appendChild(image).innerHTML = "<br>"
             
           console.log(flag)

         //  let banderaImagen =   document.getElementById("bandera") ;
         //  let creaImagenBandera = document.createElement("img");
         //      creaImagenBandera.setAttribute( 'src',  `${flag}`);
         //      banderaImagen.appendChild(creaImagenBandera);
           
          //  banderaImagen.innerHTML = `<img src="${flag}" alt="${dataCovid.country}">`   //codigo imagen.
         
           
        }
       
  
        verBandera()
    }

     
    
    /*

     console.log("llegada datos: ", dataCovid)
    
     covidData(url + country)

  
  
     for (let index = 0; index < url.country.length; index++) {
              
        console.log("for" + dataCovid)

        
        var option = document.createElement("option")
        option.text = "Kiwi";

        console.log(element)

        let listaDesplegable = document.getElementById('#Paises')

        listaDesplegable.innerHTML += `<option value=${element} > ${element}  </option>`
        
   }

   */

    /*
    dataCovid.forEach(country => {
        console.log(country)
        listaDesplegable.innerHTML += `<option value="${country}" > ${country}  </option>`
 
    })
    */

/*
   //tilde inverdita noborrar = `date`
}

*/

//document.getElementById("current_date").innerHTML = "Update:" + Date();
/*
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
*/

//fecha = new Date(month, day, year);
//document.getElementById("current_date").innerHTML = "fecha";

//fecha = new Intl.DateTimeFormat('en-US', {month: "long"} ).format(new Date("1-1-2021"))
//document.getElementById("current_date").innerHTML = fecha;


//document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

//fecha_actual = ("Update " + meses[f.getMonth()] + " " + f.getDay() + ","  + " de " + f.getFullYear());


//fecha para html desde JS codigo realiza @dariohimo   4 Feb 2022

//fecha.getTimezoneOffset()

let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let fechaCreacion = new Date();  //"September 07, 2022 10:45:20"

   mes = meses[fechaCreacion.getMonth()]
   dia = fechaCreacion.getUTCDate();        //getDay();
   year = fechaCreacion.getFullYear();
   //tz   = fechaCreacion.getTimezoneOffset;

let fechaTotal = document.querySelector("#fecha")

    fechaTotal.innerHTML = `Update: ${mes}  ${dia}, ${year}_____>>UTC: >> ${fechaCreacion} ` ;



    /// codigo para adicionar imagenes de freecodecamp
/*
    json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });

*/




////geolocation
///
/*
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }

   

  ////

  // tamaño del mapa
	var width = 1000,
    height = 600;

// Ajustes de proyección para mercator    
var projection = d3.geo.mercator()
  // centro del mapa en grados
  .center([0, 50])
  // zoomlevel
  .scale(100)
  // map-rotation
  .rotate([0,0]);
  
// Definimos "svg" como tipo de datos
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// definimos el "path" como as return of geographic features
var path = d3.geo.path()
    .projection(projection);
  
//agrupa las capas svg
var g = svg.append ("g");
  
// Carga de datos y visualización del mapa en el canvas

d3.json("world-110m.json", function(error, topology) {
    g.selectAll("path")
        .data(topojson.object(topology, topology.objects.countries)
        .geometries)
    .enter()
        .append("path")
        .attr("d", path)
});
*/