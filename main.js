class Producto {
    constructor(nombre, precio, cantidad, codigo){
        this.nombre = nombre.toUpperCase()
        this.precio = Number (precio)
        this.cantidad = parseInt(cantidad)
        this.codigo = codigo
    }

    precioConIva(precio) {
        return precio * 1.21
    }
}
const validarCantidad = (cantidad) => {
    return cantidad && parseInt(cantidad) > 0;
}

const validarNombre = (nombre) => {
    return nombre && nombre !== ''
}

const validarPrecio = (precio) => {
    return precio && parseFloat(precio) > 0;
}

let totalConIva = 0;
let totalSinIva = 0;


let nombreUsuario = prompt('Ingresa tu nombre:');
while (!validarNombre(nombreUsuario)){
    nombreUsuario = prompt("Por favor ingrese un nombre");
}
let cantidadDeProductos = prompt("Bienvenido al creador de tickets " + nombreUsuario + " Ingrese la cantidad de productos");
while (!validarCantidad(cantidadDeProductos)){
    cantidadDeProductos = prompt(nombreUsuario + " Ingrese un numero mayor a 0");
}

for (let i = 0; i < cantidadDeProductos; i++){
    let nombre = prompt('Ingrese el nombre del producto')
    while (!validarNombre(nombre)) {
        nombre = prompt('Nombre Inválido. Ingrese un nombre')
    }
    let precio = Number(prompt('Ingrese el precio del producto'))
    while (!validarPrecio(precio)) {
        precio = Number(prompt('Precio Inc. Ingrese el precio del producto'))
    }
    let cantidad = Number(prompt('Ingrese la cantidad de productos'))
    while (!validarCantidad(cantidad)) {
        cantidad = Number(prompt('Cantidad Invalida. Ingrese la cantidad de productos'))
    }
    let codigo = prompt('Ingrese el codigo del producto')

    let producto = new Producto(nombre, precio, cantidad, codigo)

    console.table('El producto cargado contiene los siguientes datos: ', producto)

    totalConIva = totalConIva + (cantidad * producto.precioConIva(precio))
    totalSinIva = totalSinIva + (cantidad * precio)
}

alert('El total a pagar (con IVA) es de $' + totalConIva)
alert('El total a pagar (sin IVA) es de $' + totalSinIva)