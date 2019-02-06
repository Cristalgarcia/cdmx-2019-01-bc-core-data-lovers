/*convierte la base de datos en una variable*/
const datalol = LOL.data;
//const lolfiltro = datalol.filter(datalol.hasOwnProperty, "key");
//console.log(lolfiltro);
//console.log(Object.values(datalol))
const tank = document.getElementById('tank');
const rol = document.getElementsByClassName('rol');

/*for( let i= 0; i<rol.length;i++){
    rol[i].addEventListener("click",() => {
      let rolId = rol[i].id;
      
      let nuevoArreglo = [];
      const arrayData = Object.values(datalol);
      arrayData.forEach(element => {
        const roles = element.tags[0];
        if(roles === rolId ){
          nuevoArreglo.push(element);
        }
      nuevoArreglo.innerHTML +=   
         
      });
      //console.log(nuevoArreglo)
    })}*/

    for( let i= 0; i<rol.length;i++){
        rol[i].addEventListener("click",() => {
          let rolId = rol[i].id;
          const arrayData = Object.values(datalol);
         filtrado = arrayData.filter(element => element.tags[0] === rolId);
console.log(filtrado)
    })};


/*trae el div imprimir roles para identificarlo e imprimir*/
const imprimirRoles = document.getElementById("imprimirRoles")
const mostrar = document.getElementById("mostrar")

mostrar.addEventListener("click",() =>{
    const menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
});

/*esta función imprimir los tags de los personales*/
//let tags = "";
const print =(name,imga,title) =>{
    let result = `<div class="cuadro"><img class="imagen" src="${imga}"> ${name} ${title}</div>`; 
    imprimirRoles.insertAdjacentHTML("beforeend",result);
}

for (const key in datalol) {
    if (datalol.hasOwnProperty(key)) {
      const element = datalol[key];
      let name = element.name;
      let tag = element.tags[0];
      let imga = element.img;
      let title = element.title;
      let dato = [`${name}, ${tag}`]
      print(name,imga,title);

    }
};