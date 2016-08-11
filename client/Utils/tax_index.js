// A dictionary for tax brackets
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
