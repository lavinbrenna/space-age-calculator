export default class Person{
  constructor(age, gender){
    this.age = age;
    this.gender = gender;
  }

  earthAge(){
    return this.age;
  }

  earthLifeExpectancy(){
    let lifeExpectancy = 0;
    if(this.gender === "female"){
      lifeExpectancy = 75.6;
    }else if(this.gender === "male"){
      lifeExpectancy = 70.8;
    }else{
      //this is based on the average of m/f life expectancies as there is not a solid number on non-binary life expectancy
      lifeExpectancy = 73.2;
    }
    return lifeExpectancy;
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
  plutoAge(){
    let plutoAge = parseFloat((this.age * 248.59).toFixed(2));
    return plutoAge;
  }
}