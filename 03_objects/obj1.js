"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUSer(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUSer({ name: "dalip", isPaid: false });
// function createUSer({name:string, emailID:string}){}  //gives error of duplicate identifier 
//in this way we can have two parameters with same data types
function create(_a) {
    var name = _a.name, emailID = _a.emailID;
}
function test() {
    return {};
}
function test2() {
    return { name: "dalip", isPaid: false };
}
create({ name: "Dalip", emailID: "dalip@gmail.com" });
function createUser3(user) {
}
function createUser4() {
    return { name: "", enailD: "", isActive: true };
}
createUser3({ name: "", enailD: "", isActive: true });
