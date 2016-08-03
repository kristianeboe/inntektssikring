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
    return insurance_premium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  },

})
Template.features.events({
  'input #gross_salary_input': function() {
    console.log("keyup");
    gross_salary = event.target.value.replace("\s/g", "");
    gross_salary_input = $("#input-group-gross_salary")
    console.log(gross_salary);
    if (gross_salary > 260000 && gross_salary < 2500000) {
      gross_salary_input.removeClass("has-error")
      gross_salary_input.addClass("has-success")
      Session.set("gross_salary", gross_salary)
      console.log("updating slider now");
      insurance_slider = document.getElementById("insurance_slider")
      insurance_slider.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': Session.get("net_salary") - Session.get("payout")
        }
      })
      console.log("updated");

      updateState()
    }
  },
  'blur #gross_salary_input': function() {
    gross_salary = event.target.value.replace("\s/g", "");
    if (gross_salary == "") {
      gross_salary = event.target.placeholder
    }
    if (gross_salary <= 260000 || gross_salary >= 2500000) {
      $("#input-group-gross_salary").addClass("has-error")
    }
  },/*
  'input #gross_salary_input' : function() {
    console.log("input");
  },
  'change #gross_salary_input' : function() {
    console.log("change");
  },*/
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
    age = event.target.value
    if (age == "") {
      age = event.target.placeholder
    }
    if (age < 18 || age > 67) {
      $("#input-group-age").addClass("has-error")
    }
  }
})
