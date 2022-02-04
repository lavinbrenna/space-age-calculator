/* eslint-disable no-undef */
import Person from './../src/js/person.js';

describe('Person', ()=>{
  let person1;
  let person2;
  let person3;

  beforeEach(()=>{
    person1 = new Person(31, "female");
    person2 = new Person(15, "male");
    person3 = new Person(24, "non-binary");
  });
  test("should create a person object with age and gender constructor", ()=>{
    expect(person1.age).toEqual(31);
    expect(person1.gender).toEqual("female");
    expect(person2.age).toEqual(15);
    expect(person2.gender).toEqual("male");
    expect(person3.age).toEqual(24);
    expect(person3.gender).toEqual("non-binary");
  });
  test("should return 0 if a person doesn't enter a planet", ()=>{
    expect(person1.planetaryAge("")).toEqual(0);
    expect(person2.planetaryAge("")).toEqual(0);
    expect(person3.planetaryAge("")).toEqual(0);
  });
  test("should determine a person's age on Earth", ()=>{
    expect(person1.planetaryAge("earth")).toEqual(31);
    expect(person2.planetaryAge("earth")).toEqual(15);
    expect(person3.planetaryAge("earth")).toEqual(24);
  });
  test("should determine a person's age on Mercury", ()=>{
    expect(person1.planetaryAge("mercury")).toEqual(7.44);
    expect(person2.planetaryAge("mercury")).toEqual(3.6);
    expect(person3.planetaryAge("mercury")).toEqual(5.76);
  });
  test("should determine a person's age on Venus", ()=>{
    expect(person1.planetaryAge("venus")).toEqual(19.22);
    expect(person2.planetaryAge("venus")).toEqual(9.3);
    expect(person3.planetaryAge("venus")).toEqual(14.88);
  });
  test("should determine a person's age on Mars", ()=>{
    expect(person1.planetaryAge("mars")).toEqual(58.28);
    expect(person2.planetaryAge("mars")).toEqual(28.20);
    expect(person3.planetaryAge("mars")).toEqual(45.12);
  });
  test("should determine a person's age on Jupiter", ()=>{
    expect(person1.planetaryAge("jupiter")).toEqual(367.66);
    expect(person2.planetaryAge("jupiter")).toEqual(177.90);
    expect(person3.planetaryAge("jupiter")).toEqual(284.64);
  });
  test("should determine a person's age on Saturn", ()=>{
    expect(person1.planetaryAge("saturn")).toEqual(913.26);
    expect(person2.planetaryAge("saturn")).toEqual(441.9);
    expect(person3.planetaryAge("saturn")).toEqual(707.04);
  });
  test("should determine a person's age on Uranus", ()=>{
    expect(person1.planetaryAge("uranus")).toEqual(2604.31);
    expect(person2.planetaryAge("uranus")).toEqual(1260.15);
    expect(person3.planetaryAge("uranus")).toEqual(2016.24);
  });
  test("should determine a person's age on Neptune", ()=>{
    expect(person1.planetaryAge("neptune")).toEqual(5108.49);
    expect(person2.planetaryAge("neptune")).toEqual(2471.85);
    expect(person3.planetaryAge("neptune")).toEqual(3954.96);
  });
});



/*

I decided to go an entirely new direction for my project, I was writing a function for each planet and each planet's life expectancy separately, but realized that's not necessary. I wanted to keep this code to show documentation of where I was originally going so it can be compared with where it ended up.
  test("should return avg life expectancy based on gender ex: female", ()=>{
    expect(person1.earthLifeExpectancy()).toEqual(75.6);
    expect(person1.lifeExpectancy).toEqual(75.6);
  });
  test("should return avg life expectancy based on gender ex: male", ()=>{
    expect(person2.earthLifeExpectancy()).toEqual(70.8);
    expect(person2.lifeExpectancy).toEqual(70.8);
  });
  test("should return avg life expectancy based on gender ex: non-binary", ()=>{
    expect(person3.earthLifeExpectancy()).toEqual(73.2);
    expect(person3.lifeExpectancy).toEqual(73.2);
  });
  test("should return a person's age on Earth ex: 31, 15, 24", ()=>{
    expect(person1.earthAge()).toEqual(31);
    expect(person2.earthAge()).toEqual(15);
    expect(person3.earthAge()).toEqual(24);
  });
  test("should return a person's age on Mercury ex: 7.44, 3.6, 5.76", ()=>{
    expect(person1.mercuryAge()).toEqual(7.44);
    expect(person2.mercuryAge()).toEqual(3.6);
    expect(person3.mercuryAge()).toEqual(5.76);
  });
  test("should return a person's life expectancy on Mercury", ()=>{
    person1.earthLifeExpectancy();
    person2.earthLifeExpectancy();
    person3.earthLifeExpectancy();
    expect(person1.mercury()).toEqual(18.14);
    expect(person2.mercury()).toEqual(16.99);
    expect(person3.mercuryLifeExpectancy()).toEqual(17.57);
  });
  test("should return a person's age on Venus ex: 19.22", ()=>{
    expect(person1.venusAge()).toEqual(19.22);
    expect(person2.venusAge()).toEqual(9.3);
    expect(person3.venusAge()).toEqual(14.88);
  });
  test("should return a person's life expectancy on Venus", ()=>{
    person1.earthLifeExpectancy();
    person2.earthLifeExpectancy();
    person3.earthLifeExpectancy();
    expect(person1.venusLifeExpectancy()).toEqual(46.87);
    expect(person2.venusLifeExpectancy()).toEqual(43.90);
    expect(person3.venusLifeExpectancy()).toEqual(45.38);
  });
  test("should return a person's age on Mars ex: 58.28", ()=>{
    expect(person1.marsAge()).toEqual(58.28);
    expect(person2.marsAge()).toEqual(28.20);
    expect(person3.marsAge()).toEqual(45.12);
  });
  test("should return a person's life expectancy on Mars", ()=>{
    person1.earthLifeExpectancy();
    person2.earthLifeExpectancy();
    person3.earthLifeExpectancy();
    expect(person1.marsLifeExpectancy()).toEqual(142.13);
    expect(person2.marsLifeExpectancy()).toEqual(133.10);
    expect(person3.marsLifeExpectancy()).toEqual(137.62);
  });
  test("should return a person's age on Jupiter ex: 367.66", ()=>{
    expect(person1.jupiterAge()).toEqual(367.66);
    expect(person2.jupiterAge()).toEqual(177.90);
    expect(person3.jupiterAge()).toEqual(284.64);
  });
  test("should return a person's life expectancy on Jupiter", ()=>{
    person1.earthLifeExpectancy();
    person2.earthLifeExpectancy();
    person3.earthLifeExpectancy();
    expect(person1.jupiterLifeExpectancy()).toEqual(896.62);
    expect(person2.jupiterLifeExpectancy()).toEqual(839.69);
    expect(person3.jupiterLifeExpectancy()).toEqual(868.15);
  });
  test("should return a person's age on Saturn ex: 913.26", ()=>{
    expect(person1.saturnAge()).toEqual(913.26);
    expect(person2.saturnAge()).toEqual(441.9);
    expect(person3.saturnAge()).toEqual(707.04);
  });
  test("should return a person's life expectancy on Saturn", ()=>{
    person1.earthLifeExpectancy();
    person2.earthLifeExpectancy();
    person3.earthLifeExpectancy();
  });
  test("should return a person's age on Uranus ex: 2604.31", ()=>{
    expect(person1.uranusAge()).toEqual(2604.31);
    expect(person2.uranusAge()).toEqual(1260.15);
    expect(person3.uranusAge()).toEqual(2016.24);
  });
  test("should return a person's age on Neptune ex: 5108.49",()=>{
    expect(person1.neptuneAge()).toEqual(5108.49);
    expect(person2.neptuneAge()).toEqual(2471.85);
    expect(person3.neptuneAge()).toEqual(3954.96);
  });
  test("should return a person's age on Pluto ex: 7706.29", ()=>{
    expect(person1.plutoAge()).toEqual(7706.29);
    expect(person2.plutoAge()).toEqual(3728.85);
    expect(person3.plutoAge()).toEqual(5966.16);
  });*/