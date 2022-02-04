export default class Person{
  constructor(age){
    this.age = age;
  }

  earthAge(){
    return this.age;
  }
  mercuryAge(){
    let mercuryAge = parseFloat((this.age * .24).toFixed(2));
    return mercuryAge;
  }
  venusAge(){
    let venusAge = parseFloat((this.age * .62).toFixed(2));
    return venusAge;
  }
  marsAge(){
    let marsAge = parseFloat((this.age * 1.88).toFixed(2));
    return marsAge;
  }
}