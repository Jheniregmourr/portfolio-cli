export function EstruturaOutput(valor) {
  const terminalOutput = document.getElementById("terminal-output");

  const terminalLine = document.createElement("div");
  terminalLine.className = "terminal-line";

  const output = document.createElement("div");
  output.className = "output";
  output.style.whiteSpace = "pre-wrap"; // preserva quebras de linha e espaços
  output.textContent = valor;

  terminalLine.appendChild(output);
  terminalOutput.appendChild(terminalLine);

  return output;
}
