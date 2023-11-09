

creaTabellone = function() {
const contenitoreTabella = document.getElementById("tabellaTombola")
for(let i = 0; i <= 76; i++) {
celleTabellone = document.createElement("div")
celleTabellone.innerText= [i]
contenitoreTabella.appendChild(celleTabellone)

}
}

estrazioneRandom = function() {
   const bottone = document.getElementById("bottoneEstrai")
    bottone.addEventListener("click", function() {
       const numeroRandom = Math.floor(Math.random() * 77)
       return numeroRandom
    })
      
    }     
illuminaNumero = function(numeroRandom) {
    const sceltaNumero= document.getElementById("tabellaTombola")
    for(let i = 0; i<sceltaNumero.lenght; i++) {}
    if( numeroRandom==sceltaNumero){
        sceltaNumero.style.color = "blue";
    } 

}    
    

illuminaNumero()
estrazioneRandom()
creaTabellone()