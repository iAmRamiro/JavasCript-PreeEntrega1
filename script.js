


// ECOMMERCE 




//Retorna el Numero Del Producto
function Inicio(){

    alert("##################################" +
    "\n \t💻 𝑻𝑬𝑪𝑯 𝑺𝑯𝑶𝑷 💻"+
    "\n \tTIENDA ONLINE"+
    "\n################################");


    alert("**PRODUCTOS**");
    let UsuarioNumero = parseInt(prompt(" 1-Auriculares Gamer $3800 \n 2-Monitor 20 pulgadas $4500 \n 3-Teclado Gamer $5400  \n 4-Mouse Razer $4800 "));
    return UsuarioNumero;
    
    
}

// preguntamos cantidad del producto
const cantidadProducto = () => {let cantidad = parseInt(prompt("Cantidad: "));return cantidad;}


// Recibe el numero del producto y pone el precio correspondiente
function PrecioProducto(precio){
    
    let  precioProducto; 

   switch(precio){

    case 1:
        precioProducto = 3800;
        console.log(precioProducto);
        break
    case 2:
        precioProducto = 4500;
        console.log(precioProducto);
        break
    case 3: 
        precioProducto = 5400;
        console.log(precioProducto);
        break
    case 4:
        precioProducto = 4800;
        console.log(precioProducto);
        break
    default:
        alert("Error")
   }

   return precioProducto; //retorna el precio del producto por separado 

}

//Sacamos el nombre del producto
const nombreDelProducto = productoNumero => { 

    let nombreProducto = "";

    switch(productoNumero){
        case 1:
            nombreProducto = "Auriculares Gamer";
            break
        case 2:
            nombreProducto = "Monitor 20 pulgadas";
            break
        case 3: 
            nombreProducto = "Teclado Gamer";
            break
        case 4:
            nombreProducto = "Mouse Razer";
            break
        default:
            alert("Error");
    }

    return nombreProducto;
}


// total

const total = (precio,cantidad) => {totalPrecio = precio * cantidad; return totalPrecio};


//Recibe el Precio del Producto Y Calcula el IVA

const calcularImpuesto = precio => precio *1.21;




//Detallamos
const detallar = (nombre,precio,cantidad)=>{

    return "Nombre: "+nombre+
    "\nPrecio: $"+ precio+
    "\nCantidad: "+ cantidad+"\n"
}


// hacemos el ticket
const ticket = (detalle,total) => {
    alert(
        "******************************************"+
        "\nEl detalle de la compra: \n"+detalle+
        "====================="+
        "\nEl Total: $" + total +
        "\nEl total con IVA: $"+calcularImpuesto(total)+
        "\n====================="+
        "\nGracias Por su Compra"+
        "\n***************************************"

    )
}



// Metodo de pago
const MetodoDePago = () => {

    metodo= parseInt(prompt("Selecciona un Metodo de Pago: \n 1-Efectivo \n 2-Tarjeta \n 3-Transferencia \n 4-Cheque"));

    switch(metodo){
        case 1:
            alert("Pagaste en Efectivo");
            break
        case 2:
            alert("Pagaste con Tarjeta");
            break
        case 3:
            alert("Pagaste con Transferencia");
            break
        case 4:
            alert("Pagaste con Cheque")
            break
        default:
            alert("Error")
    }

    alert("Gracias Por Su Compra ❤")
}


let FinalizarPrograma = true;


while(FinalizarPrograma){

    let productoCodigo = Inicio();
    let productoPrecio = PrecioProducto(productoCodigo);
    let productoCantidad = cantidadProducto();
    alert("Agregando al carrito...")
    let productoNombre = nombreDelProducto(productoCodigo);
    let productoTotal = total(productoPrecio,productoCantidad);
    let productoDetalle = detallar(productoNombre,productoPrecio,productoCantidad);
    ticket(productoDetalle,productoTotal);
    MetodoDePago();

    const respuesta = prompt("¿Quieres seguir comprando? (s/n)");
  
    if (respuesta.toLowerCase() === "n") {
      FinalizarPrograma = false;
    }

}
alert("¡Gracias por comprar con nosotros!");











