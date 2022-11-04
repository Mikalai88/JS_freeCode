function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}