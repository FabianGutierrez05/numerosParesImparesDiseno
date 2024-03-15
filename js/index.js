let numeros = [];
    for(let i=1;i<=200;i++){
        numeros.push(i);
    }

function todos(){
    numeros.length;
    console.log(numeros);
}

function numPar(){
    const par= numeros.filter(filtroPar);
    function filtroPar(pares){
        return pares%2==0; 
    ;
    }
    const parfilt = par.map((value, index)=>{
        return 'El numero par en la posicion [' + (index+1)+ '] es: '+ value;
    })
    console.log(parfilt);

}

function numImpar(){    
const impar= numeros.filter(filtroImpar);
function filtroImpar(impares){
        return impares%2!=0;    
    }
    const imparfilt = impar.map((value, index)=>{
        return 'El numero impar en la posicion [' + (index+1)+ '] es: '+ value;
    })
    console.log(imparfilt);
    
}

function mayPar(){
    const formulario=document.forms['formulario'];
    const numMay= formulario['numMayorPar'].value;
    console.log(numMay);
    const par= numeros.filter(filtroPar);
    function filtroPar(pares){
        return pares%2==0 && pares>numMay;    
    }
    console.log(par);
}
function mayImpar(){
    const formulario=document.forms['formulario'];
    const numMay= formulario['numMayorImpar'].value;
    console.log(numMay);
    const par= numeros.filter(filtroImpar);
    function filtroImpar(pares){
        return pares%2!=0 && pares>numMay;    
    }
    console.log(par);   
}

/*document.getElementById('tabla').innerHTML='<p>hola</p>'*/