interface IPerson4 {
  name: string;
  abe?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number){}
}

let jack4: IPerson4 = new Person4("jack", 25);

console.log(jack4);