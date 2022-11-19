function sum (...params) {
    let total = 0;
    for (const param of params) {
        total += param;
    }
    console.log(total)
}

sum(1, 2, 3, 4)