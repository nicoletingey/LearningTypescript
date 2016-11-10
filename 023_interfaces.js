function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Nicole',
    lastName: 'Tingey'
};
console.log(profile(realUser));
console.log(realUser.email);
//# sourceMappingURL=023_interfaces.js.map