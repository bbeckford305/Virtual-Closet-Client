'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const userInfo = getFormFields(form)
  api.signUp(userInfo)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const userInfo = getFormFields(form)
  api.signIn(userInfo)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const userInfo = getFormFields(form)
  api.changePassword(userInfo)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const userInfo = getFormFields(form)
  api.signOut(userInfo)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onContactUsLink = function (event) {
  event.preventDefault()
  api.contactUs1()
    .then(ui.onContactUsSuccess)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onContactUsLink

}
