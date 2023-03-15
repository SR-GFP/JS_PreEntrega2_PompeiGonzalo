//----------Constructor de objetos---------------//

class RemerasEstampadas {
    constructor(id, talle, color, modelo, precio){
        this.id = id
        this.talle = talle
        this.color = color
        this.modelo = modelo
        this.precio = precio
    }
}


//------------Instanciar Objetos------------------//
const producto1 = new RemerasEstampadas (1, "XL", "Negra", "Ramones", 6000)

const producto2 = new RemerasEstampadas (2, "L", "Blanca", "ACDC", 5000)

const producto3 = new RemerasEstampadas (3, "M", "Roja", "Rolling Stones", 4000)

const producto4 = new RemerasEstampadas (4, "XL", "Blanca", "Ramones", 6000)


//----------Arreglo de productos------------//
const stock = [producto1, producto2, producto3, producto4]

const carrito = []

console.log(stock)

//----------Funciones--------------------//
function menu(){
    let salirMenu = false
    do{
        salirMenu = elegirServicio (salirMenu)
    }while(!salirMenu)
}

function elegirServicio(salir){
    let opcionIngresada = parseInt(prompt(`Bienvenido
    1 - Ver productos disponibles
    2 - Buscar Productos
    3 - Agregar Producto
    4 - Comprar
    5 - Salir del Menu`))

    switch(opcionIngresada){
        case 1:
            productosDisponibles(stock)
        break;
        case 2: 
            filtrar()
        break;
        case 3:
            agregarProducto()
        break;
        case 4:
            comprar()
        break;
        case 5:
            alert("Gracias por su visita")
            salir= true
            return salir
        break;
        default:
            alert("Ingresa una opcion de la lista")
        break;
    }
}

//---------Funcion para ver productos---------//
function productosDisponibles(array){
    let listaDeProductos = array.forEach(productos => {
        alert(`Estos son nuestros productos disponibles:\n         
        Modelo: ${productos.modelo}
        Talle: ${productos.talle}
        Color: ${productos.color}
        Precio: ${productos.precio}
        `)        
    });    
}



//---------Funcion para agregar producto------//
function agregarProducto(){
    alert("ejecutando funcion agregar producto")
}
//---------Funcion para comprar---------------//
function comprar(){
    alert("ejecutando funcion comprar")
}
menu()

