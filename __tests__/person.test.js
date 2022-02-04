/* eslint-disable no-undef */
import Person from './../src/js/person.js';

describe('Person', ()=>{
  let person;

  beforeEach(()=>{
    person = new Person(31);
  });

  test("should create a person object with age constructor", ()=>{
    expect(person.age).toEqual(31);
  });
  test("should return a person's age on Earth ex: 31", ()=>{
    expect(person.earthAge()).toEqual(31);
  });
  test("should return a person's age on Mercury ex: 7.44", ()=>{
    expect(person.mercuryAge()).toEqual(7.44);
  });
  test("should return a person's age on Venus ex: 19.22", ()=>{
    expect(person.venusAge()).toEqual(19.22);
  });
  test("should return a person's age on Mars ex: 58.28", ()=>{
    expect(person.marsAge()).toEqual(58.28);
  });
  test("should return a person's age on Jupiter ex: 367.66", ()=>{
    expect(person.jupiterAge()).toEqual(367.66);
  });
  test("should return a person's age on Saturn ex: 913.26", ()=>{
    expect(person.saturnAge()).toEqual(913.26);
  });
});