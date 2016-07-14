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
  }

})
Template.features.events({
  'input #salary_range':function() {
    gross_salary = event.target.value
    Session.set("gross_salary", gross_salary)
    updateState()
  },
  'input #age_range':function() {
    age = event.target.value
    Session.set("age", age)
    updateState()
  }
})
