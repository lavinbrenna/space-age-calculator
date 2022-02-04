export default class Person{
  constructor(age, gender){
    this.age = age;
    this.gender = gender;
    this.lifeExpectancy = 0;
  }

  planetaryAge(planet){
    if(planet === "earth"){
      return this.age;
    }
    else if(planet === "mercury"){

      return parseFloat((this.age * .24).toFixed(2));
    }
    else if(planet === "venus"){
      return parseFloat((this.age * .62).toFixed(2));
    }
    else if(planet === "mars"){
      return parseFloat((this.age * 1.88).toFixed(2));
    }
    else if(planet === "jupiter"){
      return parseFloat((this.age * 11.86).toFixed(2));
    }
    else{
      return 0;
    }
  }
}
/*
  lifeExpectancy(){
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

*/

/*
I decided to go an entirely new direction for my project, I was writing a function for each planet and each planet's life expectancy separately, but realized that's not necessary. I wanted to keep this code to show documentation of where I was originally going so it can be compared with where it ended up.
  mercury(age){
    let mercuryAge = parseFloat((age * .24).toFixed(2));
    return mercuryAge;
  }
  venus(age){
    let venusAge = parseFloat((this.age * .62).toFixed(2));
    return venusAge;
  }
  mars(age){
    let marsAge = parseFloat((this.age * 1.88).toFixed(2));
    return marsAge;
  }
  jupiter(age){
    let jupiterAge = parseFloat((this.age * 11.86).toFixed(2));
    return jupiterAge;
  }
  saturn(age){
    let saturnAge = parseFloat((this.age * 29.46).toFixed(2));
    return saturnAge;
  }
  uranus(age){
    let uranusAge = parseFloat((this.age * 84.01).toFixed(2));
    return uranusAge;
  }
  neptuneAge(age){
    let neptuneAge = parseFloat((this.age * 164.79).toFixed(2));
    return neptuneAge;
  }
  pluto(age){
    let plutoAge = parseFloat((this.age * 248.59).toFixed(2));
    return plutoAge;
  }

    
    else if(planet ==="saturn"){
      parseFloat((this.age * 29.46).toFixed(2));
    }
    else if(planet === "uranus"){
      parseFloat((this.age * 84.01).toFixed(2));
    }
    else if(planet === "neptune"){
      parseFloat((this.age * 164.79).toFixed(2));
    }
    else{
      parseFloat((this.age * 248.59).toFixed(2));
    }

  mercuryLifeExpectancy(){
    let mercuryLE = parseFloat((this.lifeExpectancy * .24).toFixed(2));
    return mercuryLE;
  }
  venusLifeExpectancy(){
    let venusLE = parseFloat((this.lifeExpectancy * .62).toFixed(2));
    return venusLE;
  }
  marsLifeExpectancy(){
    let marsLE = parseFloat((this.lifeExpectancy * 1.88).toFixed(2));
    return marsLE;
  }
  jupiterLifeExpectancy(){
    let jupiterLE = parseFloat((this.lifeExpectancy * 11.86).toFixed(2));
    return jupiterLE;
  }*/