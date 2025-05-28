function ejercicio3() {
    const resultadoDiv = document.getElementById('resultado');
  
    const array = [1, 2, 3, 4];
    const suma = array.reduce((acc, num) => acc + num, 0);
    const producto = array.reduce((acc, num) => acc * num, 1);
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 3: Suma y Producto</h2>
      <p><strong>Arreglo:</strong> [${array.join(', ')}]</p>
      <p><strong>Suma:</strong> ${suma}</p>
      <p><strong>Producto:</strong> ${producto}</p>
      <p><strong>Método usado:</strong> <code>reduce()</code></p>
    `;
  }