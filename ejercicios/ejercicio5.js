function ejercicio5() {
    const resultadoDiv = document.getElementById('resultado');
  
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    let pasos = [];
  
    // Paso 1: Mostrar array original
    pasos.push(`<p><strong>Original:</strong> [${people.join(', ')}]</p>`);
  
    // Paso 2: Eliminar "Dani"
    people.splice(people.indexOf("Dani"), 1);
    pasos.push(`<p>1. Eliminado "Dani": [${people.join(', ')}]</p>`);
  
    // Paso 3: Eliminar "Juan"
    people.splice(people.indexOf("Juan"), 1);
    pasos.push(`<p>2. Eliminado "Juan": [${people.join(', ')}]</p>`);
  
    // Paso 4: Mover "Luis" al inicio
    const luis = people.splice(people.indexOf("Luis"), 1)[0];
    people.unshift(luis);
    pasos.push(`<p>3. "Luis" movido al inicio: [${people.join(', ')}]</p>`);
  
    // Paso 5: Agregar "Lilian" al final
    people.push("Lilian");
    pasos.push(`<p>4. Agregado "Lilian" al final: [${people.join(', ')}]</p>`);
  
    // Paso 6: Bucle hasta encontrar "Maria"
    let bucle = "";
    for (let person of people) {
      bucle += person + " ";
      if (person === "Maria") break;
    }
  
    // Paso 7: Obtener índice de "Maria"
    const indexMaria = people.indexOf("Maria");
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 5: Modificación de Arrays</h2>
      <div class="pasos">${pasos.join('')}</div>
      <p><strong>Bucle hasta encontrar "Maria":</strong> ${bucle.trim()}</p>
      <p><strong>Índice de "Maria":</strong> ${indexMaria}</p>
      <p><strong>Array final:</strong> [${people.join(', ')}]</p>
      <p><strong>Métodos usados:</strong> <code>splice()</code>, <code>indexOf()</code>, <code>unshift()</code>, <code>push()</code></p>
    `;
  }