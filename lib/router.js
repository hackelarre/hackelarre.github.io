Router.configure({

  layoutTemplate: 'layout',

  notFoundTemplate: 'appNotFound',

  loadingTemplate: 'appLoading',
});


Router.map(function () {
  this.route('home2', {
    path: '/'
  });
  
  this.route('about');

  this.route('lab', {
    path: '/lab'
  });

  this.route('Bloga', {
    // articles now under `articleList` instead of `this`
    template: 'Bloga',  //change template target

    data: {
      articleList: function () {return Articles.find()},
      selectedArticle: {}
    }
  });
  this.route('artikulua', {
    path: '/bloga/:_id',
    // provide data for both `articleList` and `selectedArticle`
    data: function () {
      return {
        articleList: Articles.find(),
        selectedArticle: Articles.findOne({_id: this.params._id})
      }
    },
    template: 'artikuluak'  //change template target
  });

    this.route('admin', {
        path:'/admin',
        template: 'accountsAdmin',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                console.log('redirecting');
                this.redirect('/');
            }
        }
    });
});


Router.configure({
    layoutTemplate: 'layout'
});

