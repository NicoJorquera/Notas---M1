var nombre=prompt("Ingrese su nombre");
var carrera=prompt("Ingrese nombre de la carrera");

// Construcción encabezado de Tabla
document.write('<h1>Notas finales</h1>');
document.write('<table class="table table-borderless">');
document.write('<tbody>');
document.write('<tr>');
document.write('<th scope="row">Nombre: </th>');
document.write('<td>'+nombre+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<th scope="row">Carrera: </th>');
document.write('<td>'+carrera+'</td>');
document.write('</tr>');
document.write('</tbody>');
document.write('</table>');

document.write('<table class="table">');
document.write('<thead class="thead-dark">');
document.write('<tr>');
document.write('<th scope="col">Ramo</th>');
document.write('<th scope="col">Nota 1</th>');
document.write('<th scope="col">Nota 2</th>');
document.write('<th scope="col">Nota 3</th>');
document.write('<th scope="col">Promedio</th>');
document.write('</tr>');
document.write('</thead>');

// Ingreso datos y cálculo promedio ramo 1
var ramo=prompt("Ingrese ramo", "HTML");
var nota1=prompt("Ingrese nota 1 ["+ramo+"]");
var nota2=prompt("Ingrese nota 2 ["+ramo+"]");
var nota3=prompt("Ingrese nota 3 ["+ramo+"]");
nota1=parseFloat(nota1);
nota2=parseFloat(nota2);
nota3=parseFloat(nota3);
var prom1=(nota1+nota2+nota3)/3;

// Construcción tabla y visualización de primeros datos
document.write('<tbody>');
document.write('<tr>');
document.write('<td scope="col">'+ramo+'</td>');
document.write('<td scope="col">'+nota1+'</td>');
document.write('<td scope="col">'+nota2+'</td>');
document.write('<td scope="col">'+nota3+'</td>');
document.write('<td scope="col">'+prom1.toFixed(2)+'</td>');
document.write('</tr>');

// Ingreso datos y cálculo promedio ramo 2
var ramo=prompt("Ingrese ramo", "CSS");
var nota1=prompt("Ingrese nota 1 ["+ramo+"]");
var nota2=prompt("Ingrese nota 2 ["+ramo+"]");
var nota3=prompt("Ingrese nota 3 ["+ramo+"]");
nota1=parseFloat(nota1);
nota2=parseFloat(nota2);
nota3=parseFloat(nota3);
var prom2=(nota1+nota2+nota3)/3;

// Construcción tabla y visualización de segundos datos
document.write('<tr>');
document.write('<td scope="col">'+ramo+'</td>');
document.write('<td scope="col">'+nota1+'</td>');
document.write('<td scope="col">'+nota2+'</td>');
document.write('<td scope="col">'+nota3+'</td>');
document.write('<td scope="col">'+prom2.toFixed(2)+'</td>');
document.write('</tr>');

// Ingreso datos y cálculo promedio ramo 3
var ramo=prompt("Ingrese ramo", "JavaScript");
var nota1=prompt("Ingrese nota 1 ["+ramo+"]");
var nota2=prompt("Ingrese nota 2 ["+ramo+"]");
nota1=parseFloat(nota1);
nota2=parseFloat(nota2);
var prom3=(nota1+nota2)/2;

// Construcción tabla y visualización de segundos datos
document.write('<tr>');
document.write('<td scope="col">'+ramo+'</td>');
document.write('<td scope="col">'+nota1+'</td>');
document.write('<td scope="col">'+nota2+'</td>');
document.write('<td scope="col"> - </td>');
document.write('<td scope="col"> - </td>');
document.write('</tr>');
document.write('</tbody>');
document.write('</table>');
// Fin tabla

// Cálculo nota3 mínima para aprobar
var nota1=parseFloat(nota1);
var nota2=parseFloat(nota2);
var nota3_min = 12-nota1-nota2;
if(nota3_min<1){
    nota3_min=1;
}

document.write('<footer>');
document.write('<p>Para aprobar el ramo '+ramo+' con nota 4, necesitas obtener un '+nota3_min.toFixed(2)+' en la nota 3.</p>');
document.write('</footer>');





// Ingreso datos y cáculo promedio ramo 2
// var ramo=prompt("Ingrese ramo", "HTML, CSS, JavaScript");
// var nota1=prompt("Ingrese primera nota");
// var nota2=prompt("Ingrese segunda nota");
// var nota3=prompt("Ingrese tercera nota");
// var prom2=(nota1+nota2+nota3)/3;
// Cálculo promedio 3 mínimo para aprobar
// var prom3_min=12-prom1-prom2;
// Ingreso datos y cálculo promedio ramo 3
// var ramo=prompt("Ingrese ramo", "HTML, CSS, JavaScript");
// var nota1=prompt("Ingrese primera nota");
// var nota2=prompt("Ingrese segunda nota");
// var nota3=null;
// var prom3=null;


