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



