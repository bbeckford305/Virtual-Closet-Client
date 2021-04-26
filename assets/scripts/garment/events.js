'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('.././store')

// on garment add event
const onGarmentAdd = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentInfo = getFormFields(form)
  // const type = $(event.target)
  // const color = $(event.target)
  // const cmethod = $(event.target)
  // const cstatus = $(event.target)
  // const wdate = $(event.target)
  // const weather = $(event.target)
  api.garmentAdd(garmentInfo)
    .then(ui.onGarmentAddSuccess)
    .catch(ui.onGarmentAddFailure)
}
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const userInfo = getFormFields(form)
//   api.signIn(userInfo)
//     .then(ui.onSignInSuccess)
//     .catch(ui.onSignInFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const userInfo = getFormFields(form)
//   api.changePassword(userInfo)
//     .then(ui.onChangePasswordSuccess)
//     .catch(ui.onChangePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const userInfo = getFormFields(form)
//   api.signOut(userInfo)
//     .then(ui.onSignOutSuccess)
//     .catch(ui.onSignOutFailure)
// }

module.exports = {
  onGarmentAdd
  // onSignIn,
  // onChangePassword,
  // onSignOut

}
