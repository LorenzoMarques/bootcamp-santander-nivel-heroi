let herois = [
  { nome: "Artur", xp: 4500 },
  { nome: "Liana", xp: 900 },
  { nome: "Mirabel", xp: 3000 },
  { nome: "Jonas", xp: 7500 },
  { nome: "Eva", xp: 9500 },
  { nome: "Lorenzo", xp: 10002 },
];

function determinarNivel(xp) {
  switch (true) {
    case xp < 1000:
      return "Ferro";
    case xp <= 2000:
      return "Bronze";
    case xp <= 5000:
      return "Prata";
    case xp <= 7000:
      return "Ouro";
    case xp <= 8000:
      return "Platina";
    case xp <= 9000:
      return "Ascendente";
    case xp <= 10000:
      return "Imortal";
    default:
      return "Radiante";
  }
}

for (let i = 0; i < herois.length; i++) {
  console.log(
    `O Herói de nome ${herois[i].nome} está no nível de ${determinarNivel(
      herois[i].xp
    )}`
  );
}
