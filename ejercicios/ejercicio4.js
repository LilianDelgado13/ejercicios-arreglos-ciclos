window.addEventListener('DOMContentLoaded', () => {
    const resultadoDiv = document.getElementById('resultado');
  
    const student1Courses = ['Math', 'English', 'Programming'];
    const student2Courses = ['Geography', 'Spanish', 'Programming'];
    const commonCourses = student1Courses.filter(course => student2Courses.includes(course));
  
    resultadoDiv.innerHTML = `
      <h2>Ejercicio 4: Cursos en común</h2>
      <p><strong>Estudiante 1:</strong> [${student1Courses.join(', ')}]</p>
      <p><strong>Estudiante 2:</strong> [${student2Courses.join(', ')}]</p>
      <p><strong>Cursos en común:</strong> [${commonCourses.join(', ') || 'Ninguno'}]</p>
      <p><strong>Método usado:</strong> <code>filter() + includes()</code></p>
    `;
  });
  