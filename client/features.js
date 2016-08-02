Template.features.helpers({
  gross_salary() {
    gross_salary = Session.get('gross_salary')
    gross_salary = gross_salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return gross_salary
  },
  age() {
    age = Session.get('age')
    age = age.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return age
  },
  insurance_payout() {
    insurance_payout = Math.floor(Session.get("insurance_payout")/12)
    insurance_payout = insurance_payout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return insurance_payout
  }

})
Template.features.events({
  'input #gross_salary_input':function() {
    gross_salary = event.target.value
    Session.set("gross_salary", gross_salary)
    updateState()
  },
  'input #age_input': function() {
    age = event.target.value
    if (age >17 && age <68) {
      Session.set("age", age)
      updateState()
    }
  },
  'click #student': function() {
    gross_salary = 50000
    age = 21
    debt = 300000
    Session.set("age", age)
    Session.set("gross_salary", gross_salary)
    Session.set("debt", debt)
    updateState()
    $(".input_fields").slideDown()
   },
   'click #nyansatt': function() {
    gross_salary = 500000
    age = 26
    debt = 500000
    Session.set("age", age)
    Session.set("gross_salary", gross_salary)
    Session.set("debt", debt)
    updateState()
    $(".input_fields").slideDown()
   },
   'click #dreven': function() {
    gross_salary = 750000
    age = 35
    debt = 4000000
    Session.set("age", age)
    Session.set("gross_salary", gross_salary)
    Session.set("debt", debt)
    updateState()
    $(".input_fields").slideDown()
   },
})

Template.sliders.events({
  'set #ageSlider':function() {
    age = event.target.value
    Session.set("age", age)
    updateState()
  }
})
