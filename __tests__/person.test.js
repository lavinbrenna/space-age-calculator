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
  });
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
    expect(person1.mercuryLifeExpectancy()).toEqual(18.14);
    expect(person2.mercuryLifeExpectancy()).toEqual(16.99);
    expect(person3.mercuryLifeExpectancy()).toEqual(17.57);
  });
  test("should return a person's age on Venus ex: 19.22", ()=>{
    expect(person1.venusAge()).toEqual(19.22);
    expect(person2.venusAge()).toEqual(9.3);
    expect(person3.venusAge()).toEqual(14.88);
  });
  test("should return a person's age on Mars ex: 58.28", ()=>{
    expect(person1.marsAge()).toEqual(58.28);
    expect(person2.marsAge()).toEqual(28.20);
    expect(person3.marsAge()).toEqual(45.12);
  });
  test("should return a person's age on Jupiter ex: 367.66", ()=>{
    expect(person1.jupiterAge()).toEqual(367.66);
    expect(person2.jupiterAge()).toEqual(177.90);
    expect(person3.jupiterAge()).toEqual(284.64);
  });
  test("should return a person's age on Saturn ex: 913.26", ()=>{
    expect(person1.saturnAge()).toEqual(913.26);
    expect(person2.saturnAge()).toEqual(441.9);
    expect(person3.saturnAge()).toEqual(707.04);
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
  });
});