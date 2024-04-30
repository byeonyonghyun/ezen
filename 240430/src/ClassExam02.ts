interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor( public name: string, public moveSpeed:number, private extra : string) {

  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}


const characterA = new Character("짱구", 50, 'move');

characterA.move();