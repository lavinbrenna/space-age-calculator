/* eslint-disable no-undef */
import Person from './../src/js/person.js';

describe('Person', ()=>{
  
  let person1;
  let person2;
  let person3;

  beforeEach(()=>{
    person1 = new Person(31, "female");
    person2 = new Person(31, "male");
    person3 = new Person(31, "non-binary");

  });

  test("should create a person object with age and gender constructor", ()=>{
    expect(person1.age).toEqual(31);
    expect(person1.gender).toEqual("female");
  });
  test("should return avg life expectancy based on gender ex: female", ()=>{
    expect(person1.earthLifeExpectancy()).toEqual(75.6);
  });
  test("should return avg life expectancy based on gender ex: male", ()=>{
    expect(person2.earthLifeExpectancy()).toEqual(70.8);
  });
  test("should return avg life expectancy based on gender ex: non-binary", ()=>{
    expect(person3.earthLifeExpectancy()).toEqual(73.2);
  });
  test("should return a person's age on Earth ex: 31", ()=>{
    expect(person1.earthAge()).toEqual(31);
  });
  test("should return a person's age on Mercury ex: 7.44", ()=>{
    expect(person1.mercuryAge()).toEqual(7.44);
  });
  test("should return a person's age on Venus ex: 19.22", ()=>{
    expect(person1.venusAge()).toEqual(19.22);
  });
  test("should return a person's age on Mars ex: 58.28", ()=>{
    expect(person1.marsAge()).toEqual(58.28);
  });
  test("should return a person's age on Jupiter ex: 367.66", ()=>{
    expect(person1.jupiterAge()).toEqual(367.66);
  });
  test("should return a person's age on Saturn ex: 913.26", ()=>{
    expect(person1.saturnAge()).toEqual(913.26);
  });
  test("should return a person's age on Uranus ex: 2604.31", ()=>{
    expect(person1.uranusAge()).toEqual(2604.31);
  });
  test("should return a person's age on Neptune ex: 5108.49",()=>{
    expect(person1.neptuneAge()).toEqual(5108.49);
  });
  test("should return a person's age on Pluto ex: 7706.29", ()=>{
    expect(person1.plutoAge()).toEqual(7706.29);
  });
});