import './index.html';

taxIndex = function(income) {
  if (income <= 50000) {
    S = 0
  } else if (income <= 100000) {
    S = 9.5
  } else if (income <= 150000) {
    S = 13.8
  } else if (income <= 200000) {
    S = 16.7
  } else if (income <= 250000) {
    S = 18.9
  } else if (income <= 300000) {
    S = 21.8
  } else if (income <= 350000) {
    S = 23.7
  } else if (income <= 400000) {
    S = 25.1
  } else if (income <= 450000) {
    S = 26.2
  } else if (income <= 500000) {
    S = 27
  } else if (income <= 550000) {
    S = 27.7
  } else if (income <= 600000) {
    S = 28.9
  } else if (income <= 700000) {
    S = 31
  } else if (income <= 800000) {
    S = 32.6
  } else if (income <= 900000) {
    S = 33.9
  } else if (income <= 1000000) {
    S = 35.1
  } else {
    S = 41
  }
  return S
}

updateState = function() {
  /*
  timesStateIsUpdated = Session.get("timesStateIsUpdated")
  Session.set("timesStateIsUpdated", timesStateIsUpdated+1)
  console.log(timesStateIsUpdated+1);
  */

  age = Session.get("age")
  gross_salary = Session.get("gross_salary")
  insurance_payout = Session.get("insurance_payout")
  if (insurance_payout == 0) {
    insurance_premium = 0
  } else {
    insurance_premium = insurance_premium_calculation(insurance_payout, age, "bsc")
  }

  net_salary = (gross_salary * (1 - taxIndex(gross_salary) / 100))

  //minstepensjon, medium sats
  /*if (insurance_payout > gross_salary * 0.19) {
    insurance_payout = gross_salary * 0.19
    insurance_premium = insurance_premium_calculation(insurance_payout, age, "bsc")
  }*/

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

  net_payout = gross_payout * (1 - taxIndex(gross_payout) / 100)

  if (gross_salary < 350000 && insurance_payout > 90000) {
    insurance_payout = 90000
  } else if (gross_salary < 500000 && insurance_payout > 150000) {
    insurance_payout = 150000
  } else if (gross_salary < 600000 && insurance_payout > 200000) {
    insurance_payout = 200000
  } else if (insurance_payout > 240000) {
    insurance_payout = 240000
  }

  if ((+net_payout + +insurance_payout) > net_salary) {
    insurance_payout = net_salary - net_payout
    if (insurance_payout < 0) {
      insurance_payout = 0
    }
  }



  salary_loss = net_salary - net_payout - insurance_payout
  if (salary_loss < 0) {
    salary_loss = 0
  }

  years_left = 67 - age
  salary_loss_lifetime = salary_loss * years_left
  console.log(insurance_premium);
  coffees = insurance_premium / 52 / 40
  console.log(coffees);
  coffees = Math.round(coffees)

  gross_salary = Math.floor(gross_salary)
  net_salary = Math.floor(net_salary)
  net_payout = Math.floor(net_payout)
  salary_loss = Math.floor(salary_loss)
  years_left = Math.floor(years_left)
  salary_loss_lifetime = Math.floor(salary_loss_lifetime)
  insurance_payout = Math.floor(insurance_payout)
  insurance_premium = Math.floor(insurance_premium)

  Session.set("gross_salary", gross_salary)
  Session.set("net_salary", net_salary)
  Session.set("payout", net_payout)
  Session.set("salary_loss", salary_loss)
  Session.set("years_left", years_left)
  Session.set("salary_loss_lifetime", salary_loss_lifetime)
  Session.set("insurance_payout", insurance_payout)
  Session.set("insurance_premium", insurance_premium)
  Session.set("coffees", coffees)
}
