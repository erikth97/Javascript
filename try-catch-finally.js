//Gestion de errores 
const miFuncion = val => {
    if (typeof val == "number"){
        return 2 * val
    }
   throw new Error("El error debe de ser de tipo numero")
}

const numero = 8;

try {
    //Codigo que puede fallar
    console.log("esta ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
}catch(e){
    //en caso de fallar quiero que se ejecute
    console.log("el valor de e es: ${e}");   
    console.log("Error!");
}finally {
    console.log("Esto se va ejecutar tanto si se produce algun error, como su no exsiste ninguno")
}
