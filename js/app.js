
const PIEDRA = "leapiedra";
const PAPEL = "velejpapel";
const TIJERA = "riotijera";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

const piedraBtn = document.getElementById("leapiedra");
const tijerasBtn = document.getElementById("velejpapel");
const papelBtn = document.getElementById("riotijera");
const resultadoText =document.getElementById("start-text")
const usuarioImg =document.getElementById("usuario-img")
const maquinaImg =document.getElementById("maquina-img")


piedraBtn.addEventListener("click",()=>{
    play(PIEDRA);
});
tijerasBtn.addEventListener("click",()=>{
    play(PAPEL);
});
papelBtn.addEventListener("click",()=>{
    play(TIJERA);
});

function play(userOption){

    usuarioImg.src = "img/"+userOption+".png"

    resultadoText.innerHTML ="Buscando Oponente"

    const interval = setInterval(function name(params) {
        const MaquinaOpcion = calcMachineOption();
        maquinaImg.src = "img/"+MaquinaOpcion+".png"
    }, 200)

    setTimeout(function name(params) {

        clearInterval(interval);

        const MaquinaOpcion = calcMachineOption();
        const result = calcularResultado(userOption, MaquinaOpcion)

    
    maquinaImg.src = "img/"+MaquinaOpcion+".png"

    switch(result){
        case EMPATE:
            resultadoText.innerHTML= "Empataste"
            break;
        case GANASTE:
            resultadoText.innerHTML= "Ganaste"
            break;
        case PERDISTE:
            resultadoText.innerHTML= "Perdiste Manco de mierda"
            break;
    }
        
    }, 3000)

    
}

function calcMachineOption (){
    const number = Math.floor(Math.random() *3)
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2: 
            return TIJERA;
    }
}


function calcularResultado(userOption, MaquinaOpcion){
    if(userOption === MaquinaOpcion){
        return EMPATE;
    } else if(userOption === PIEDRA){

        if(MaquinaOpcion === PAPEL) return PERDISTE;
        if(MaquinaOpcion === TIJERA) return GANASTE;

    } else if(userOption === PAPEL){

        if(MaquinaOpcion === PIEDRA) return GANASTE;
        if(MaquinaOpcion === TIJERA) return PERDISTE;

    } else if(userOption === TIJERA){

        if(MaquinaOpcion === PIEDRA) return PERDISTE;
        if(MaquinaOpcion === PAPEL) return GANASTE;
    }    
}