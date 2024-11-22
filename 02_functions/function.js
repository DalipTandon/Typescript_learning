"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(val) {
    return val + 2;
}
function greetings(val) {
    return val + " User";
}
function mySignup(name, email, isPaid) {
}
// mySignup("Dalip","dalip@gmail.com");  to add value of isPaid by deafault we have to write isPaid:boolean=false in the parameter itself
mySignup("Dalip", "dalip@gmail.com", false);
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
login("dalip", "dalip@gmail"); //now we dont  need to pass value of isPaid as a argument as we have already mentioned default value in function parameter
sum(4);
