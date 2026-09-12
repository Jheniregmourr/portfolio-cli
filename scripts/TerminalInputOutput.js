import { EstruturaHtml } from "./EstruturaHTMLInput.js";
import { EstruturaOutput } from "./Output.js";

const input = document.getElementById("input");

const listadeInputs = [];

export function LerInput(elemento) {
  elemento.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const valorDigitado = elemento.value;

      console.log(valorDigitado);

      listadeInputs.push(valorDigitado);

      LerERetornar(valorDigitado);

      const novoInput = EstruturaHtml("");

      elemento.disabled = true;

      LerInput(novoInput);

      console.log(listadeInputs);
    }
  });
}

LerInput(input);

//LER O  COMANDO DIGITADO E DAR UM RETORNO

function LerERetornar(elemento) {
  elemento = elemento.toLowerCase().trim();

  switch (elemento) {
    case "about":
      EstruturaOutput(`┌──────────────────────────────────────────────────────────────┐
│ ABOUT                                                        │
└──────────────────────────────────────────────────────────────┘

Me chamo Jhenifer Regina de Moura, tenho 20 anos e moro em
Curitiba desde fevereiro de 2025.

Atualmente, trabalho como Desenvolvedora Full Stack na
Startup Opencon, onde iniciei como desenvolvedora no segundo
semestre de 2025.

Sou formada como Técnica em Informática pelo Instituto
Federal do Paraná e atualmente curso Análise e Desenvolvimento
de Sistemas na Universidade Positivo.

Para conhecer as tecnologias que utilizo no meu dia a dia,
use o comando "stack".
`);
      break;

    case "stack":
      EstruturaOutput(`┌──────────────────────────────────────────────────────────────┐
│ STACK                                                        │
└──────────────────────────────────────────────────────────────┘

JavaScript       TypeScript       Node.js
React            React Native     HTML
CSS              Tailwind CSS*

* Me viro com Tailwind (com certa dificuldade).
* Nas demais estou em constante aprendizado.

Para conhecer melhor como utilizo essas tecnologias na prática,
use o comando "experience".
`);
      break;

    case "experience":
      EstruturaOutput(`┌──────────────────────────────────────────────────────────────┐
│ EXPERIENCE                                                   │
└──────────────────────────────────────────────────────────────┘

▸ Professional Experience

Minha experiência profissional como desenvolvedora Full Stack
começou com uma atuação mais voltada ao front-end, trabalhando
no desenvolvimento e na manutenção de websites.

Com o tempo, também passei a trabalhar com gestão de DNS e
apontamentos utilizando proxy reverso com NGINX.

Atualmente, uma parte importante da minha rotina envolve o
desenvolvimento e a manutenção de aplicativos mobile em
React Native. Entre as principais demandas estão a correção
de bugs, criação de novas funcionalidades, manutenção dos
aplicativos e publicação nas lojas.

Também venho tendo cada vez mais contato com o back-end,
principalmente na resolução de bugs, implementação de
correções e algumas funcionalidades mais simples. É uma área que
continuo aprendendo muito de forma prática, conforme surgem
novas demandas no trabalho.

▸ Personal Projects

Além da experiência prática adquirida no trabalho, também
desenvolvo projetos pessoais para continuar aprendendo e
aprimorando meus conhecimentos.

No momento, estou desenvolvendo este portfólio e uma API
simples sobre um tema que gosto bastante.

Esses projetos me permitem experimentar novas ideias e colocar
em prática aquilo que venho aprendendo.
`);
      break;

    case "hobbies":
      EstruturaOutput(`┌──────────────────────────────────────────────────────────────┐
│ HOBBIES                                                      │
└──────────────────────────────────────────────────────────────┘

Gosto muito de ler, assistir filmes, treinar musculação,
montar Legos e fazer caça-palavras.

No meu dia a dia, o que mais faço quando nao estou codando é treinar, cozinhar e ler (principalmente antes de dormir) 
(tambem costumo fazer caça-palavras com minha família depois do jantar).

Mas não posso deixar de mencionar que amo programar e estou
constantemente fazendo isso depois da academia e durante
boa parte dos meus finais de semana.
`);
      break;

    case "projects":
      EstruturaOutput(`┌──────────────────────────────────────────────────────────────┐
│ PROJECTS                                                     │
└──────────────────────────────────────────────────────────────┘

Sinceramente depois que comecei a trabalhar na área, passei alguns meses
deixando de lado a criação de novos projetos.

Mas recentemente, voltei a desenvolver mais projetos pessoais,
que estão disponíveis no meu GitHub:

▸ https://github.com/Jheniregmourr

Entre os projetos mais recentes estão a API-SW (ainda em andamento) e este próprio
portfólio (que esta em constante melhoria).
`);
      break;

    case "education":
      EstruturaOutput(`┌──────────────────────────────────────────────┬──────────────────────────────────┐
│ Education                                    │ Institution                      │
├──────────────────────────────────────────────┼──────────────────────────────────┤
│ Técnica em Informática                       │ Instituto Federal do Paraná      │
│ Análise e Desenvolvimento de Sistemas        │ Universidade Positivo            │
│ (Atualmente)                                 │                                  │
└──────────────────────────────────────────────┴──────────────────────────────────┘`);
      break;

      break;

    case "contact":
      EstruturaOutput(`┌──────────┬──────────────────────┬──────────────────────────────────────────────────┐
│ Platform │ Username             │ Link                                             │
├──────────┼──────────────────────┼──────────────────────────────────────────────────┤
│ Email    │ jhenifer.moura.dev   │ jhenifer.moura.dev@gmail.com.br                  │
│ GitHub   │ Jheniregmourr        │ https://github.com/Jheniregmourr                 │
│ LinkedIn │ Jhenifer Moura       │ https://linkedin.com/in/jhenifer-moura-3a9006340 │
└──────────┴──────────────────────┴──────────────────────────────────────────────────┘`);

      break;

    case "study":
      break;

    case "help":
      EstruturaOutput(`┌─────────────┬───────────────────────────────┐
│ Command     │ Description                   │
├─────────────┼───────────────────────────────┤
│ about       │ Sobre mim                     │
│ stack       │ Tecnologias que utilizo       │
│ experience  │ Minha experiência profissional│
│ projects    │ Projetos                      │
│ education   │ Formação acadêmica            │
│ hobbies     │ Meus hobbies                  │
│ contact     │ Contato                       │
│ clear       │ Limpar terminal               │
│ help        │ Lista de comandos             │
└─────────────┴───────────────────────────────┘`);

      break;

    //case "history":
    //break;

    //case "pwd":
    //  EstruturaOutput("/Users/Developer");
    // break;

    default:
      EstruturaOutput("command not found");

      break;
  }
}
