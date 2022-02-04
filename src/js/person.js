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
  jupiterAge(){
    let jupiterAge = parseFloat((this.age * 11.86).toFixed(2));
    return jupiterAge;
  }
  saturnAge(){
    let saturnAge = parseFloat((this.age * 29.46).toFixed(2));
    return saturnAge;
  }
  uranusAge(){
    let uranusAge = parseFloat((this.age * 84.01).toFixed(2));
    return uranusAge;
  }
  neptuneAge(){
    let neptuneAge = parseFloat((this.age * 164.79).toFixed(2));
    return neptuneAge;
  }
}