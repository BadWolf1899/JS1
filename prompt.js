function calculateMaterial() {
    // Prompt para solicitar al usuario las medidas de la pared
    var ancho = parseFloat(prompt("Por favor, ingresá el ancho de la pared en metros:"));
    var alto = parseFloat(prompt("Ingresá el alto de la pared en metros:"));
  
    // Prompt para que el usuario escoja el material
    var option = prompt("Ingregá 'pintura' o 'empapelado' para calcular el material necesario:");
  
    // Validación del input del usuario
    if (isNaN(ancho) || isNaN(alto) || (option !== 'pintura' && option !== 'empapelado')) {
      console.log("Elección inválida. Intenta de nuevo.");
      calculateMaterial(); // Re-prompt al usuario para una repsuesta válida
      return;
    }
  
    // Cálculo del área
    var area = ancho * alto;
  
    // Cálculo del material necesario según los datos del usuario
    var materialNeeded;
    if (option === 'pintura') {
      // Si un litro de pinutra cubre 10 metros cuadrados
      materialNeeded = area / 10;
    } else if (option === 'empapelado') {
        // Si el empapelado cubre 5 metros cuadrados por rollo
        materialNeeded = Math.ceil(area / 5);
      }
    
      // Enviamos el resultado
      prompt("Para tu proyecto vas a necesitar " + materialNeeded + " unidades de " + option + ".");
    }
    
    calculateMaterial();