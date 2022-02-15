// program to find the HCF or GCD of two integers

function hcf(a, b) {
    let hcf;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            hcf = i;
        }
    }
    return hcf;
}

console.log(hcf(15, 45));
