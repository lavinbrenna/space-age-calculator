import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from "./js/person.js";


//how old is keith richards function
function keithRichards(){
  let futureKeith = 2073 - 1943;
  let keithInDogYears = futureKeith * 7;
  let keithDog = new Person(keithInDogYears, "male");
  let jupiterDogKeith = keithDog.planetaryAge('jupiter');
  console.log(jupiterDogKeith);
  return jupiterDogKeith;
}

$(".keith").text(keithRichards());


//mayfly function