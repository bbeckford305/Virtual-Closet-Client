'use strict'

const store = require('./../store')

// on successfull  garment add
const onGarmentAddSuccess = function (response) {
  $('#message').text('Garment Added')
  $('#garmentAddForm').trigger('reset')
  store.user.garment = response.garment
  // const garment = store.user.garment

  // $('#signinButton2').show()
  // $('#signupForm').hide()
  // $('#sign-up').hide()
  // $('#sign-in').show()
  // $('#signinForm').show()
}

// On garment add  failure
const onGarmentAddFailure = function () {
  $('#message').text('Garment Not Added')
  $('#garmentAddForm').trigger('reset')
}

// on successfull  garment search
const onGarmentSearchSuccess = function (response) {
  store.user.garment = response.garment
  $('#message').text('Your Requested Garment')
  $('#sign-in').trigger('reset')
//   // $('#change-password').show()
//   // $('#sign-up').hide()
//   // $('#sign-in').hide()
//   // $('#signupForm').hide()
//   // $('#signinForm').hide()
//   // $('#entryPage').hide()
//   // $('#entrySignIn').hide()
//   // $('#entrySignInButton').hide()
//   // $('#passwordChangeForm').show()
//   // $('#signoutButton').show()
//   // $('#newGameButton').show()
//   // $('#gameLogo').show()
//   // $('.userDropDown').show()
}
//
const onGarmentSearchFailure = function () {
  $('#message').text('Garment Not Found')
  $('#sign-in').trigger('reset')
}
//
const onGarmentUpdateSuccess = function (response) {
  store.user.garment = response.garment
  $('#message').text('Garment Has Been Updated')
  $('#change-password').trigger('reset')
}
//
const onGarmentUpdateFailure = function () {
  $('#message').text('Garment Update Failed')
  $('#change-password').trigger('reset')
}
//
// const onSignOutSuccess = function () {
//   store.user = null
//   $('#message').text('You Have Been Signed Out')
//   // $('#change-password').hide()
//   // $('#entryPage').show()
//   // $('#entrySignIn').show()
//   // $('#entryMessage').show()
//   // $('#entryButton').show()
//   // $('#entrySignInButton').show()
//   // $('#gameLogo').hide()
//   // $('#passwordChangeForm').hide()
//   // $('#signoutButton').hide()
//   // $('#newGameButton').hide()
//   // $('.container').hide()
//   // $('#newGameButton2').hide()
//   // $('.box').trigger('reset')
//   // $('.box').empty()
// }
//
// const onSignOutFailure = function () {
//   $('#message').text('Please Try Signing Out Again')
// }

module.exports = {
  onGarmentAddSuccess,
  onGarmentAddFailure,
  onGarmentSearchSuccess,
  onGarmentSearchFailure,
  onGarmentUpdateSuccess,
  onGarmentUpdateFailure
  // onSignInSuccess,
  // onSignInFailure,
  // onChangePasswordSuccess,
  // onChangePasswordFailure,
  // onSignOutSuccess,
  // onSignOutFailure

}
