function ejercicio2() {
    const resultadoDiv = document.getElementById('resultado');
    const numeros = [1, 2, 3, 4, 5];
    const duplicados = numeros.map(num => num * 2);
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 2: Duplicar valores</h2>
      <p><strong>Original:</strong> [${numeros.join(', ')}]</p>
      <p><strong>Duplicados:</strong> [${duplicados.join(', ')}]</p>
      <p><strong>Método usado:</strong> <code>map()</code></p>
    `;
  }