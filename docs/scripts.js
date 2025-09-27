 
// Agrega la fecha actual de manera automática

document.addEventListener("DOMContentLoaded", function() {
  let fechaElemento = document.getElementById('fecha');
  let fecha = new Date();
  fechaElemento.textContent = fecha.toLocaleDateString();
});

let obs = document.getElementsByClassName('obs');


function motoAuto() {

  let ced = document.getElementById('cedula');
  let tit = document.getElementById('titulo');
  let sug = document.getElementById('sugit');
  let arancelMoto = document.getElementById('valorRegistro').value;
  let selladoMoto = document.getElementById('valorAcara').value;

  totalMoto = arancelMoto * 0.01;
  totalSelladoMoto = selladoMoto * 0.03;
  //arancel.value = totalMoto; 
  sellado.value = Math.floor(totalSelladoMoto + 1900);
  if(totalMoto > 6000) {
    arancel.value = Math.floor(totalMoto);
  } else {
    arancel.value = 6000;
  }

  
   // ced.value = 2040;
   // tit.value = 1850; 
    //sug.value = 505;
};

function autoMoto() {

  let ced = document.getElementById('cedula');
  let tit = document.getElementById('titulo');
  let sug = document.getElementById('sugit');
  let arancelAuto = document.getElementById('valorRegistro').value;
  let selladoAuto = document.getElementById('valorAcara').value;

  totalAuto = arancelAuto * 0.01;
  totalSelladoAuto = selladoAuto * 0.03;
  //arancel.value = totalAuto; 
  sellado.value = Math.floor(totalSelladoAuto + 1900);
  if(totalAuto > 13100) {
    arancel.value = Math.floor(totalAuto);
  } else {
    arancel.value = 13100;
  }
   
   // ced.value = 5290;
   // tit.value = 2580;
   //sug.value = 650;
};


function sumar() {

let presup = [
  arancel = parseFloat(document.getElementById("arancel").value),
  sellado = parseFloat(document.getElementById("sellado").value),
  cedula = parseFloat(document.getElementById("cedula").value),
  titulo = parseFloat(document.getElementById("titulo").value),
  sugit = parseFloat(document.getElementById("sugit").value),
  municipio = parseFloat(document.getElementById("muni").value),
  ceroDos = parseFloat(document.getElementById("ceroDos").value),
  ceroCuatro = parseFloat(document.getElementById("ceroCuatro").value),
  tresUno = parseFloat(document.getElementById("31").value),
  doce = parseFloat(document.getElementById("12").value),
  ceroOcho = parseFloat(document.getElementById("08").value),
  cincoNueve = parseFloat(document.getElementById("59").value),
  treces = parseFloat(document.getElementById("13s").value),
  radic = parseFloat(document.getElementById("radic").value),
  mora = parseFloat(document.getElementById("mora").value),
  rehab = parseFloat(document.getElementById("rehab").value),
  ddjj = parseFloat(document.getElementById("ddjj").value),
  varios = parseFloat(document.getElementById("varios").value),
  honorarios = parseFloat(document.getElementById("h").value),
  honorariosColega = parseFloat(document.getElementById("hColega").value),
  envio = parseFloat(document.getElementById("envio").value),
  legalizacion = parseFloat(document.getElementById("legalizacion").value),
  ];

  //utilizamos el método 'reduce' para recorrer el array y sumar sus elementos
  let suma = presup.reduce((a, b) => a + b, 0);

  document.getElementById("total").value = suma;
  
}



//tomar los datos y generar un pdf

function genPDF() {


  let doc = new jsPDF();
   
   let cliente = document.getElementById("cliente").value.toUpperCase();
   let telefono = document.getElementById('telefono').value;
   let dominio = document.getElementById('dominio').value.toUpperCase();
   let marca = document.getElementById('marca').value.toUpperCase();
   let modelo = document.getElementById('modelo').value.toUpperCase();
   let año = document.getElementById('año').value;
   let tipo = document.getElementById('tipo').value.toUpperCase();
   let valorAcara = document.getElementById('valorAcara').value.toUpperCase();
   let valorRegistro = document.getElementById('valorRegistro').value;
   let registro = document.getElementById('registro').value.toUpperCase();
   let observaciones = document.getElementById('observaciones').value;
   
   let FECHA = new Date();
   let fechaPDF = FECHA.toLocaleDateString();

   doc.setFontSize(13);
   doc.setFont("helvetica", "normal");

   doc.setFontSize(22);
   doc.text(`PRESUPUESTO`, 60, 15); 
   doc.line(0, 47, 220, 47);

   doc.setFontSize(11);
   doc.text(`Fecha: ${fechaPDF}`, 150, 15);
   doc.text(`GESTORIA Guille Ibarra`, 70, 25);

   doc.text(`Nombre: ${cliente}`, 10, 55);
     doc.line(0, 70, 90, 70);

   doc.text(`Telefono: ${telefono}`, 10, 75);
     doc.line(0, 80, 90, 80);

   doc.text(`Dominio: ${dominio}`, 10, 85);
     doc.line(0, 90, 90, 90)

   doc.text(`Marca: ${marca}`, 10, 95);
     doc.line(0, 100, 90, 100);

   doc.text(`Modelo: ${modelo}`, 10, 105);
     doc.line(0, 120, 90, 120);

   doc.text(`Año: ${año}`, 10, 125);
     doc.line(0, 130, 90, 130);

   doc.text(`Tipo: ${tipo}`, 10, 135);
    doc.line(0, 140, 90, 140);
       
   doc.text(`Valor ACARA: ${valorAcara}`, 10, 145);
    doc.line(0, 150, 90, 150);

   doc.text(`Valor Registro: ${valorRegistro}`, 10, 155);
    doc.line(0, 160, 90, 160);
     
   doc.text(`Registro: ${registro}`, 10, 165);
    doc.line(0, 170, 90, 170);

   doc.text(`OBSERVACIONES: `, 10, 175), doc.setTextColor(230, 0, 0), doc.text(`${observaciones}`, 10, 185);
    doc.line(0, 220, 90, 220);
    

   doc.setTextColor(0, 0, 0);

   //agregar página
     // doc.addPage();
  
  

  let presup = [
    arancel = parseFloat(document.getElementById("arancel").value),
    sellado = parseFloat(document.getElementById("sellado").value),
    cedula = parseFloat(document.getElementById("cedula").value),
    titulo = parseFloat(document.getElementById("titulo").value),
    sugit = parseFloat(document.getElementById("sugit").value),
    municipio = parseFloat(document.getElementById("muni").value),
    ceroDos = parseFloat(document.getElementById("ceroDos").value),
    ceroCuatro = parseFloat(document.getElementById("ceroCuatro").value),
    tresUno = parseFloat(document.getElementById("31").value),
    doce = parseFloat(document.getElementById("12").value),
    ceroOcho = parseFloat(document.getElementById("08").value),
    cincoNueve = parseFloat(document.getElementById("59").value),
    treces = parseFloat(document.getElementById("13s").value),
    radic = parseFloat(document.getElementById("radic").value),
    mora = parseFloat(document.getElementById("mora").value),
    rehab = parseFloat(document.getElementById("rehab").value),
    ddjj = parseFloat(document.getElementById("ddjj").value),
    varios = parseFloat(document.getElementById("varios").value),
    honorarios = parseFloat(document.getElementById("h").value),
    honorariosColega = parseFloat(document.getElementById("hColega").value),
    envio = parseFloat(document.getElementById("envio").value),
    legalizacion = parseFloat(document.getElementById("legalizacion").value),
]
 


let suma = presup.reduce((a, b) => a + b, 0);

let TOTAL = suma;



    doc.text(`Arancel: `, 120, 55), doc.text(`${arancel}`, 170, 55);
    

    doc.text(`Sellado: `, 120, 65), doc.text(`${sellado}`, 170, 65);
    doc.text(`Cedula: `, 120, 75), doc.text(`${cedula}`, 170, 75);
    doc.text(`Título: `, 120, 85), doc.text(`${titulo}`, 170, 85);
    doc.text(`SUGIT: `, 120, 95), doc.text(`${sugit}`, 170, 95);
    doc.text(`Municipio: `, 120, 105), doc.text(`${municipio}`, 170, 105);
    doc.text(`02: `, 120, 115), doc.text(`${ceroDos}`, 170, 115);
    doc.text(`04: `, 120, 125), doc.text(`${ceroCuatro}`, 170, 125);
    doc.text(`31: `, 120, 135), doc.text(`${tresUno}`, 170, 135);
    doc.text(`12: `, 120, 145), doc.text(`${doce}`, 170, 145);
    doc.text(`08: `, 120, 155), doc.text(`${ceroOcho}`, 170, 155);
    doc.text(`59: `, 120, 165), doc.text(`${cincoNueve}`, 170, 165);
    doc.text(`13x2: `, 120, 175), doc.text(`${treces}`, 170, 175);
    doc.text(`Radicación: `, 120, 185), doc.text(`${radic}`, 170, 185);
    doc.text(`Mora 08: `, 120, 195), doc.text(`${mora}`, 170, 195);
    doc.text(`Rehabilitación: `, 120, 205), doc.text(`${rehab}`, 170, 205);
    doc.text(`DDJJ: `, 120, 215), doc.text(`${ddjj}`, 170, 215);
    doc.text(`Varios: `, 120, 225), doc.text(`${varios}`, 170, 225);
    doc.text(`Honorarios: `, 120, 235), doc.text(`${honorarios}`, 170, 235);
    doc.text(`Honorarios Colega: `, 120, 245), doc.text(`${honorariosColega}`, 170, 245);
    doc.text(`Envio: `, 120, 255), doc.text(`${envio}`, 170, 255);
    doc.text(`Legalizacion: `, 120, 265), doc.text(`${legalizacion}`, 170, 265);
    doc.text(`TOTAL: `, 120, 275), doc.setTextColor(255, 0, 0), doc.setFontSize(14), doc.text(`$ ${TOTAL}`, 170, 275);

  //manejo de tablas
  //doc.autoTable({html: ".table"});
  

   doc.save(`${cliente}.pdf`)



   
};

  

