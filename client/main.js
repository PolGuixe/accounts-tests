import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import ReactDOM from 'react-dom';
import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  // signUpPath: '/register',
  resetPasswordPath: '/password-reset',
  profilePath: '/profile',
  // onSignedInHook:() => FlowRouter.go('/'),
  // onSignedInHook: () => {if (FlowRouter.current().route.name === 'login'){
  //   FlowRouter.go('/'); //TODO: change for ternary operator
  // }},
  // onSignedOutHook: () => FlowRouter.go('/'),
  minimumPasswordLength: 6
});




if (Meteor.isClient) {
  Meteor.startup(function(){
    ReactDOM.render(<Accounts.ui.LoginForm/>, document.getElementById('login'));
  })
}

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }
});

Template.hello.events({
  'click button' (event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});
