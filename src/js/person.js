export default class Person{
  constructor(age, gender){
    this.age = age;
    this.gender = gender;
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
    else if(planet ==="saturn"){
      return parseFloat((this.age * 29.46).toFixed(2));
    }
    else if(planet === "uranus"){
      return parseFloat((this.age * 84.01).toFixed(2));
    }
    else if(planet === "neptune"){
      return parseFloat((this.age * 164.79).toFixed(2));
    }
    else if(planet === "pluto"){
      return parseFloat((this.age * 248.59).toFixed(2));
    }
    else{
      return 0;
    }
  }

  planetaryExpectancy(planet){
    let femaleLE = 75.6;
    let maleLE = 70.8;
    let nonBLE = 73.2;
    if(planet === "earth") {
      if(this.gender === "female"){
        return femaleLE;
      }else if(this.gender ==="male"){
        return maleLE;
      }else{
        return nonBLE;
      }
    }else if(planet === "mercury"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * .24).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * .24).toFixed(2));
      }else{
        return parseFloat((nonBLE * .24).toFixed(2));
      }
    }else if(planet === "venus"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * .62).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * .62).toFixed(2));
      }else{
        return parseFloat((nonBLE * .62).toFixed(2));
      }
    }
    else if(planet === "mars"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * 1.88).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * 1.88).toFixed(2));
      }else{
        return parseFloat((nonBLE * 1.88).toFixed(2));
      }
    }
    else if(planet === "jupiter"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * 11.86).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * 11.86).toFixed(2));
      }else{
        return parseFloat((nonBLE * 11.86).toFixed(2));
      }
    }else if(planet === "saturn"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * 29.46).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * 29.46).toFixed(2));
      }else{
        return parseFloat((nonBLE * 29.46).toFixed(2));
      }
    }else if(planet === "uranus"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * 84.01).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * 84.01).toFixed(2));
      }else{
        return parseFloat((nonBLE * 84.01).toFixed(2));
      }
    }
    else if(planet === "neptune"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * 164.79).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * 164.79).toFixed(2));
      }else{
        return parseFloat((nonBLE * 164.79).toFixed(2));
      }
    }
    else if(planet === "pluto"){
      if(this.gender === "female"){
        return parseFloat((femaleLE * 248.59).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE * 248.59).toFixed(2));
      }else{
        return parseFloat((nonBLE * 248.59).toFixed(2));
      }
    }
    else{
      return 0;
    }
  }
  lifeLeft(){

  }

  //life left one each planet function!

  //how old is keith richards function

  //mayfly function
}
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
  }
  */