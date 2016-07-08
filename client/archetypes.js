Template.archetypes.events({
  'onclick #student': function() {
    console.log("I'm clicked");
    Session.set("gross_salary", 50000)
    Session.set("age", 21)
    Session.set("debt", 300000)
  },
  'onclick #nyansatt': function() {
    Session.set("gross_salary", 500000)
    Session.set("age", 26)
    Session.set("debt", 500000)
  }
});
