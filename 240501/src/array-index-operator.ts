const numbers: number[] = [1,2,3,4,5];
for(let i = 0; i < numbers.length; i++) {
  const item: number = numbers[i];
  console.log(item);
}

const array = [1,2,3,4,5];
const [f, s, t, n, g] = array;
console.log(f, s, t, n, g);

interface testObj {
  first: string;
  second: string;
  third: string;
}

const names: testObj = {
  first: "david",
  second: "james",
  third: "janes",
}

for(let i in names) {
  console.log(i);
}