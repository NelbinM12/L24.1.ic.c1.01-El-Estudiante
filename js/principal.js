/** Analisis
 * Se tienen los siguientes datos de un estudiante
 * cedula, nota1 nota2, nota3. Se desea conocer la nota final del estudiante
 * que es la suma de las notas. El programa debe mostrar un reporte con la
 * cedula, las notas y la nota final.
 */

import Cl_IEstudiante from "./Cl_IEstudiante.js";
import Cl_Estudiante from "./Cl_Estudiante.js";
let iEstud = new Cl_IEstudiante(),
    c = iEstud.leerCedula(), 
    n1 = iEstud.leerNota1(),
    n2 = iEstud.leerNota2(),
    n3 = iEstud.leerNota3(),

    estud = new Cl_Estudiante(c, n1, n2, n3),

    salida = document.getElementById("salida")

    salida.innerHTML = iEstud.reporteEstudiante(estud.cedula,estud.nota1,estud.nota2,estud.nota3,estud.calcularNotaFinal())