import { Student,Eat } from "./Student-module";


let std = new Student();
let eat:Eat;

eat =  new Eat("makarna","icetea");

std.dersCalis();
std.eat(eat);
