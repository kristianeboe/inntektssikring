import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';

if(Meteor.isClient) {
  Template.app.onCreated(function salary_inputOnCreated() {
    Session.set("gross_salary", 550000)
    Session.set("age", 26)
    Session.set("insurance_premium", 99)
    updateState()
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
    },
    insurance_premium() {
      insurance_premium = Session.get("insurance_premium")
      return insurance_premium
    }
  });

  Template.app.events({
    "input #insurance_range"() {
      insurance_premium = event.target.value
      Session.set("insurance_premium", insurance_premium)
      updateState()
    }
  })
}

Template.mittLiv.events({
  "click #toast"() {
    var $toastContent = $('<div><h1>Hei!</h1><p style="color: white;">Du fant oss før vi er ferdige. Fløg med på Storebrand.no eller vår facebookside for videre oppdateringer"</p></div>');
    Materialize.toast($toastContent, 5000);
  }
})
