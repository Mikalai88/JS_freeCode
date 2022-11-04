function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}