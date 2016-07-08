Template.archetypes.events({
  'click #student': function() {
    console.log("I'm clicked");
    setState(50000, 21)
    Session.set("debt", 300000)
  },
  'click #nyansatt': function() {
    console.log("I'm clicked");
    setState(500000, 26)
    Session.set("debt", 500000)
  },
  'click #arbeidsledig': function() {
    console.log("I'm clicked");
    setState(0, 26)
    Session.set("debt", 4000000)
  }
});
