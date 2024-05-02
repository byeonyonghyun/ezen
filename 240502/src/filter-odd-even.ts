import { range } from "./range";

const array: number[] = range(1,11);

const odds: number[] = array.filter((value)=> value <= 5);
const evens: number[] = array.filter((value)=> value > 5);

console.log(odds, evens);