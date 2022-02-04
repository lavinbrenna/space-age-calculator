export default class Person{
  constructor(age){
    this.age = age;
  }

  earthAge(){
    return this.age;
  }
  mercuryAge(){
    let mercuryAge = 0;
    mercuryAge = parseFloat((this.age * .24).toFixed(2));
    return mercuryAge;
  }
}