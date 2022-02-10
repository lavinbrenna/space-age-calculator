export default class Person{
  constructor(age, gender){
    this.age = age;
    this.gender = gender;
  }

  planetaryAge(planet){
    let planetAge = 0;
    if(planet === "earth"){
      planetAge = this.age;
      return planetAge;
    }
    else if(planet === "mercury"){
      planetAge = parseFloat((this.age / .24).toFixed(2));
      return planetAge;
    }
    else if(planet === "venus"){
      planetAge = parseFloat((this.age / .62).toFixed(2));
      return planetAge;
    }
    else if(planet === "mars"){
      planetAge = parseFloat((this.age / 1.88).toFixed(2));
      return planetAge;
    }
    else if(planet === "jupiter"){
      planetAge = parseFloat((this.age / 11.86).toFixed(2));
      return planetAge;
    }
    else if(planet ==="saturn"){
      planetAge = parseFloat((this.age / 29.46).toFixed(2));
      return planetAge;
    }
    else if(planet === "uranus"){
      planetAge = parseFloat((this.age / 84.01).toFixed(2));
      return planetAge;
    }
    else if(planet === "neptune"){
      planetAge = parseFloat((this.age / 164.79).toFixed(2));
      return planetAge;
    }
    else if(planet === "pluto"){
      planetAge = parseFloat((this.age / 248.59).toFixed(2));
      return planetAge;
    }
    else{
      return planetAge;
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
        return parseFloat((femaleLE / .24).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / .24).toFixed(2));
      }else{
        return parseFloat((nonBLE / .24).toFixed(2));
      }
    }else if(planet === "venus"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / .62).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / .62).toFixed(2));
      }else{
        return parseFloat((nonBLE / .62).toFixed(2));
      }
    }
    else if(planet === "mars"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / 1.88).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / 1.88).toFixed(2));
      }else{
        return parseFloat((nonBLE / 1.88).toFixed(2));
      }
    }
    else if(planet === "jupiter"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / 11.86).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / 11.86).toFixed(2));
      }else{
        return parseFloat((nonBLE / 11.86).toFixed(2));
      }
    }else if(planet === "saturn"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / 29.46).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / 29.46).toFixed(2));
      }else{
        return parseFloat((nonBLE / 29.46).toFixed(2));
      }
    }else if(planet === "uranus"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / 84.01).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / 84.01).toFixed(2));
      }else{
        return parseFloat((nonBLE / 84.01).toFixed(2));
      }
    }
    else if(planet === "neptune"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / 164.79).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / 164.79).toFixed(2));
      }else{
        return parseFloat((nonBLE / 164.79).toFixed(2));
      }
    }
    else if(planet === "pluto"){
      if(this.gender === "female"){
        return parseFloat((femaleLE / 248.59).toFixed(2));
      }else if(this.gender === "male"){
        return parseFloat((maleLE / 248.59).toFixed(2));
      }else{
        return parseFloat((nonBLE / 248.59).toFixed(2));
      }
    }
    else{
      return 0;
    }
  }
  lifeLeft(planet){
    let currentAge = this.planetaryAge(planet);
    let lifeExpected = this.planetaryExpectancy(planet);
    let lifeLeft = parseFloat(lifeExpected - currentAge).toFixed(2);
    if(currentAge < lifeExpected){
      return "You have " + lifeLeft + " years left!";
    }else if(currentAge > lifeExpected){
      return "You have lived " +  Math.abs(lifeLeft) + " years past your life expectancy!";
    }else{
      return this.age;
    }
  }

}
