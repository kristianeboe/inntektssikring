import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';
import {
  InterestedPeople
} from '../imports/api/database.js';
import './index.html';


Template.app.onCreated(function(){
  Session.set("gross_salary", 550000)
  Session.set("age", 26)
  Session.set("insurance_payout", 30000)
  updateState()
});

Template.app.helpers({
  interestedPeople() {
    return InterestedPeople.find({});
  },
  salary_loss_lifetime() {
    salary_loss_lifetime = Session.get("salary_loss_lifetime")
    if (salary_loss_lifetime) {
      salary_loss_lifetime = Math.floor(salary_loss_lifetime)//.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    } else {
      salary_loss_lifetime = 0
    }
    return salary_loss_lifetime
  },
  insurance_premium() {
    insurance_premium = Math.floor(Session.get("insurance_premium")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return insurance_premium
  },
  insurance_payout() {
    insurance_payout = Math.floor(Session.get("insurance_payout")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return insurance_payout
  }
});

Template.app.events({
  "input #insurance_payout_range" () {
    insurance_payout = event.target.value
    Session.set("insurance_payout", insurance_payout)
    updateState()
  }
})


Template.mittLiv.events({
  "click #download" () {
    $("#sign-upDiv").show();
    $("html, body").animate({
      scrollTop: $(document).height()
    }, "slow");
  },
  'click #sign-upBtn'(event) {
    event.preventDefault();

    // Get value from form element
    form = event.currentTarget.form

    const name = form.children[0].value;
    const phone = form.children[1].value;

    // Insert a task into the collection
    InterestedPeople.insert({
      name: name,
      phone: phone,
      createdAt: new Date(), // current time
    });

    // Clear form
    form.children[0].value = '';
    form.children[1].value = '';

    $("#sign-upDiv").hide();
    $("#download").hide();
    $("#thank-you").show();
  }
})
