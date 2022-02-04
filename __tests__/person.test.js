/* eslint-disable no-undef */
import Person from './../src/js/person.js';

describe('Person', ()=>{
  let person;

  beforeEach(()=>{
    person = new Person(31);
  });

  test("should return a person's age", ()=>{
    expect(person.age).toEqual(31);
  });
});