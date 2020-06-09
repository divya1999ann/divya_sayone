$(document).ready(function() {
        var age = "";
        $('#date_picker').datepicker({
            onSelect: function(value, ui) {
                var today = new Date();
                age = today.getFullYear() - ui.selectedYear;
                $('#age').val(age);
            },
            changeYear:true,
            changeMonth:true
           
        });
    });


$(document).ready(function(){
  $('#countries').select2();
  $('#countries').on('select2:select', function (e) {   
  $('#state').select2();
  $("#state").empty();
  var $states= {
    "India":["Kerala", "Andhra Pradesh", "Mizoram","Maharashtra","Jammu Kashmir","Tamil Nadu"],
    "USA":["California","Washington","Hola","Ontaria"],
    "Russia":["Adygey", "Altai", "Bashkortostan", "Buryat", "Chechnya", "Chuvash"],
    "Japan":["Hokkaido", "Tohoku", "Kanto", "Chubu"]
  }
  var data = e.params.data;
  console.log($states[data.text]);
  var t=$states[data.text];
  $("#state").select2({
    data: t
  });
});

//$('#countries').select2('destroy');
//$('#example').off('select2:select');
//$('#state').select2('destroy');
});
    

$(function() {
 
  $.validator.addMethod('validMob', function(value, element) {
    return  this.optional(element) || /^\d{10}$/.test(value);
  }, 'Enter a valid mobile number');

  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg !== value;
  }, "Value must not equal arg");
  

  $("#reg-form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        mob:{
         validMob:true
        },
        dob:{
            required:true,
        },
        country:{   
         valueNotEquals: "default" }
       
      },
      messages: {
        name: "Please enter your name",
        email: {
            required:'Please enter your email id',
            email:'Please enter a valid email id'
        },
    
        dob:"Please enter your DOB",
        country: { 
        valueNotEquals: "Please select a country" 
      }
  
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
});

  