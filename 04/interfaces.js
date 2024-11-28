"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUSer = {
    _id: "222",
    email: "d@d",
    name: "Dalip",
    start: function () {
        return "started";
    },
};
var user = newUSer;
//************Public and private keywords in ********************/
var user2 = /** @class */ (function () {
    function user2(name, userId) {
        this.name = name;
        this.userId = userId;
        this.cityName = "Ludhiana";
        //public values are accessible by anyone ,private values have some level of security
    }
    return user2;
}());
