window.addEventListener('DOMContentLoaded', () => {
    const resultadoDiv = document.getElementById('resultado');
  
    const arr = ["This", "is", "a", "sentence."];
  
    function printOutString() {
        return arr.join(" ");
    }
  
    const frase = printOutString();
  
    resultadoDiv.innerHTML = `
        <h2>Ejercicio 1: Unir palabras en una frase</h2>
        <p><strong>Arreglo original:</strong> [${arr.join(', ')}]</p>
        <p><strong>Frase resultante:</strong> "${frase}"</p>
        <p><strong>Método usado:</strong> <code>arr.join(" ")</code></p>
    `;
  });
  