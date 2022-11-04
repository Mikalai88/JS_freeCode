function basicOp(operation, value1, value2)
{
    if (operation == "+") {
        return value1 + value2;
    }
    else if (operation == "-") {
        return value1 - value2;
    }
    else if (operation == "*") {
        return value1 * value2;
    }
    else if (operation == "/") {
        return value1 / value2;
    }
}

function aName(n){

    [first, last] = n.toUpperCase().split(' ');
    return first[0] + '.' + last[0];

}