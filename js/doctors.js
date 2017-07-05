var apiKey = require('./../.env').apiKey;


Doctors = function() {

};

Doctors.prototype.getDoctors = function(symptomInput, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptomInput+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(results) {
      displayDoctors(results);
    })
    .fail(function(){
      $('.showDoctors').text("Sorry, there is not a doctor who currently specializes in that area.");
  });
};

exports.doctorsModule = Doctors;
