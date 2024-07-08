export default class Cl_IEstudiante{
    leerCedula() {
        return prompt("ingrese la cedula");
    }
    leerNota1() {
        return prompt("ingrese la nota 1");
    }
    leerNota2() {
        return prompt("ingrese la nota 2");ñp
    }
    leerNota3() {
        return prompt("ingrese la nota 3");
    }
    reporteEstudiante(c, n1, n2, n3, nf) {
        return ` 
        <br> Cedula: ${c}
        <br> Nota 1: ${n1}
        <br> Nota 2: ${n2}
        <br> Nota 3: ${n3}
        <br< Nota Final: ${nf}
        `
    }
}