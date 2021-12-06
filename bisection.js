let epsilon = 0.01;
function func(x) {
    return x * x * x + (3 * x) - 5;
}
function bisection(a, b) {
    if (func(a) * func(b) >= 0) {
        return "Sorry, change the value of a and b";
    }
    let c = a;
    while ((b - a) >= epsilon) {
        c = (a + b)/2;
        if (func(c) === 0.0) {
            break;
        }
        else if (func(c) > 0) {
            b = c;
        }
        else {
            a = c;
        }
    }
    return (c.toFixed(4));
}
console.log(bisection(1, 2));
