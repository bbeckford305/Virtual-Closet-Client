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
  // const type = $(event.target).text()
  // const color = $(event.target).text()
  // const weather = $(event.target).text()
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

const onGarmentIDSearch = function (event) {
  event.preventDefault()
  const form = event.target
  const garmentData = getFormFields(form)

  api.garmentIDSearch(garmentData.garment.id)
    .then(ui.onGarmentIDSearchSuccess)
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
  onGarmentIDSearch
  // onChangePassword,
  // onSignOut

}
