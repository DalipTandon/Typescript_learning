"use strict";
//union in typescript is used when we are't sure about what can be datatype of a object
Object.defineProperty(exports, "__esModule", { value: true });
var points; //the points variable can either have number or string as a type
points = 33;
points = "thirty";
var myUser; //the myUser object can be of either user or admin type
var numberArray = [1, 2, 3];
var stringArray = ["1", "2", "3"];
var mixedArray = [1, 2, 3]; //we can ahave either number or string as array elements
var mixedArray2 = [1, 2, "3", false]; //we can have anything as array elements
