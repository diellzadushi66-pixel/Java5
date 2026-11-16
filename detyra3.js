const akomodimi=96;
const transporti=42;
const ushqimi=57;

const numriPersonave=3;
const buxheti=80;

let totali=akomodimi+transporti+ushqimi;
let pjesaPersonit=totali/ numriPersonave;
let shumaMbetur=buxheti -pjesaPersonit;

console.log("Kostoja totale e udhetimit eshte: " + totali + "€");
console.lof("Selcili person paguan: " + pjesaPersonit + "€");
console.log("Secili person i mbeten: " +shumaMbetur + "€");