console.log("Primer programa con node");
//let numero = 20;
//if (numero > 10)
//    console.log("Valor Alto");

//else 
//    console.log("Valor Bajo");

//setTimeout(()=> {
  //  console.log("Primer Llamado");
//}, 5000);

//setTimeout(() =>{
//    console.log("Segundo Llamado");
//}, 3000);

const peticion1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("primer llamado")
        }, 5000);
    })
}

const peticion2 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Segundo llamado")
        }, 2000);
    })
}

// ejemplpo de proceso asincrono. no espera que termine la primera peticion para realiar la segunda
// peticion1().then(resp =>{
//     console.log(resp);
// });

// peticion2().then(resp =>{
//     console.log(resp);
// }).catch((error) =>{
//     console.log("Error", error);
// });

// Ejemplo de proceso sincrono, si espera que termine la primera peticion para realizar la segunda
const rutina = async () => {

    try {
        const p1 = await peticion1()
        const p2 = await peticion2()
        console.log(p1);
        console.log(p2);
    } catch (error) {
        console.log("Ha sucedido un error en las peticiones");
  
}
}
rutina();


// let consulta1 = fetch("https://swapi.dev/api/people/1");

// console.log(consulta1);