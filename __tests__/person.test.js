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
    expect(person1.planetaryAge("mercury")).toEqual(129.17);
    expect(person2.planetaryAge("mercury")).toEqual(62.5);
    expect(person3.planetaryAge("mercury")).toEqual(100);
  });

  test("should determine a person's age on Venus", ()=>{
    expect(person1.planetaryAge("venus")).toEqual(50);
    expect(person2.planetaryAge("venus")).toEqual(24.19);
    expect(person3.planetaryAge("venus")).toEqual(38.71);
  });

  test("should determine a person's age on Mars", ()=>{
    expect(person1.planetaryAge("mars")).toEqual(16.49);
    expect(person2.planetaryAge("mars")).toEqual(7.98);
    expect(person3.planetaryAge("mars")).toEqual(12.77);
  });

  test("should determine a person's age on Jupiter", ()=>{
    expect(person1.planetaryAge("jupiter")).toEqual(2.61);
    expect(person2.planetaryAge("jupiter")).toEqual(1.26);
    expect(person3.planetaryAge("jupiter")).toEqual(2.02);
  });

  test("should determine a person's age on Saturn", ()=>{
    expect(person1.planetaryAge("saturn")).toEqual(1.05);
    expect(person2.planetaryAge("saturn")).toEqual(0.51);
    expect(person3.planetaryAge("saturn")).toEqual(0.81);
  });

  test("should determine a person's age on Uranus", ()=>{
    expect(person1.planetaryAge("uranus")).toEqual(0.37);
    expect(person2.planetaryAge("uranus")).toEqual(0.18);
    expect(person3.planetaryAge("uranus")).toEqual(0.29);
  });

  test("should determine a person's age on Neptune", ()=>{
    expect(person1.planetaryAge("neptune")).toEqual(0.19);
    expect(person2.planetaryAge("neptune")).toEqual(0.09);
    expect(person3.planetaryAge("neptune")).toEqual(0.15);
  });

  test("should determine a person's age on Pluto", ()=>{
    expect(person1.planetaryAge("pluto")).toEqual(0.12);
    expect(person2.planetaryAge("pluto")).toEqual(0.06);
    expect(person3.planetaryAge("pluto")).toEqual(0.1);
  });

  test("should return 0 if no planet is entered", ()=>{
    expect(person1.planetaryExpectancy("")).toEqual(0);
    expect(person1.planetaryExpectancy("")).toEqual(0);
    expect(person1.planetaryExpectancy("")).toEqual(0);
  });

  test("should return avg life expectancy on earth, based on gender", ()=>{
    expect(person1.planetaryExpectancy("earth")).toEqual(75.6);
    expect(person2.planetaryExpectancy("earth")).toEqual(70.8);
    expect(person3.planetaryExpectancy("earth")).toEqual(73.2);
  });

  test("should return avg life expectancy on mercury, based on gender",()=>{
    expect(person1.planetaryExpectancy("mercury")).toEqual(315);
    expect(person2.planetaryExpectancy("mercury")).toEqual(295);
    expect(person3.planetaryExpectancy("mercury")).toEqual(305);
  });

  test("should return avg life expectancy on venus, based on gender", ()=>{
    expect(person1.planetaryExpectancy("venus")).toEqual(121.94);
    expect(person2.planetaryExpectancy("venus")).toEqual(114.19);
    expect(person3.planetaryExpectancy("venus")).toEqual(118.06);
  });

  test("should return avg life expectancy on mars, based on gender", ()=>{
    expect(person1.planetaryExpectancy("mars")).toEqual(40.21);
    expect(person2.planetaryExpectancy("mars")).toEqual(37.66);
    expect(person3.planetaryExpectancy("mars")).toEqual(38.94);
  });

  test("should return avg life expectancy on jupiter, based on gender", ()=>{
    expect(person1.planetaryExpectancy("jupiter")).toEqual(6.37);
    expect(person2.planetaryExpectancy("jupiter")).toEqual(5.97);
    expect(person3.planetaryExpectancy("jupiter")).toEqual(6.17);
  });

  test("should return avg life expectancy on saturn, based on gender", ()=>{
    expect(person1.planetaryExpectancy("saturn")).toEqual(2.57);
    expect(person2.planetaryExpectancy("saturn")).toEqual(2.40);
    expect(person3.planetaryExpectancy("saturn")).toEqual(2.48);
  });

  test("should return avg life expectancy on uranus, based on gender", ()=>{
    expect(person1.planetaryExpectancy("uranus")).toEqual(0.90);
    expect(person2.planetaryExpectancy("uranus")).toEqual(0.84);
    expect(person3.planetaryExpectancy("uranus")).toEqual(0.87);
  });

  test("should return avg life expectancy on neptune, based on gender", ()=>{
    expect(person1.planetaryExpectancy("neptune")).toEqual(0.46);
    expect(person2.planetaryExpectancy("neptune")).toEqual(0.43);
    expect(person3.planetaryExpectancy("neptune")).toEqual(0.44);
  });

  test("should return avg life expectancy on pluto, based on gender", ()=>{
    expect(person1.planetaryExpectancy("pluto")).toEqual(0.3);
    expect(person2.planetaryExpectancy("pluto")).toEqual(0.28);
    expect(person3.planetaryExpectancy("pluto")).toEqual(0.29);
  });

  test("should return years left on planet via age vs ALE", ()=>{
    let person4 = new Person(95, "female");
    expect(person1.lifeLeft("earth")).toEqual('You have 44.60 years left!');
    expect(person4.lifeLeft("neptune")).toEqual('You have lived 0.12 years past your life expectancy!');
  });
  test("should return this.age if no planet is entered", ()=>{
    expect(person1.lifeLeft("")).toEqual(31);
  });
});



