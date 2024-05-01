import { NumbertoNumberFunc } from "./high-order";

const fn:NumbertoNumberFunc = add(1);
const result = fn(2);

console.log(result);
console.log(add(1)(0));;