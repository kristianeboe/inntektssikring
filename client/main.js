import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if(Meteor.isClient) {
  Template.app.onCreated(function salary_inputOnCreated() {
    setState(550000, 26)
  });

  Template.app.helpers({
    salary_loss_lifetime: function() {
      salary_loss_lifetime = Session.get("salary_loss_lifetime")
      if(salary_loss_lifetime) {
        salary_loss_lifetime = Math.floor(salary_loss_lifetime).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      } else {
        salary_loss_lifetime = 0
      }
      return salary_loss_lifetime
    }
  });

  Template.app.events({
    'submit' : function(event) {
      event.preventDefault()
    },
    'keyup #salaryInput':function(){
      gross_salary = event.target.value
      net_salary = (gross_salary * (1-taxIndex(gross_salary)/100))
      if (gross_salary <50000){
        payout = 210000
      }
      else if (gross_salary <= 555456) {
        payout = (gross_salary*0.66*0.74)
      } else {
        payout = (366000*0.66)
      }
      salary_loss = net_salary-payout
      if (salary_loss <0) {
        salary_loss = 0
      }
      Session.set("gross_salary", gross_salary)
      Session.set("net_salary", net_salary)
      Session.set("payout", payout)
      Session.set("salary_loss", salary_loss)
      salary_loss_lifetime = Session.get("salary_loss") * Session.get("years_left")
      Session.set("salary_loss_lifetime", salary_loss_lifetime)
    },
    'keyup #ageInput':function(){
      age = event.target.value
      years_left = 67-age
      Session.set("years_left", years_left)
      Session.set("age", age)
      salary_loss_lifetime = Session.get("salary_loss") * years_left
      Session.set("salary_loss_lifetime", salary_loss_lifetime)
    }
  });
}
