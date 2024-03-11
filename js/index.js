function numPar(){
    let numeros = [];
    for(let i=1;i<=200;i++){
        numeros.push(i);
    }
    const par= numeros.filter(filtroPar);
    function filtroPar(pares){
        return pares%2==0;    
    }
    console.log(par);

}
function numImpar(){
    let numeros = [];
    for(let i=1;i<=200;i++){
    numeros.push(i);
}
const par= numeros.filter(filtroImpar);
function filtroImpar(impares){
        return impares%2!=0;    
    }
console.log(numeros);
    
}

function mayPar(){
    const formulario=$('#formulario');
    const numMay= $('#numMayorPar').val();
    console.log(numMay);
    let numeros = [];
    for(let i=1;i<=200;i++){
        numeros.push(i);
    }
    const par= numeros.filter(filtroPar);
    function filtroPar(pares){
        return pares%2==0 && pares>numMay;    
    }
    console.log(par);
}
function mayImpar(){
    const formulario=$('#formulario');
    const numMay= $('#numMayorImpar').val();
    console.log(numMay);
    let numeros = [];
    for(let i=1;i<=200;i++){
        numeros.push(i);
    }
    const par= numeros.filter(filtroImpar);
    function filtroImpar(pares){
        return pares%2!=0 && pares>numMay;    
    }
    console.log(par);   
}