let numeros = [];
    for(let i=1;i<=200;i++){
        numeros.push(i);
    }

function todos(){
    const num= numeros.filter(filtroTodos);
    function filtroTodos(todos){  
    }
    const todfilt = num.map((value, index)=>{
        return ' El numero en la posicion [' + (index+1)+ '] es: '+ value;
    })
    console.log(numeros);
    document.getElementById("impTodos").innerHTML = numeros;
}

function numPar(){
    const par= numeros.filter(filtroPar);
    function filtroPar(pares){
        return pares%2==0; 
    }
    const parfilt = par.map((value, index)=>{
        return ' El numero par en la posicion [' + (index+1)+ '] es: '+ value ;
    })
    console.log(parfilt);
    document.getElementById("impPar").innerHTML = parfilt;
}

function numImpar(){    
const impar= numeros.filter(filtroImpar);
function filtroImpar(impares){
        return impares%2!=0;    
    }
    const imparfilt = impar.map((value, index)=>{
        return ' El numero impar en la posicion [' + (index+1)+ '] es: '+ value;
    })
    console.log(imparfilt);
    document.getElementById("impImpar").innerHTML = imparfilt;
}

function recargarPagina() {
    location.reload();
    var btnRecargar = document.getElementById('btnLimpiar');
    btnRecargar.addEventListener('click', recargarPagina);
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
    document.getElementById("impMayPar").innerHTML = par;
}
function mayImpar(){
    const formulario=document.forms['formulario'];
    const numMayI= formulario['numMayorImpar'].value;
    console.log(numMayI);
    const impar= numeros.filter(filtroImpar);
    function filtroImpar(impares){
        return impares%2!=0 && impares>numMayI;    
    }
    console.log(impar);   
    document.getElementById("impMayImp").innerHTML = impar;
}

/*document.getElementById('tabla').innerHTML='<p>hola</p>'*/