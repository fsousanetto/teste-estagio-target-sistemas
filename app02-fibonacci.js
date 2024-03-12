// Sequência de Fibonacci

const isFibonacci = (num) => {
    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}

const checkFibonacci = (num) => {
    if (isFibonacci(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

checkFibonacci(23); // Saída: 23 não pertence à sequência Fibonacci
checkFibonacci(21); // Saída: 21 pertence à sequência Fibonacci
