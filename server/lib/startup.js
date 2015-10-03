Meteor.startup(function () {
  // bootstrap the admin user if they exist -- You'll be replacing the id later
  if (Meteor.users.findOne("JLc8vx8SP9pvocHE4"))
    Roles.addUsersToRoles("JLc8vx8SP9pvocHE4", ['admin']);

  // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
  if(!Meteor.roles.findOne({name: "blogaria"}))
    Roles.createRole("blogaria");
});
