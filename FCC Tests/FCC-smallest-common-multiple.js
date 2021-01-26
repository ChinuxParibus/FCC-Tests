function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sol = max; // Generalmente, la solución se ubica en el mayor

  for (let i = max - 1; i >= min; i--) {
    if (sol % i) {
      sol += max; // Encuentra un múltiplo y lo añade
      i = max; // reinicia la cuenta para el nuevo valor 'máximo'
    }
  }
  return sol;
}

smallestCommons([1, 5]);
