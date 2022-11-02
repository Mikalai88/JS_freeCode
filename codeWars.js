function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

function multiply(a, b){
    return a * b;
}

function createPhoneNumber(numbers){
    return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
}

function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}