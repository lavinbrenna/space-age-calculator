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
  test("should return a person's age on Earth", ()=>{
    expect(person.earthAge()).toEqual(31);
  });
  test("should return a person's age on Mercury", ()=>{
    expect(person.mercuryAge()).toEqual(7.44);
  });
});