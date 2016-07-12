Template.features.helpers({
  gross_salary() {
    gross_salary = Session.get('gross_salary')
    return gross_salary
  },
  age() {
    age = Session.get('age')
    return age
  }

})
Template.features.events({
  'input #salary_range':function() {
    gross_salary = event.target.value
    age = Session.get('age')
    setState(gross_salary, age)
  },
  'input #age_range':function() {
    age = event.target.value
    gross_salary = Session.get('gross_salary')
    setState(gross_salary, age)
  },
  'click #student': function() {
    gross_salary = 40000
    age = 21
    debt = 300000
    document.getElementById('salaryInput').value = gross_salary
    //document.getElementById('salary_range').value = gross_salary
    document.getElementById('ageInput').value = age
    //document.getElementById('age_range').value = age

    setState(gross_salary, age)
    Session.set("debt", debt)
  },
  'click #nyansatt': function() {
    gross_salary = 441400
    age = 26
    debt = 500000
    document.getElementById('salaryInput').value = gross_salary
    //document.getElementById('salary_range').value = gross_salary
    document.getElementById('ageInput').value = age
    //document.getElementById('age_range').value = age
    setState(gross_salary, age)
    Session.set("debt", 500000)
  },
  'click #arbeidsledig': function() {
    gross_salary = 0
    age = 26
    debt = 4000000
    document.getElementById('salaryInput').value = gross_salary
    document.getElementById('ageInput').value = age
    setState(gross_salary, age)
    Session.set("debt", debt)
  },
  'click #vgs'() {
    gross_salary = 370000
    age = 30
    debt = 4000000
    setState(gross_salary, age)
    document.getElementById('salary_range').value = gross_salary
    document.getElementById('age_range').value = age
  },
  'click #bsc'() {
    gross_salary = 450000
    age = 23
    debt = 4000000
    setState(gross_salary, age)
    document.getElementById('salary_range').value = gross_salary
    document.getElementById('age_range').value = age
  },
  'click #msc'() {
    gross_salary = 600000
    age = 26
    debt = 4000000
    setState(gross_salary, age)
    document.getElementById('salary_range').value = gross_salary
    document.getElementById('age_range').value = age
  }
})
