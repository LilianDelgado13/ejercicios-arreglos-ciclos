window.addEventListener('DOMContentLoaded', () => {
    const resultadoDiv = document.getElementById('resultado');
  
    function bubbleSort(arr) {
      const sorted = [...arr];
      for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - i - 1; j++) {
          if (sorted[j] > sorted[j + 1]) {
            [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
          }
        }
      }
      return sorted;
    }
  
    const original = [3, 6, 12, 5, 100, 1];
    const sorted = bubbleSort(original);
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 6: Bubble Sort</h2>
      <p><strong>Original:</strong> [${original.join(', ')}]</p>
      <p><strong>Ordenado:</strong> [${sorted.join(', ')}]</p>
      <p><strong>Método usado:</strong> <code>Bubble Sort</code></p>
    `;
  });
  