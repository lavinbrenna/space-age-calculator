export default class Person{
  constructor(age, gender){
    this.age = age;
    this.gender = gender;
    this.lifeExpectancy = 0;
  }

  earthAge(){
    return this.age;
  }

  earthLifeExpectancy(){
    if(this.gender === "female"){
      this.lifeExpectancy += 75.6;
      return this.lifeExpectancy;
    }else if(this.gender === "male"){
      this.lifeExpectancy += 70.8;
      return this.lifeExpectancy;
    }else{
      //this is based on the average of m/f life expectancies as there is not a solid number on non-binary life expectancy
      this.lifeExpectancy += 73.2;
      return this.lifeExpectancy;
    }
  }

  mercuryAge(){
    let mercuryAge = parseFloat((this.age * .24).toFixed(2));
    return mercuryAge;
  }
  mercuryLifeExpectancy(){
    let mercuryLE = parseFloat((this.lifeExpectancy * .24).toFixed(2));
    return mercuryLE;
  }
  venusAge(){
    let venusAge = parseFloat((this.age * .62).toFixed(2));
    return venusAge;
  }
  venusLifeExpectancy(){
    let venusLE = parseFloat((this.lifeExpectancy * .62).toFixed(2));
    return venusLE;
  }
  marsAge(){
    let marsAge = parseFloat((this.age * 1.88).toFixed(2));
    return marsAge;
  }
  marsLifeExpectancy(){
    let marsLE = parseFloat((this.lifeExpectancy * 1.88).toFixed(2));
    return marsLE;
  }
  jupiterAge(){
    let jupiterAge = parseFloat((this.age * 11.86).toFixed(2));
    return jupiterAge;
  }
  jupiterLifeExpectancy(){
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
  plutoAge(){
    let plutoAge = parseFloat((this.age * 248.59).toFixed(2));
    return plutoAge;
  }
}