
window.addEventListener('load', () => {
    document.forms[0].addEventListener('submit', agregaPersona)
})




function agregaPersona(e) {
    e.preventDefault();
    var datos = obtieneDatos(e.target);
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log(JSON.parse(request.responseText));
        }
    }
    request.open('POST','http://localhost:3000/altaPersona', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(datos);
    muestraTabla();
    
}



function muestraTabla(){

    let tabla=document.getElementById("tablaDinamica");
    var tableNew;
    let request = new XMLHttpRequest();
    request.onreadystatechange=()=>{
        if(request.status==200 && request.readyState==4){
            tableNew=JSON.parse(request.responseText);
            tabla.innerHTML="";
            tabla.appendChild(crearTabla(tableNew));
            
        }
    }
    request.open('GET','http://localhost:3000/traerPersonas',true);
    request.send();
}


function obtenerRow(e){
	console.log(e.path);
	console.log(e.path[1].childNodes[0].innerText);
		//console.log(e.target.parentNode);
		// let tr=e.target.parentNode;
		// console.log(tr.childNodes);
		// for(i=0;i<tr.childNodes.length;i++){
			// console.log(tr.childNodes[i].textContent);
		// }
}

function crearTabla(array){

    let tabla = document.createElement('table');
    tabla.setAttribute("border","5px");
    let row= document.createElement('tr');
    
    for(i in array[0]){
         let celda= document.createElement('th');
         celda.textContent=i;
         row.appendChild(celda);
    }
    tabla.appendChild(row);

    for(personas in array){
        let person = array[personas];
        var row2=document.createElement('tr');
        row2.addEventListener('click',obtenerRow);
        for(atributos in person){
            let celda=document.createElement('td');
            celda.textContent=person[atributos];
            row2.appendChild(celda);
        }
        tabla.appendChild(row2);
    }
    console.log(tabla);
    return tabla;
}



function obtieneDatos(form) {
	console.log("*********");
	console.log(form.elements);
    let nombre = form.nombre.value;
    let apellido = form.apellido.value;
    let edad = form.edad.value;
    let persona = new Persona(nombre, apellido,parseInt(edad));
    return JSON.stringify(persona)
}

