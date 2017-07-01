var apiKey = require('./../.env').apiKey;
var displayDoctors= require('./../js/doctor-interface.js').displayDoctorsFunction;

Doctors = function() {

};

Doctors.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
    displayDoctors(medicalIssue, result.data.name);
  }) .fail(function(error){
     $('.showDoctors').text("Well, this is lousy...");
  });
};

exports.doctorsModule = Doctors;















// var displayHumidity= require('./../js/weather-interface.js').displayHumidityFunction;

// function Doctors(){
//
// }
//
//
//
// Doctors.prototype.getDoctors = function(medicalIssue, displayDoctors) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       displayDoctors(medicalIssue, result.main.medicalIssue);
//       $('.showDoctors').text("The doctors pertaining to" + medicalIssue + "are" + result.main.medicalIssue + "%");
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };

// Weather.prototype.getWeather = function(city, displayHumidity) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
//    .then(function(response) {
//      displayHumidity(city, response.main.humidity);
//       // $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//
//    }).fail(function(error) {
//       $('.showWeather').text(error.responseJSON.message);
//     });
// }
