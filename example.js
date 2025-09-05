import { Dom } from "./main.js";
import { PlayGround } from "./playground.js";
  

let dom = new Dom();

let a = dom.select("#todo-wrapper").contents().find("span");
console.log(a);