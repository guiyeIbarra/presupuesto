// Agrega la fecha actual de manera automática
document.addEventListener("DOMContentLoaded", function() {
  let fechaElemento = document.getElementById('fecha');
  let fecha = new Date();
  fechaElemento.textContent = fecha.toLocaleDateString();
});




// Cambiar de tema y guardarlo en el navegador
function cambiarTema() {
  let selectTema = document.getElementById("temaSelect").value;
  document.body.className = selectTema; // Cambia la clase del body (moderno, oscuro o clasico)
  localStorage.setItem("temaGestoria", selectTema); // Lo guarda en la memoria
}

// Cargar el tema guardado al iniciar la página
document.addEventListener("DOMContentLoaded", function() {
  let temaGuardado = localStorage.getItem("temaGestoria") || "moderno"; // Por defecto arranca en moderno
  document.body.className = temaGuardado;
  
  let selectTema = document.getElementById("temaSelect");
  if (selectTema) {
    selectTema.value = temaGuardado;
  }
});






// Cambio de jurisdicción
let pcia = document.getElementById("jurisdiccion");
let porcentaje = document.getElementById("sellado");

pcia.addEventListener("change", function() {
  switch(this.value) {
    case "BsAs":
      porcentaje.textContent = "Sellado 3%";
      break;
  }
});

// Definimos los porcentajes de sellado para cada jurisdicción
const porcentajesSellado = {
  "BsAs": 0.03,
  "Catamarca": 0.01,
  "Chaco": 0.015,
  "Chubut": 0.02,
  "CABA": 0.03,
  "Cordoba": 0.015,
  "Corrientes": 0.01,
  "EntreRios": 0.01,
  "Formosa": 0.0075,
  "Jujuy": 0.02,
  "LaPampa": 0.01,
  "LaRioja": 0.0075,
  "Mendoza": 0.03,
  "Misiones": 0.03,
  "Neuquen": 0.014,
  "RioNegro": 0.02,
  "Salta": 0.025,
  "SanJuan": 0.03,
  "SanLuis": 0.015,
  "SantaCruz": 0.03,
  "SantaFe": 0.012,
  "SantiagoDelEstero": 0.01,
  "TierraDelFuego": 0.01,
  "Tucuman": 0.01
};

function motoAuto() {
  let arancelMoto = parseFloat(document.getElementById('valorRegistro').value) || 0;
  let selladoMoto = parseFloat(document.getElementById('valorAcara').value) || 0;
  let honoMoto = document.getElementById('h');
  
  // 1. Obtenemos la provincia seleccionada en el <select>
  let pciaSeleccionada = document.getElementById('jurisdiccion').value;

  // 2. Buscamos su porcentaje en el objeto (si no existe ninguna, toma 0.03 por defecto)
  let tasaSellado = porcentajesSellado[pciaSeleccionada] || 0.03;

  let totalMoto = arancelMoto * 0.01;
  let totalSelladoMoto = selladoMoto * tasaSellado;

  let motocicleta = document.getElementById('tipo');
  motocicleta.value = "motocicleta";
  
  sellado.value = Math.floor(totalSelladoMoto + 1000);
  
  if(totalMoto > 6000) {
    arancel.value = Math.floor(totalMoto);
    honoMoto.value = 60000;
  } else {
    arancel.value = 6000;
    honoMoto.value = 50000;
  }
}

function autoMoto() {
  let arancelAuto = parseFloat(document.getElementById('valorRegistro').value) || 0;
  let selladoAuto = parseFloat(document.getElementById('valorAcara').value) || 0;
  let honoAuto = document.getElementById('h');
  
  // 1. Obtenemos la provincia seleccionada
  let pciaSeleccionada = document.getElementById('jurisdiccion').value;

  // 2. Buscamos su porcentaje en el objeto
  let tasaSellado = porcentajesSellado[pciaSeleccionada] || 0.03;

  let totalAuto = arancelAuto * 0.01;
  let totalSelladoAuto = selladoAuto * tasaSellado;
  
  sellado.value = Math.floor(totalSelladoAuto + 1000);
  
  if(totalAuto > 13100) {
    arancel.value = Math.floor(totalAuto);
    honoAuto.value = 90000;
  } else {
    arancel.value = 13100;
    honoAuto.value = 80000;
  }
}


// Función auxiliar reutilizable para obtener todos los valores numéricos
function obtenerValoresPresupuesto() {
  return [
    parseFloat(document.getElementById("arancel").value) || 0,
    parseFloat(document.getElementById("sellado").value) || 0,
    parseFloat(document.getElementById("cedula").value) || 0,
    parseFloat(document.getElementById("titulo").value) || 0,
    parseFloat(document.getElementById("sugit").value) || 0,
    parseFloat(document.getElementById("muni").value) || 0,
    parseFloat(document.getElementById("ceroDos").value) || 0,
    parseFloat(document.getElementById("ceroCuatro").value) || 0,
    parseFloat(document.getElementById("31").value) || 0,
    parseFloat(document.getElementById("12").value) || 0,
    parseFloat(document.getElementById("08").value) || 0,
    parseFloat(document.getElementById("59").value) || 0,
    parseFloat(document.getElementById("13s").value) || 0,
    parseFloat(document.getElementById("radic").value) || 0,
    parseFloat(document.getElementById("mora").value) || 0,
    parseFloat(document.getElementById("rehab").value) || 0,
    parseFloat(document.getElementById("ddjj").value) || 0,
    parseFloat(document.getElementById("varios").value) || 0,
    parseFloat(document.getElementById("h").value) || 0,
    parseFloat(document.getElementById("hColega").value) || 0,
    parseFloat(document.getElementById("envio").value) || 0,
    parseFloat(document.getElementById("legalizacion").value) || 0
  ];
}

// Sumar total
function sumar() {
  let presup = obtenerValoresPresupuesto();
  let suma = presup.reduce((a, b) => a + b, 0);
  document.getElementById("total").value = suma;
}

// Tomar los datos y generar PDF usando jsPDF v2.5.1
function genPDF() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();
   
  let cliente = document.getElementById("cliente").value.toUpperCase() || "CLIENTE";
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
   
  let fechaPDF = new Date().toLocaleDateString();

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
  doc.line(0, 90, 90, 90);

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

  doc.text(`OBSERVACIONES: `, 10, 175);
  doc.setTextColor(230, 0, 0);
  doc.text(`${observaciones}`, 10, 185);
  doc.setTextColor(0, 0, 0);
  doc.line(0, 220, 90, 220);

  // Obtener valores e importe total para la columna derecha del PDF
  let presup = obtenerValoresPresupuesto();
  let TOTAL = presup.reduce((a, b) => a + b, 0);

  doc.text(`Arancel: `, 120, 55); doc.text(`${presup[0]}`, 190, 55, null, null, "right");
  doc.text(`Sellado: `, 120, 65); doc.text(`${presup[1]}`, 190, 65, null, null, "right");
  doc.text(`Cedula: `, 120, 75); doc.text(`${presup[2]}`, 190, 75, null, null, "right");
  doc.text(`Título: `, 120, 85); doc.text(`${presup[3]}`, 190, 85, null, null, "right");
  doc.text(`SUGIT: `, 120, 95); doc.text(`${presup[4]}`, 190, 95, null, null, "right");
  doc.text(`Municipio: `, 120, 105); doc.text(`${presup[5]}`, 190, 105, null, null, "right");
  doc.text(`02: `, 120, 115); doc.text(`${presup[6]}`, 190, 115, null, null, "right");
  doc.text(`04: `, 120, 125); doc.text(`${presup[7]}`, 190, 125, null, null, "right");
  doc.text(`31: `, 120, 135); doc.text(`${presup[8]}`, 190, 135, null, null, "right");
  doc.text(`12: `, 120, 145); doc.text(`${presup[9]}`, 190, 145, null, null, "right");
  doc.text(`08: `, 120, 155); doc.text(`${presup[10]}`, 190, 155, null, null, "right");
  doc.text(`59: `, 120, 165); doc.text(`${presup[11]}`, 190, 165, null, null, "right");
  doc.text(`13x2: `, 120, 175); doc.text(`${presup[12]}`, 190, 175, null, null, "right");
  doc.text(`Radicación: `, 120, 185); doc.text(`${presup[13]}`, 190, 185, null, null, "right");
  doc.text(`Mora 08: `, 120, 195); doc.text(`${presup[14]}`, 190, 195, null, null, "right");
  doc.text(`Rehabilitación: `, 120, 205); doc.text(`${presup[15]}`, 190, 205, null, null, "right");
  doc.text(`DDJJ: `, 120, 215); doc.text(`${presup[16]}`, 190, 215, null, null, "right");
  doc.text(`Varios: `, 120, 225); doc.text(`${presup[17]}`, 190, 225, null, null, "right");
  doc.text(`Honorarios: `, 120, 235); doc.text(`${presup[18]}`, 190, 235, null, null, "right");
  doc.text(`Honorarios Colega: `, 120, 245); doc.text(`${presup[19]}`, 190, 245, null, null, "right");
  doc.text(`Envio: `, 120, 255); doc.text(`${presup[20]}`, 190, 255, null, null, "right");
  doc.text(`Legalizacion: `, 120, 265); doc.text(`${presup[21]}`, 190, 265, null, null, "right");
  
  doc.text(`TOTAL: `, 120, 275); 
  doc.setTextColor(255, 0, 0); 
  doc.setFontSize(14); 
  doc.text(`$ ${TOTAL}`, 190, 275, null, null, "right");

  doc.save(`${cliente} - ${dominio}.pdf`);
}