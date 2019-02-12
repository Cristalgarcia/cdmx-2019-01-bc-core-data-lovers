window.lol = {
  iterarData: (datalol) => {
    let datosArr = []
    for (const key in datalol) {
   if (datalol.hasOwnProperty(key)) {
     const element = datalol[key];
     let obj = {
       name: element.name,
       tag: element.tags[0],
       splash: element.splash,
       title: element.title,
     }
     datosArr.push(obj)
    }
   }
   return datosArr
  },
  
   filtroDataRoles: (rolId, datosArr ) =>{  
      const filtradoPorRoles = datosArr.filter(element => element.tag === rolId);
 
       return filtradoPorRoles
     },
  
filterBySearch: (name, datosArr) => {
  const concidence = datosArr.filter(element => (element.name.toLowerCase().match(name.toLowerCase())));
  return concidence;
},

}