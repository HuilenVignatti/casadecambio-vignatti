
class Moneda {
    constructor (id, nombre, precio) {
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}
let real = new Moneda (1, "real", 40);
let euro = new Moneda (2, "euro", 400);
let dolar = new Moneda (3, "dolar", 350);

let monedas = [];
monedas.push(real);
monedas.push(euro);
monedas.push(dolar);


console.log (monedas)


alert ("Bienvenid@ a nuestro sitio web!")

let mostrarCotizacion = monedas.forEach(element => alert ("COTIZACION DEL DÍA " + element.nombre +" "+ element.precio)); 
    
    




let eleccion1 = prompt ("¿Que tipo de operacion desea realizar? Ingrese VENDER para vender moneda extranjera o COMPRAR para comprar moneda extranjera");

function multiplicar (a,b){
    resultadoMultiplicar = a*b;
    return resultadoMultiplicar;     
 
}

 if (eleccion1 == "VENDER" || eleccion1== "vender" || eleccion1 == "Vender") {

     let cambioMoneda = prompt ("Ingrese la moneda que desea vender (EURO , DOLAR O REAL)");
    
     if (cambioMoneda == "EURO" || cambioMoneda== "euro" || cambioMoneda == "Euro"){
     alert (`La cotizacion del día para la venta es ${euro.precio}`);

     let cantidadVenta = prompt ("Ingrese la cantidad de Euros que desea vender");

     let mostrarResultado = multiplicar (cantidadVenta, euro.precio);

     alert ("El total de la operacion es " + mostrarResultado+". Los euros seran debitados de su cuenta");


     } else if (cambioMoneda == "DOLAR" || cambioMoneda== "dolar" || cambioMoneda == "Dolar"){

     alert (`La cotizacion del día para la venta es ${dolar.precio}`);

     let cantidadVenta = prompt ("Ingrese la cantidad de Dolares que desea vender");

     let mostrarResultado = multiplicar (cantidadVenta, dolar.precio);

     alert ("El total de la operacion es " + mostrarResultado+". Los dolares seran debitados de su cuenta" );


     } else if (cambioMoneda == "REAL" || cambioMoneda== "real" || cambioMoneda == "Real"){

         alert (`La cotizacion del día para la venta es ${dolar.precio}`);

         let cantidadVenta = prompt ("Ingrese la cantidad de Reales que desea vender");

         let mostrarResultado = multiplicar (cantidadVenta, real.precio);

         alert ("El total de la operacion es " + mostrarResultado+". Los reales seran debitados de su cuenta");


     } else { 

     alert ("Ingrese una moneda valida");}


 }else if (eleccion1 == "COMPRAR" || eleccion1== "comprar" || eleccion1 == "Comprar") {

     let cambioMoneda = prompt ("Ingrese la moneda que desea vender (EURO , DOLAR O REAL)");
    
     if (cambioMoneda == "EURO" || cambioMoneda== "euro" || cambioMoneda == "Euro"){

     alert (`La cotizacion del día para la compra es ${euro.precio}`);

     let cantidadVenta = prompt ("Ingrese la cantidad de Euros que desea comprar");

     let mostrarResultado = multiplicar (cantidadVenta, euro.precio);

     alert ("El total de la operacion es " + mostrarResultado+". Los euros seran acreditados en su cuenta" );


     } else if (cambioMoneda == "DOLAR" || cambioMoneda== "dolar" || cambioMoneda == "Dolar"){

     alert (`La cotizacion del día para la compra es ${dolar.precio}`);

     let cantidadVenta = prompt ("Ingrese la cantidad de Dolares que desea comprar");

     let mostrarResultado = multiplicar (cantidadVenta, dolar.precio);

     alert ("El total de la operacion es " + mostrarResultado+". Los dolares seran acreditados en su cuenta" );


     } else if (cambioMoneda == "REAL" || cambioMoneda== "real" || cambioMoneda == "Real"){

         alert (`La cotizacion del día para la compra es ${dolar.precio}`);

         let cantidadVenta = prompt ("Ingrese la cantidad de Reales que desea comprar");

         let mostrarResultado = multiplicar (cantidadVenta, real.precio);

         alert ("El total de la operacion es " + mostrarResultado+". Los reales seran acreditados en su cuenta"  );


     } else {
     alert ("Ingrese una moneda valida");}


 }else {


 alert ("Ingrese una operacion valida")
 } 





 
