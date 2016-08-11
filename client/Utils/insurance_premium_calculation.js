
// Calculate how much a payout level will cost
// Based on Kundeguiden
insurance_premium_calculation = function(insurance_payout, age, education) {
  const constant = 240
  if (insurance_payout < 50000) {
    minimumSum = 0
    ap = 0
    sats = 12
  } else if (insurance_payout < 100000) {
    minimumSum = 50000
    ap = 600
    sats = 11.5
  } else if (insurance_payout < 200000) {
    minimumSum = 100000
    ap = 1175
    sats = 11
  } else if (insurance_payout < 300000) {
    minimumSum = 200000
    ap = 2275
    sats = 11
  } else if (insurance_payout < 500000) {
    minimumSum = 300000
    ap = 3375
    sats = 11
  } else {
    minimumSum = 500000
    ap = 5575
    sats = 11
  }
  sats = sats/1000
  variable = ap + (insurance_payout - minimumSum) * sats
  spAge = age_list[age]
  spEducation = education_list[education]
  insurance_premium = constant + (variable * spAge * spEducation)
  return insurance_premium
}

// Age modifier
var age_list = {
  1: 1.21795,
  14: 1.21795,
  15: 1.31258,
  16: 1.40920,
  17: 1.50809,
  18: 1.60959,
  19: 1.71407,
  20: 1.82196,
  21: 1.93375,
  22: 2.04998,
  23: 2.17129,
  24: 2.29840,
  25: 2.43211,
  26: 2.57335,
  27: 2.72318,
  28: 2.88280,
  29: 3.06817,
  30: 3.30128,
  31: 3.58171,
  32: 3.90611,
  33: 4.27769,
  34: 4.68994,
  35: 5.08240,
  36: 5.43899,
  37: 5.80714,
  38: 6.18735,
  39: 6.57999,
  40: 6.98533,
  41: 7.40335,
  42: 7.83370,
  43: 8.27561,
  44: 8.72777,
  45: 9.18824,
  46: 9.90497,
  47: 10.66182,
  48: 11.45679,
  49: 12.28610,
  50: 13.14365,
  51: 14.02030,
  52: 14.90292,
  53: 15.77327,
  54: 16.60644,
  55: 17.36896,
  56: 18.01630,
  57: 18.48975,
  58: 18.71233,
  59: 18.58350,
  60: 17.97247,
  61: 16.44206,
  62: 13.47468,
  63: 9.36291,
  64: 4.81116,
  65: 1.24483,
  66: 0.00000
}

// Education modifier
var education_list = {
  "unknown": 1,
  "noHighSchool": 1.4,
  "highSchool": 1.15,
  "bsc": 1,
  "msc": 0.8
}
