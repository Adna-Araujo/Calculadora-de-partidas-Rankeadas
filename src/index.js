function CalcularSaldo (vitorias, derrotas){
    let saldo = vitorias - derrotas;
    return saldo;
}
function calcularRank(saldo){
    let nivel;
    if (saldo < 10) {
    nivel = "Ferro";
  } else if (saldo >= 11 && saldo <= 20) {
    nivel = "Bronze";
  } else if (saldo >= 21 && saldo <= 50) {
    nivel = "Prata";
  } else if (saldo >= 51 && saldo <= 80) {
    nivel = "Ouro";
  } else if (saldo >= 81 && saldo <= 90) {
    nivel = "Diamante";
  } else if (saldo >= 91 && saldo <= 100) {
    nivel = "Lendário";
  } else if (saldo >= 101) {
    nivel = "Imortal";
  }
  return nivel;
}

let vitorias = 75;
let derrotas = 20;
let saldoVitorias = CalcularSaldo (vitorias, derrotas);
let rank = calcularRank(saldoVitorias);

console.log ("O Heroi tem saldo de"+saldoVitorias+"e está no nivel"+rank);
