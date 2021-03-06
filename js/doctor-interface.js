var Doctors = require('./../js/doctors.js').doctorsModule;

var displayDoctors = function(results) {

  results.data.forEach(function(results) {
    $('#doctor-list').append('<br>'
    +'<li>' + '<h3> Factility/Practitioner: '+ '<h4><em>'+results.practices[0].name+'</em><h4>'+'</h3>' + '</li>'
    +'<li>' + '<h3> Phone Number: '+ '<h4><em>'+results.practices[0].phones[0].number+'</em><h4>'+'</h3>' + '</li>'
    + '<h3> Specialization: '+ '<h4><em>'+results.specialties[0].description+'</em><h4>'+'</h3>' + '<br>');
// '<li><h4>Facility/Practitioner Name</h4></li>'
  });
};

$(document).ready(function() {
  var newDoctors = new Doctors ();
  //Submit event for the form
  $('#doctors-form').submit(function(event) {
    event.preventDefault();

    // Gather inputted info from form and store it into userInput
    var symptomInput = $('#symptomInput').val();

    $('doctor').empty();
    newDoctors.getDoctors(symptomInput, displayDoctors);
  });
});

// exports.displayDoctorsFunction = displayDoctors;











// var displayHumidity = function(city, humidityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// }
//
// var displayDoctors = function(medicalIssue, doctorData) {
//   $('.showIssue').append('The medical issue you are concerned with is' + medicalIssue + "%");
// };
//
// $(document).ready(function() {
//   var newDoctors = new Doctors();
//
//   $('#doctor-form').submit(function(event) {
//     event.preventDefault();
//
//   $('#show-doctors').click(function() {
//     var medicalIssue = $('#medical-issue').val();
//     $('#medical-issue').val("");
//     currentDoctorsObject.getDoctors(medicalIssue, displayDoctors);
//     });
//   });
// });

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
