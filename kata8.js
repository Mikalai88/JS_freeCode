function aName(n){

    [first, last] = n.toUpperCase().split(' ');
    return first[0] + '.' + last[0];

}

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
        return true;
    } else {
        return false;
    }
}