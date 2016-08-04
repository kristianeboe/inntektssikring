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
  Session.set("insurance_payout", 0)
  Session.set("updateSlider", false)
  Session.set("timesStateIsUpdated", 0)
  updateState()
});

Template.app.helpers({
  interestedPeople() {
    return InterestedPeople.find({});
  },
  salary_loss_lifetime() {
    salary_loss_lifetime = Session.get("salary_loss_lifetime")
    if (salary_loss_lifetime) {
      salary_loss_lifetime = (salary_loss_lifetime)
    } else {
      salary_loss_lifetime = 0
    }
    return salary_loss_lifetime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  },
  insurance_premium() {
    insurance_premium = Math.floor((Session.get("insurance_premium"))/12)
    return insurance_premium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  },
  insurance_payout() {
    insurance_payout = Math.floor(Session.get("insurance_payout")/12)
    insurance_payout = insurance_payout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return insurance_payout
  },
  coffee() {
    return Session.get("coffees") > 0
  }
});

Template.didYouKnow.helpers({
  oneCoffee() {
    return Session.get("coffees") == 1
  },
  twoCoffees() {
    return Session.get("coffees") == 2
  },
  threeCoffees() {
    return Session.get("coffees") == 3
  },
  fourCoffees() {
    return Session.get("coffees") == 4
  },
  fiveCoffees() {
    return Session.get("coffees") == 5
  },
  moreCoffees() {
    return Session.get("coffees") > 5
  },
  coffees() {
    return Session.get("coffees")
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
    if (phone != "") {
      InterestedPeople.insert({
        name: name,
        phone: phone,
        createdAt: new Date(), // current time
      });
    }



    // Clear form
    form.children[0].value = '';
    form.children[1].value = '';

    $("#sign-upDiv").hide();
    $("#download").hide();
    $("#thank-you").show();
  }
})
