
var Doctors = require('./../js/doctors.js').doctorsModule;

// var displayHumidity = function(city, humidityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// }

var displayDoctors = function(medicalIssue, doctorData) {
  $('.showIssue').append('The medical issue you are concerned with is' + medicalIssue + "%");
};

$(document).ready(function() {
  var newDoctors = new Doctors();

  $('#doctor-form').submit(function(event) {
    event.preventDefault();

  $('#show-doctors').click(function() {
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val("");
    currentDoctorsObject.getDoctors(medicalIssue, displayDoctors);
    });
  });
});

// var Calculator = require('./../js/backend.js').calculatorModule;
//
// $(document).ready(function() {
//   $('#ping-pong-form').submit(function(event) {
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var simpleCalculator = new Calculator("hot pink");
//     var output = simpleCalculator.pingPong(goal);
//     output.forEach(function(element) {
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });
