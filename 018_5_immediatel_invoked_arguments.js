// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Nicole', 'Tingey'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Coco', 'Banana');
//# sourceMappingURL=018_5_immediatel_invoked_arguments.js.map