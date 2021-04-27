'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Thank You For Registering')
  $('#sign-up').trigger('reset')
  // $('#signinButton2').show()
  $('#signupForm').hide()
  $('#sign-up').hide()
  // $('#sign-in').show()
  // $('#signinForm').show()
}

const onSignUpFailure = function () {
  $('#message').text('Registration Failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Signed In')
  $('#sign-in').trigger('reset')
  $('#userMessage').show()
  $('#createOutfitButton').show()
  $('#searchGarmentButton1').show()
  $('#entryButton').hide()
  $('#entryMessage').hide()
  $('#garmentAddButton1').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#signupForm').hide()
  $('#signinForm').hide()
  $('#entryButton').hide()
  // $('#entrySignIn').hide()
  // $('#entrySignInButton').hide()
  // $('#passwordChangeForm').show()
  $('#signoutButton').show()
  // $('#newGameButton').show()
  // $('#gameLogo').show()
  // $('.userDropDown').show()
}

const onSignInFailure = function () {
  $('#message').text('Email/Password Combination Incorrect')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Your Password Has Been Changed')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message').text('Password Change Failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('You Have Been Signed Out')
  $('#change-password').hide()
  // $('#entryPage').show()
  // $('#entrySignIn').show()
  // $('#entryMessage').show()
  // $('#entryButton').show()
  // $('#entrySignInButton').show()
  // $('#gameLogo').hide()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
  $('#signoutButton').trigger('reset')
  // $('#newGameButton').hide()
  // $('.container').hide()
  // $('#newGameButton2').hide()
  // $('.box').trigger('reset')
  // $('.box').empty()
  $('#userMessage').hide()
  $('#createOutfitButton').hide()
  $('#searchGarmentButton1').hide()
  $('#garmentAddButton1').hide()
  $('#change-password').hide()
  $('#entryButton').show()
  $('#entryMessage').show()
}

const onSignOutFailure = function () {
  $('#message').text('Please Try Signing Out Again')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure

}
