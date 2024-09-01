AOS.init();

const dataDoEvento = new Date("Feb 25, 2025 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
console.log(timeStampDoEvento);

const contAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampDoAtual = agora.getTime();
  const distanciaAteoEvento = timeStampDoEvento - timeStampDoAtual;

  const diasEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteoEvento / diasEmMs);
  const horasAteEvento = Math.floor(
    (distanciaAteoEvento % diasEmMs) / horasEmMs
  );
  const minutosAteEvento = Math.floor(
    (distanciaAteoEvento % horasEmMs) / minutosEmMs
  );
  const segundosAteEvento = Math.floor(
    (distanciaAteoEvento % minutosEmMs) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento} dias ${horasAteEvento} h ${minutosAteEvento} min ${segundosAteEvento} s `;

  if (distanciaAteoEvento < 0) {
    clearInterval(contAsHoras);
    document.getElementById("msg").innerHTML = "A comemoração já aconteceu, fique de olho e não perca a próxima!";
  }
}, 1000);
