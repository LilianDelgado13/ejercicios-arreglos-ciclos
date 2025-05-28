function ejercicio6() {
    const resultadoDiv = document.getElementById('resultado');
  
    // Implementación del algoritmo Bubble Sort
    function bubbleSort(arr) {
      const sorted = [...arr]; // Creamos una copia del array original
      let swaps; // Variable para controlar si hubo intercambios
      
      do {
        swaps = false;
        for (let i = 0; i < sorted.length - 1; i++) {
          if (sorted[i] > sorted[i + 1]) {
            // Intercambiamos elementos
            [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
            swaps = true;
          }
        }
      } while (swaps); // Continuamos hasta que no haya más intercambios
      
      return sorted;
    }
  
    const original = [3, 6, 12, 5, 100, 1];
    const sorted = bubbleSort(original);
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 6: Algoritmo Bubble Sort</h2>
      <div class="algoritmo-explicacion">
        <p>El bubble sort es un algoritmo de ordenamiento que compara elementos adyacentes y los intercambia si están en el orden incorrecto.</p>
      </div>
      <p><strong>Array original:</strong> [${original.join(', ')}]</p>
      <p><strong>Array ordenado:</strong> [${sorted.join(', ')}]</p>
      <div class="codigo">
        <p><strong>Método implementado:</strong></p>
        <pre><code>function bubbleSort(arr) {
    const sorted = [...arr];
    let swaps;
    
    do {
      swaps = false;
      for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] > sorted[i + 1]) {
          [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
          swaps = true;
        }
      }
    } while (swaps);
    
    return sorted;
  }</code></pre>
      </div>
    `;
  }