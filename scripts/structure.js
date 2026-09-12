export function EstruturaHtml(valor) {
  const terminalOutput = document.getElementById("terminal-output");
  const terminalLine = document.createElement("div");
  terminalLine.className = "terminal-line";
  const prompt = document.createElement("span");
  prompt.className = "prompt";
  prompt.textContent = "➜";
  const path = document.createElement("span");
  path.className = "path";
  path.textContent = "~";
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = valor;
  terminalLine.appendChild(prompt);
  terminalLine.appendChild(path);
  terminalLine.appendChild(input);
  terminalOutput.appendChild(terminalLine);
  return input;
}

export function EstruturaOutput(valor) {
  const terminalOutput = document.getElementById("terminal-output");
  const terminalLine = document.createElement("div");
  terminalLine.className = "terminal-line";
  const input = document.createElement("input");
  input.className = "output";
  input.type = "text";
  input.placeholder = valor;
  input.disabled = true;
  terminalLine.appendChild(input);
  terminalOutput.appendChild(terminalLine);
  return input;
}
