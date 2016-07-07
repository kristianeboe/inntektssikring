import './main.html';

taxIndex = function(gross_salary) {

  if (gross_salary <= 50000) {
    S = 0
  } else if(gross_salary <= 100000) {
    S = 9.5
  } else if(gross_salary <= 150000) {
    S = 13.8
  } else if(gross_salary <= 200000) {
    S = 16.7
  } else if(gross_salary <= 250000) {
    S = 18.9
  } else if(gross_salary <= 300000) {
    S = 21.8
  } else if(gross_salary <= 350000) {
    S = 23.7
  } else if(gross_salary <= 400000) {
    S = 25.1
  } else if(gross_salary <= 450000) {
    S = 26.2
  } else if(gross_salary <= 500000) {
    S = 27
  } else if(gross_salary <= 550000) {
    S = 27.7
  } else if(gross_salary <= 600000) {
    S = 28.9
  } else if(gross_salary <= 700000) {
    S =31
  } else if(gross_salary <= 800000) {
    S = 32.6
  } else if(gross_salary <= 900000) {
    S = 33.9
  } else if(gross_salary <= 1000000) {
    S = 35.1
  } else {
    S = 41
  }

  return S
}
