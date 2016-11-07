// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
//Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Nicole', 'Tingey'));
console.log(otherFullName('Nicole', 'Tingey'));
console.log(thirdFullName('Nicole', 'Tingey'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map