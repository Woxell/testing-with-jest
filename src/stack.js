const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    //åtgärdar enligt min nya unit test
    return stack.length > 0 ? stack.pop() : "Stacken är tom";
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    //return stack[0]; // Det här är medvetet felaktigt
    return _.last(stack);
}