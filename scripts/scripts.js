window.addEventListener("load", () => {
  inicializacao();
  inicializacaoOutput();
});

function inicializacao() {
  setTimeout(() => {
    const zshLine = document.getElementById("zsh-line");

    zshLine.classList.add("visible");
  }, 800);
}

function inicializacaoOutput() {
  setTimeout(() => {
    const outputTerminal = document.getElementById("terminal-output");

    outputTerminal.classList.add("visible");
  }, 1600);
}

// Funcao para mostrar a data e hora atuais

function Today() {
  const dataehora = new Date();

  const day = String(dataehora.getDate()).padStart(2, "0");
  const month = String(dataehora.getMonth() + 1).padStart(2, "0"); //Mais um pq o mes comaca em 0 no Java Script
  const year = String(dataehora.getFullYear());

  const horas = String(dataehora.getHours()).padStart(2, "0");
  const minutos = String(dataehora.getMinutes()).padStart(2, "0");
  const segundos = String(dataehora.getSeconds()).padStart(2, "0");

  const FormatDateHour = `${day}-${month}-${year} ${horas}:${minutos}:${segundos}`;
  document.getElementById("today").textContent =
    "Last login: " + FormatDateHour + " os dev";
}

Today();

//  Funcao para efeito de digitacao

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function typeWrite(elemento) {
  const textArray = elemento.innerHTML.split("");
  //Transformo meu texto em um array. O split serve para dizer onde eu quero rseparar o meu array, sem parametros o texto vai ser um elemento unico noa rray, no split eu posso por exemplo adc " ", oq vai dizer "separa em um array sempre que houver um espaco". Se eu deixar "", ele vai dividir por caracteres, que 'e oq eu quero.
  elemento.innerHTML = "";

  await delay(2000);

  textArray.forEach((letras, i) => {
    //forEach, para cada...
    setTimeout(function () {
      elemento.innerHTML += letras;
    }, 180 * i); //100 * i
  });

  setTimeout(function () {
    visibleTerminal(outputUser);
  }, 1 * textArray.length);
}

const texts = document.getElementsByClassName("typing");

Array.from(texts).forEach((elemento) => {
  typeWrite(elemento);
});

async function visibleTerminal(elemento) {
  elemento.value = " ";
  elemento.classList.add("visible");
}

const outputUser = document.getElementById("outputUser");
