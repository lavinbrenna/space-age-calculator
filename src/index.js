import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from "./js/person.js";

function keithRichards(){
  let futureKeith = 2073 - 1943;
  let keithInDogYears = futureKeith * 7;
  let keithDog = new Person(keithInDogYears, "male");
  let jupiterDogKeith = keithDog.planetaryAge('jupiter');
  console.log(jupiterDogKeith);
  return jupiterDogKeith;
}


function mayFlyLife(userAge){
  let ageOfSun = 4603000000;
  let days = 365;
  let hours = 24;
  let minutes = 60;
  let fiveMinutes = minutes/5;
  let mayFlyLives = days * hours * fiveMinutes;
  let userMayFlyLives = userAge * mayFlyLives;
  let flyCompare = mayFlyLives/ageOfSun;
  let userCompare = userAge/ageOfSun;
  return `You have lived longer than ${userMayFlyLives} mayflies! A mayfly's age is ${parseFloat(flyCompare)} times the age of the sun. You are ${parseFloat(userCompare)} times the age of the sun (in case you don't know, that e-9 means that there are that many 0s before your number even starts)! `;
}

$(".keith").text(keithRichards());
$("form#ageForm").on('submit', function(event){
  event.preventDefault();
  $("#userInfo").show();
  let inputAge = $("input#userAge").val();
  let inputGender = $("select#userGender option:selected").val();
  let inputPlanet = $("select#userPlanet option:selected").val();
  let person = new Person(inputAge, inputGender);
  let ageOnPlanet = person.planetaryAge(inputPlanet);
  let lifeExpectancy = person.planetaryExpectancy(inputPlanet);
  let leftToLive = person.lifeLeft(inputPlanet);
  $("#planet, #thisPlanet").text(inputPlanet);
  $("#gender").text(inputGender);
  $("#planetAge").text(ageOnPlanet);
  $("#planetExpect").text(lifeExpectancy);
  $("#yearsLeft").text(leftToLive);
  $("#flyLife").text(mayFlyLife(inputAge));
});

