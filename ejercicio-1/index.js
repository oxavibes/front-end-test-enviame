const findPrimeNumbers = (start, end) => {
  let primeNumbers = [];
  for (let num = start; num <= end; num++) {
    let counter = 0;

    //Empezamos desde 2 puesto que 1 no es un numero primo
    for (iterator = 2; iterator <= num / 2; iterator++) {
      //Si el resto de la division entre el numero actual y el iterador nos da 0,
      //entonces ese numero es divisible entre el iterador por lo tanto incrementamos el contador
      if (num % iterator === 0) {
        counter++;
      }
    }

    if (!counter && num > 1) primeNumbers.push(num);
  }

  console.log(primeNumbers);
};

module.exports = { findPrimeNumbers };
