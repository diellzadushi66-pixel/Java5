const cmimilibrit=12.50;
const cmimifletoreve=1.80;

const sasiaLibrit=3;
const sasiaFletoreve=4;

let totaliLibrit= cmimilibrit*sasiaLibrit;
let totaliFletoreve=cmimifletoreve*sasiaFletoreve;

let totali= totaliLibrit+totaliFletoreve;

totali+=2.50;

console.log("Fatura");
console.log("Totali i librave: " totaliLibrit);
console.log("Totali  i fletoreve: " totaliFletoreve);
console.log("Totali komplet: " totali);