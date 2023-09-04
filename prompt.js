function calculateMaterial() {
  // Prompt para solicitar al usuario las medidas de la pared
  var ancho = parseFloat(prompt("Por favor, ingresá el ancho de la pared en metros:"));
  var alto = parseFloat(prompt("Ingresá el alto de la pared en metros:"));

  // Prompt para que el usuario escoja el material
  var option = prompt("Ingregá 'pintura' o 'empapelado' para calcular el material necesario:");

  // Validación del input del usuario
  if (isNaN(ancho) || isNaN(alto) || (option !== 'pintura' && option !== 'empapelado')) {
      console.log("Elección inválida. Intenta de nuevo.");
      calculateMaterial(); // Re-prompt al usuario para una respuesta válida
      return;
  }

  // Cálculo del área
  var area = ancho * alto;

  // Creación de un objeto que contiene información sobre los materiales
  var materials = {
      pintura: {
          coverage: 10,
          unit: "litros"
      },
      empapelado: {
          coverage: 5,
          unit: "rollos"
      }
  };

  // Función para calcular el material necesario
  var calculateNeededMaterial = function(area, material) {
      return Math.ceil(area / material.coverage);
  };

  // Cálculo del material necesario según los datos del usuario
  var materialNeeded;
  if (option === 'pintura') {
      materialNeeded = calculateNeededMaterial(area, materials.pintura);
  } else if (option === 'empapelado') {
      materialNeeded = calculateNeededMaterial(area, materials.empapelado);
  }

  // Enviamos el resultado
  console.log("Para tu proyecto vas a necesitar " + materialNeeded + " unidades de " + materials[option].unit + " de " + option + ".");
}

calculateMaterial();
