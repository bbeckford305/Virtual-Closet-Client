'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('.././store')

// on garment add event
const onGarmentAdd = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentData = getFormFields(form)
  api.garmentAdd(garmentData)
    .then(ui.onGarmentAddSuccess)
    .catch(ui.onGarmentAddFailure)
}
// on garment search event
const onGarmentSearch = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentData = getFormFields(form)
  api.garmentSearch(garmentData)
    .then(ui.onGarmentSearchSuccess)
    .catch(ui.onGarmentSearchFailure)
}

// on garment update event
const onGarmentUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentData = getFormFields(form)
  api.garmentUpdate(garmentData)
    .then(ui.onGarmentUpdateSuccess)
    .catch(ui.onGarmentUpdateFailure)
}

const onGarmentTypeSearch = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const garmentData = getFormFields(form)

  api.garmentTypeSearch(garmentData, id)
    .then(ui.onGarmentTypeSearchSuccess)
    .catch(ui.onGarmentSearchFailure)
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
  onGarmentUpdate,
  onGarmentTypeSearch
  // onChangePassword,
  // onSignOut

}
