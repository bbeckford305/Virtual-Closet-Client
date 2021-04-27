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
  api.garmentAdd(garmentInfo)
    .then(ui.onGarmentAddSuccess)
    .catch(ui.onGarmentAddFailure)
}
// on garment search event
const onGarmentSearch = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentInfo = getFormFields(form)
  api.garmentSearch(garmentInfo)
    .then(ui.onGarmentSearchSuccess)
    .catch(ui.onGarmentSearchFailure)
}

// on garment update event
const onGarmentUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentInfo = getFormFields(form)
  api.garmentUpdate(garmentInfo)
    .then(ui.onGarmentUpdateSuccess)
    .catch(ui.onGarmentUpdateFailure)
}
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
  onGarmentAdd,
  onGarmentSearch,
  onGarmentUpdate
  // onChangePassword,
  // onSignOut

}
