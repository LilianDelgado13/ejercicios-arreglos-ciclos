window.addEventListener('DOMContentLoaded', () => {
    const resultadoDiv = document.getElementById('resultado');
  
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    let pasos = [];
  
    pasos.push(`<p><strong>Original:</strong> [${people.join(', ')}]</p>`);
  
    people.splice(people.indexOf("Dani"), 1);
    pasos.push(`<p>Eliminado "Dani": [${people.join(', ')}]</p>`);
  
    people.splice(people.indexOf("Juan"), 1);
    pasos.push(`<p>Eliminado "Juan": [${people.join(', ')}]</p>`);
  
    const luis = people.splice(people.indexOf("Luis"), 1)[0];
    people.unshift(luis);
    pasos.push(`<p>"Luis" al inicio: [${people.join(', ')}]</p>`);
  
    people.push("Lilian");
    pasos.push(`<p>Agregado "Lilian": [${people.join(', ')}]</p>`);
  
    let bucle = "";
    for (let person of people) {
      bucle += person + " ";
      if (person === "Maria") break;
    }
  
    const indexMaria = people.indexOf("Maria");
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 5: Modificar lista de personas</h2>
      ${pasos.join('')}
      <p><strong>Bucle hasta "Maria":</strong> ${bucle}</p>
      <p><strong>Índice de "Maria":</strong> ${indexMaria}</p>
      <p><strong>Final:</strong> [${people.join(', ')}]</p>
    `;
  });
  