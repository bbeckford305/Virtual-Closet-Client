'use strict'

const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Thank You For Registering')
  $('#sign-up').trigger('reset')
  $('#signupForm').hide()
  $('#signinForm').show()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#returnUserSection').hide()
  $('#returnSignupSection').show()

  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onSignUpFailure = function () {
  $('#message').text('Registration Failure')
  $('#sign-up').trigger('reset')

  setTimeout(function () {
    $('#message').text('')
  }, 3000)
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
  $('#menu').show()
  $('#headerLogo').hide()
  $('#deleteGarmentButton').hide()
  $('#passwordChangeForm').hide()
  $('#change-password').hide()
  $('#signoutButton').show()
  $('#deleteGarmentButton').hide()
  $('#youTubeVideos').show()
  $('#backgroundMusic').stop()
  $('#backgroundMusic').trigger('pause')
  $('#inspirationalMessage1').show()
  $('#garmentIDPull').hide()
  $('#instagramPost').show()
  $('#returnSignupSection').hide()
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onSignInFailure = function () {
  $('#message').text('Email/Password Combination Incorrect')
  $('#sign-in').trigger('reset')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onChangePasswordSuccess = function () {
  $('#message').text('Your Password Has Been Changed')
  $('#change-password').trigger('reset')
  $('#contactUsMessage').hide()
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onChangePasswordFailure = function () {
  $('#message').text('Password Change Failed')
  $('#change-password').trigger('reset')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('You Have Been Signed Out')
  $('#signoutButton').trigger('reset')
  $('#change-password').hide()
  $('#menu').hide()
  $('#headerLogo').show()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
  $('#userMessage').hide()
  $('#createOutfitButton').hide()
  $('#searchGarmentButton1').hide()
  $('#garmentAddButton1').hide()
  $('#change-password').hide()
  $('#entryButton').show()
  $('#entryMessage').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#signupForm').hide()
  $('#signinForm').hide()
  $('#deleteGarmentButton').hide()
  $('#garmentUpdateForm').hide()
  $('#garmentSearchForm').hide()
  $('#garmentAddForm').hide()
  $('#entryMessage').hide()
  $('#youTubeVideos').hide()
  $('#garmentAdd').hide()
  $('#garmentSearch').hide()
  $('#inspirationalMessage1').hide()
  $('#backgroundMusic').trigger('play')
  $('#garmentPullAll').hide()
  $('#garmentIDSearchForm').hide()
  $('#instagramPost').hide()
  $('#garmentView').hide()
  $('#garmentDelete1').hide()
  $('#garmentDeleteForm').hide()
  $('#deleteGarmentButton2').hide()
  $('#garmentDeleteForm2').hide()
  $('#deleteGarmentButton').hide()
  $('#garmentIDDelete').hide()
  $('#contactUsMessage').hide()
  $('#garmentAreaMessage').hide()
  $('#garmentArea').hide()
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onSignOutFailure = function () {
  $('#message').text('Please Try Signing Out Again')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onContactUsSuccess = function () {
  $('#contactUsMessage').show()
  $('#garmentPullAll').hide()
  $('#garmentIDSearchForm').hide()
  $('#instagramPost').hide()
  $('#garmentView').hide()
  $('#garmentDelete1').hide()
  $('#garmentDeleteForm').hide()
  $('#deleteGarmentButton2').hide()
  $('#change-password').hide()
  $('#menu').hide()
  $('#headerLogo').hide()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
  $('#userMessage').hide()
  $('#createOutfitButton').hide()
  $('#searchGarmentButton1').hide()
  $('#garmentAddButton1').hide()
  $('#change-password').hide()
  $('#entryButton').hide()
  $('#entryMessage').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#signupForm').hide()
  $('#signinForm').hide()
  $('#deleteGarmentButton').hide()
  $('#updateGarmentButton').hide()
  $('#garmentUpdateForm').hide()
  $('#garmentSearchForm').hide()
  $('#garmentAddForm').hide()
  $('#entryMessage').hide()
  $('#youTubeVideos').hide()
  $('#garmentAdd').hide()
  $('#garmentSearch').hide()
  $('#inspirationalMessage').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onContactUsSuccess

}
