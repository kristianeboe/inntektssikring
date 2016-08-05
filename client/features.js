Template.features.helpers({
  gross_salary() {
    gross_salary = Session.get('gross_salary')
    gross_salary = gross_salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return gross_salary
  },
  age() {
    age = Session.get('age')
    age = age.toString()
    return age
  },
  insurance_payout() {
    insurance_payout = Math.floor(Session.get("insurance_payout") / 12)
    insurance_payout = insurance_payout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return insurance_payout
  },
  insurance_premium() {
    insurance_premium = Math.floor((Session.get("insurance_premium"))/12)
    insurance_premium = Math.ceil(insurance_premium/10)*10
    return insurance_premium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  },

})
Template.features.events({
  'input #gross_salary_input': function() {
    //var Highcharts = require('highcharts');
    //var chart=$("#pieChart").highcharts();
    //console.log(chart);
    gross_salary = event.target.value.replace(/\s/g, "");
    gross_salary_input = $("#input-group-gross_salary")
    console.log(gross_salary);
    if (gross_salary > 260000 && gross_salary < 2500000) {
      gross_salary_input.removeClass("has-error")
      gross_salary_input.addClass("has-success")
      Session.set("gross_salary", gross_salary)
      updateState()
      console.log("updating slider now");
      insurance_slider = document.getElementById("insurance_slider")
      insurance_slider.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': Session.get("net_salary") - Session.get("payout")
        }
      })
      console.log("updated");


    }
  },
  'blur #gross_salary_input': function() {
    gross_salary = event.target.value.replace(/\s/g, "");
    console.log(gross_salary);
    if (gross_salary == "") {
      gross_salary = Session.get("gross_salary")
      event.target.value = gross_salary
    }
    if (gross_salary <= 260000 || gross_salary >= 2500000) {
      console.log(gross_salary);
      gross_salary_input = $("#input-group-gross_salary")
      gross_salary_input.removeClass("has-success")
      gross_salary_input.addClass("has-error")
    }
  },
  'focus #gross_salary_input': function() {
    event.target.value = ""
  },
  'input #age_input': function() {
    age = event.target.value
    age_input = $("#input-group-age")
    if (age > 17 && age < 68) {
      age_input.removeClass("has-error")
      age_input.addClass("has-success")
      Session.set("age", age)
      updateState()
    }
  },
  'blur #age_input': function() {
    age = event.target.value.replace(/\s/g, "");
    if (age == "") {
      age = Session.get("age")
      event.target.value = age
    }
    if (age < 18 || age > 67) {
      age_input = $("#input-group-age")
      age_input.removeClass("has-success")
      age_input.addClass("has-error")
    }
  },
  'focus #age_input': function() {
    event.target.value = ""
  }
})
