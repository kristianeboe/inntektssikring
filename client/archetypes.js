Template.archetypes.events({
  'click #student': function() {
    gross_salary = 50000
    age = 21
    debt = 300000
    document.getElementById('salaryInput').value = gross_salary
    document.getElementById('salary_range').value = gross_salary
    document.getElementById('ageInput').value = age
    document.getElementById('age_range').value = age

    setState(gross_salary, age)
    Session.set("debt", debt)
  },
  'click #nyansatt': function() {
    gross_salary = 500000
    age = 26
    debt = 500000
    document.getElementById('salaryInput').value = gross_salary
    document.getElementById('salary_range').value = gross_salary
    document.getElementById('ageInput').value = age
    document.getElementById('age_range').value = age
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
  }
});
