var dbQuery = function () {
    setTimeout(function () {
        console.log('Query results');
    }, 3000);
};
function loadPage(x) {
    console.log("Header");
    x();
    console.log("Sidebar");
    console.log("Footer");
}
loadPage(dbQuery);
//# sourceMappingURL=028_higher_order_functions_callbacks.js.map