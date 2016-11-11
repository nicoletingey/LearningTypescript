"use strict";
// Start mowing -> Pending
// Complete mowing process -> Resolve
// Did not complete mowing process -> Reject 
//(sending out an api request and getting back an error^)
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    compress = res;
    return performUpload('transfering...');
})
    .then((res) => {
    transfer = res;
    return performUpload('Image upload completed.');
});
//# sourceMappingURL=029_promises.js.map