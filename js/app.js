
import { db} from './guitarras.js'


const carritoContainer = document.querySelector('#carrito')

// Iterar Arrays
// Ciclos

// for(let i = 0; i < db.length; i++){
//     console.log0(db[i].nombre)
// }

// db.forEach(
//    function(guitar){
//        console.log(guitar.nombre)
//    }
//)

const createCart = (carrito) => {
    const p = document.createElement('p')
    p.className = "text-center"
    p.innerText = "El carrito esta vacio"
    const div = document.createElement('div')
    const html = ''
    div.innerHTML = html
    if(carrito.length === 0){
        carritoContainer.innerHTML = ''
        carritoContainer.appendChild(p)
    } else{
        carritoContainer.innerHTML = ''
        carritoContainer.appendChild(div)
    }
      

const createCard = (name) => {
    const div = document.createElement ('div')
    div.className = "col-md-6 col-lg-4 my-4 row align-items-center"
    div.innerText = name
    const html = 
    <div id="carrito" class="bg-white p-3">
                            <p class="text-center">El carrito esta vacio</p>
                        <div>
                            <table class="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img class="img-fluid" src="./img/guitarra_02.jpg" alt="imagen guitarra">
                                        </td>
                                        <td>SRV</td>
                                        <td class="fw-bold">
                                                $299
                                        </td>
                                        <td class="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                1
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                class="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>
                            <button class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
        
    }
const container = document.querySelector('main div')

db.forEach((guitar) => { console.log(guitar.nombre) })
    console.log(guitar.nombre)
    container.appendChild(createCard())


const carrito = []



const buttonClicked = (e) => {
    if (e.target.tagName === 'BUTTON') {
        const dataId = e.target.getAttribute('data-id')
        //Verificar si existe guitar
        const idCarrito = carrito.findIndex(g => g.id ==== Number(dataId)
    )
        //Si si, invrementa cantidad
        if (idCarrito != -1) {
            carrito[idCarrito].cantidad++
        } else {
            carrito.push({
                ...db[Number(dataId) - 1],
                cantidad: 1
            })
        } else {
            carrito[idCarrito].cantidad++
        }

        carrito

//Si si, incrementa cantidad
        console.log(carrito)
    }



createCart)





















//Trabajar con funciones;
//function sumar(a, b){
//    return a + b;
//}
// suma(5, 5)
//con resta = function
//(a, b){
//    return a - b;
//}
//resta(10, 5)

// arror funcion
//const sayHello = () => {
//    console.log('Hola Mundo')
//}

//const saluda = (name) => {
//    console.log(`Hola ${name}`)
//}
//saluda('Bryan')