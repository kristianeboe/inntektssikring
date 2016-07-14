import './index.html';

taxIndex = function(gross_salary) {
  if (gross_salary <= 50000) {
    S = 0
  } else if (gross_salary <= 100000) {
    S = 9.5
  } else if (gross_salary <= 150000) {
    S = 13.8
  } else if (gross_salary <= 200000) {
    S = 16.7
  } else if (gross_salary <= 250000) {
    S = 18.9
  } else if (gross_salary <= 300000) {
    S = 21.8
  } else if (gross_salary <= 350000) {
    S = 23.7
  } else if (gross_salary <= 400000) {
    S = 25.1
  } else if (gross_salary <= 450000) {
    S = 26.2
  } else if (gross_salary <= 500000) {
    S = 27
  } else if (gross_salary <= 550000) {
    S = 27.7
  } else if (gross_salary <= 600000) {
    S = 28.9
  } else if (gross_salary <= 700000) {
    S = 31
  } else if (gross_salary <= 800000) {
    S = 32.6
  } else if (gross_salary <= 900000) {
    S = 33.9
  } else if (gross_salary <= 1000000) {
    S = 35.1
  } else {
    S = 41
  }
  return S
}

updateState = function() {

  age = Session.get("age")
  gross_salary = Session.get("gross_salary")
  insurance_payout = Session.get("insurance_payout")
  insurance_premium = insurance_premium_calculation(insurance_payout, age, "bsc")

  net_salary = (gross_salary * (1 - taxIndex(gross_salary) / 100))
  if (gross_salary < 50000) {
    payout = 210000
  } else if (gross_salary <= 555456) {
    payout = (gross_salary * 0.66 * 0.74)
    /*if (insurance_payout > gross_salary * 0.19) {
      insurance_payout = gross_salary * 0.19
      insurance_premium = insurance_premium_calculation(insurance_payout, age, "bsc")
    }*/
  } else {
    payout = (366000 * 0.66)
  }

  if (payout < 210000) {
    payout = 210000
  }

  insurance_payout = insurance_payout * 0.95

  salary_loss = net_salary - payout - insurance_payout
  if (salary_loss < 0) {
    salary_loss = 0
  }

  years_left = 67 - age
  salary_loss_lifetime = salary_loss * years_left

  gross_salary = Math.floor(gross_salary)
  net_salary = Math.floor(net_salary)
  payout = Math.floor(payout)
  salary_loss = Math.floor(salary_loss)
  years_left = Math.floor(years_left)
  salary_loss_lifetime = Math.floor(salary_loss_lifetime)
  insurance_payout = Math.floor(insurance_payout)
  insurance_premium = Math.floor(insurance_premium)

  Session.set("gross_salary", gross_salary)
  Session.set("net_salary", net_salary)
  Session.set("payout", payout)
  Session.set("salary_loss", salary_loss)
  Session.set("years_left", years_left)
  Session.set("salary_loss_lifetime", salary_loss_lifetime)
  Session.set("insurance_payout", insurance_payout)
  Session.set("insurance_premium", insurance_premium)
}
