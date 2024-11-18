/*Generatore di numeri
- let numero casuale da 1 a 6 per il player
- let numero casuale da 1 a 6 per PC-player
- dichiarare solo il numero piu alto
- con conseguente message se vinto o perso*/


let message = []
let numeroPlayer = Math.ceil(Math.random() * 6);
console.log('Il numero estratto per il player è:', numeroPlayer);
let numeroPc = Math.random() * 6;
console.log('Il numero estratto per il Pc è:', numeroPc);

if (numeroPlayer > numeroPc){
    message = 'HAI VINTO';
}else if (numeroPlayer < numeroPc){
    message = 'HAI PERSO';
}else{
    message = 'PARI, RILANCIA';
}
console.log(message)


