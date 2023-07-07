/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calcularCURP() {
    var ps = calcularPS();
    var fecha = armarFN();
    var gen = ObtenerGen();
    var edo = obtenerEdo();
    var cn = consonantes();
    var hc = obtenerHC();



    var curp = ps + fecha + gen + edo+ cn + hc;

    document.getElementById("txtCurp").value = curp;
}


function armarFN() {
    var fn = document.getElementById("dateFechaN").value;

    var fnArr = fn.split("");
    fecha = "";

    fecha += fnArr[2];
    fecha += fnArr[3];
    fecha += fnArr[5];
    fecha += fnArr[6];
    fecha += fnArr[8];
    fecha += fnArr[9];
//    alert(fecha);

    return fecha;

}


function  obtenerEdo() {
    var edo = document.getElementById("lstEstado").value;
//    alert(edo);
    return edo;

}

function ObtenerGen() {
    var genero = "";

    var gen1 = document.getElementById("rbtSexo1").checked;

    var gen2 = document.getElementById("rbtSexo2").checked;

    if (gen1) {
        genero = "M";
    } else if (gen2) {
        genero = "H";
    }

//    alert(genero);
    return genero;
}

function obtenerHC() {
    //2021-06-23
    var fn = document.getElementById("dateFechaN").value;



    var fnArr = fn.split("");
    var fecha = "";
    var hc = "";
    fecha += fnArr[0];
    fecha += fnArr[1];
    fecha += fnArr[2];
    fecha += fnArr[3];
    var anio = parseInt(fecha);
    if (anio < 2000) {
        hc += Math.round((Math.random() * 10));
        hc += Math.round((Math.random() * 10));

    } else
    {
        hc += "A";
        hc += Math.round((Math.random() * 10));
    }

//    alert(hc);

    return hc;


}

function calcularPS() {
    var ApP = document.getElementById("txtApP").value;
    var Apm = document.getElementById("txtApm").value;
    var nom = document.getElementById("txtNombre").value;
    ApP = ApP.toUpperCase();
    Apm = Apm.toUpperCase();
    nom = nom.toUpperCase();
    txtNombre = nom.toUpperCase();

    var primerS = "";

    primerS += ApP.charAt(0);

    for (var i = 1; i < ApP.length; i++) {
        if (ApP.charAt(i) == "A" || ApP.charAt(i) == "E" || ApP.charAt(i) == "I" || ApP.charAt(i) == "O" || ApP.charAt(i) == "U") {
            primerS += ApP.charAt(i);
            break;
        }
    }
    primerS += Apm.charAt(0);



    var nombres = nom.split;
    if (nom[0] == "MARIA" || nom[0] == "JOSE") {
        primerS += nom[1].charAt(0);
    } else {
        primerS += nom[0].charAt(0);
    }

   // alert(primerS);
    return(primerS);




}

function consonantes() {
    var nombre = document.getElementById("txtNombre").value.toUpperCase();
    var ApPaterno = document.getElementById("txtApP").value.toUpperCase();
    var ApMaterno = document.getElementById("txtApm").value.toUpperCase();
    var primeraConsonanteNombre = "";
    var primeraConsonanteApPaterno = "";
    var primeraConsonanteApMaterno = "";

    for (var i = 1; i < nombre.length; i++) {
        if (
                nombre.charAt(i) !== "A" &&
                nombre.charAt(i) !== "E" &&
                nombre.charAt(i) !== "I" &&
                nombre.charAt(i) !== "O" &&
                nombre.charAt(i) !== "U"
                ) {
            primeraConsonanteNombre = nombre.charAt(i);
            break;
        }
    }

    for (var j = 1; j < ApPaterno.length; j++) {
        if (
                ApPaterno.charAt(j) !== "A" &&
                ApPaterno.charAt(j) !== "E" &&
                ApPaterno.charAt(j) !== "I" &&
                ApPaterno.charAt(j) !== "O" &&
                ApPaterno.charAt(j) !== "U"
                ) {
            primeraConsonanteApPaterno = ApPaterno.charAt(j);
            break;
        }
    }

    for (var k = 1; k < ApMaterno.length; k++) {
        if (
                ApMaterno.charAt(k) !== "A" &&
                ApMaterno.charAt(k) !== "E" &&
                ApMaterno.charAt(k) !== "I" &&
                ApMaterno.charAt(k) !== "O" &&
                ApMaterno.charAt(k) !== "U"
                ) {
            primeraConsonanteApMaterno = ApMaterno.charAt(k);
            break;
        }
    }
//     alert(
//             primeraConsonanteApPaterno +
//            primeraConsonanteApMaterno +
//            primeraConsonanteNombre);

    return (
            primeraConsonanteApPaterno +
            primeraConsonanteApMaterno +
            primeraConsonanteNombre
            );
}

function copiarCURP() {
  var curp = document.getElementById("txtCurp").value;

  navigator.clipboard
    .writeText(curp)
    .then(function () {
      alert("CURP copiado al portapapeles");
    })
    .catch(function () {
      alert("No se pudo copiar el CURP");
    });
}

