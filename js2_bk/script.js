//json
console.log("scriptjs")

//
function cargarJson() {
 fetch('https://disease.sh/v3/covid-19/countries')  //historical
 .then(response => response.json())
 .then(jsonCargado);
}

//console.log(jsonCargado) 

function jsonCargado(json) {
  
    console.log("que llega array >>>" , json);
    
    let covid = "deaths"

    //llega en array
    let claves = Object.values(json);             // claves = ["nombre", "color", "macho", "edad"] 

    //let muertes = Object.entries(json); //values or entries  array multidimencional entiendo.
    //   console.log("Object.entries>>>> ", muertes);

     console.log("Pais. ", claves[0].country)

     
    claves.forEach(element => {
      console.log(element)
      let listaDesplegable = document.querySelector('#todo') 
           
      listaDesplegable.innerHTML += `<option value="${element.country}" > ${element.country}  </option>`

    });


/*

    for(let i=0; i < claves.length; i++){
         

        let clave =  claves[i].country;
        //
        let province = claves[i].province;
        
        let htmlP = document.querySelector("#authors"); 
      
      // htmlP.innerHTML  +=   ` ${clave}<br>`;  
        
     
      let listaDesplegable = document.querySelector('#todo') 
       
      
      
       listaDesplegable.innerHTML += `<option value="${clave}" > ${i} - ${clave}  </option>`

       //htmlP.innerHTML  +=   ` ${clave} <span> &nbsp&nbsp&nbsp&nbsp ${ province} </span> <br>`;       
       //htmlP.innerHTML =  clave  '<br>' clave;

       //console.log("recovered: " + clave);

  // fin for ////
} 
*/

///*            fin for de la lista paisas       */
//////////////////////////////////////////////////

let  consultaPais = document.querySelector('#todo');   //trae paises

     consultaPais.addEventListener('click', function(e){

// e.preventDefault()
console.log("e", e)

    /* ####################  
       //trae por pais
   */
  let country = document.getElementById("todo").value  // = claves[1].country
  
    claves.forEach(element => {

       //console.log("foreach", element.country, element.cases)
      
       if (element.country === country) {
         console.log("igual a", element.country)
         //
         //variables hacia el Dom 
         //
         let listaPaises = document.querySelector(".authors"); 
         let totalCases = document.querySelector(".cases"); 
         let totalDeaths = document.querySelector(".deaths"); 
         let totalRecovered = document.querySelector(".recovered"); 
         // DOM
         //
         listaPaises.innerHTML = ` Pais:  ${element.country}  `
         totalCases.innerHTML = `  Cases: ${element.cases}  `
         totalDeaths.innerHTML = ` Deaths: ${element.deaths} `
         totalRecovered.innerHTML = ` Recovered: ${element.recovered} `
        
        }

    });
 
     
  
  //
  //trae por casos, muertes, recuperados.
  //
  
  
   
 //htmlP.innerHTML  +=   ` ${clave}<br>`;  
 //htmlP.innerHTML  =   claves[10].country      ///<br>  ${claves[20].flag}

   /* //totalCases.innerHTML = ` Pais:  ${element.country}  <br>Cases: ${claves[1].cases}   ` // */

 console.log("fin", country)



});

//json.preventDefault()

//consultaPais.removeEventListener('click'), function(e){
 
//}







   


//fin de la funcion
}
////



















/*
    for(let covid in claves){
        console.log(claves[covid])
    }
*/



    
console.log(cargarJson()); 



///

/*

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author2.name.first} ${author2.name.last}`; 
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});                                          */


