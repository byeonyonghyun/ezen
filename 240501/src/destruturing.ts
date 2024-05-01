interface IPerson {
  name: string;
  age: number;
}

const printPerson = ({name, age}: IPerson): void=> {
  
};
printPerson({name:"DAVID", age:22});

//객체 interface 함수 type