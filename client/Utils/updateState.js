
updateState = function() {
  /* A counter for how many times the state is changed/rendered
  timesStateIsUpdated = Session.get("timesStateIsUpdated")
  Session.set("timesStateIsUpdated", timesStateIsUpdated+1)
  console.log(timesStateIsUpdated+1);
  */

  // Get main session variables. Everything is calculated based on these
  age = Session.get("age")
  gross_salary = Session.get("gross_salary")
  insurance_payout = Session.get("insurance_payout")

  // Calculate insurance premium
  if (insurance_payout == 0) {
    insurance_premium = 0
  } else {
    insurance_premium = insurance_premium_calculation(insurance_payout, age, "bsc")
  }

  // Calculate net salary
  net_salary = (gross_salary * (1 - taxIndex(gross_salary) / 100))


  // Calculate NAV payout
  if (gross_salary <= 555456) {
    gross_payout = (gross_salary * 0.66)
  } else {
    gross_payout = (555456 * 0.66)
  }
  if (gross_salary * 0.66 < 166274) {
    gross_payout = 166274
  }
  if (age <= 26 && gross_salary * 0.66 < 210000) {
    gross_payout = 210000
  }

  // Calculate net NAV payout
  net_payout = gross_payout * (1 - taxIndex(gross_payout) / 100)

  // Set roof on insurance_payout based on gross_salary
  if (gross_salary < 350000 && insurance_payout > 90000) {
    insurance_payout = 90000
  } else if (gross_salary < 500000 && insurance_payout > 150000) {
    insurance_payout = 150000
  } else if (gross_salary < 600000 && insurance_payout > 200000) {
    insurance_payout = 200000
  } else if (insurance_payout > 240000) {
    insurance_payout = 240000
  }

  // Set a max roof for insurance_payout
  max = net_salary - net_payout
  if (max > 240000) {
    max = 240000
  }

  // Set a bottom for insurance_payout
  if ((+net_payout + +insurance_payout) > net_salary) {
    insurance_payout = net_salary - net_payout
    if (insurance_payout < 0) {
      insurance_payout = 0
    }
  }

  // Salary loss calculation and floor
  salary_loss = net_salary - net_payout - insurance_payout
  if (salary_loss < 0) {
    salary_loss = 0
  }

  // Calculate amount of coffee pr week to pay the insurance premium. Price of coffee is set to 25
  coffees = insurance_premium / 52 / 25
  // Always round up coffee unless it's less than 0.6
  if (coffees < 0.6) {
    coffees = 0
  }
  coffees = Math.ceil(coffees)

  // Round out all values
  gross_salary = Math.floor(gross_salary)
  net_salary = Math.floor(net_salary)
  net_payout = Math.floor(net_payout)
  salary_loss = Math.floor(salary_loss)
  insurance_payout = Math.floor(insurance_payout)
  insurance_premium = Math.floor(insurance_premium)
  new_monthly_salary = (Math.floor((net_salary - salary_loss)/12)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  // Set all session variables
  Session.set("gross_salary", gross_salary)
  Session.set("net_salary", net_salary)
  Session.set("payout", net_payout)
  Session.set("salary_loss", salary_loss)
  Session.set("insurance_payout", insurance_payout)
  Session.set("insurance_premium", insurance_premium)
  Session.set("coffees", coffees)
  Session.set("max", max)
  Session.set("new_monthly_salary", new_monthly_salary)

}
