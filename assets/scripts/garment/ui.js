'use strict'

const store = require('./../store')

// on successfull  garment add
const onGarmentAddSuccess = function (response) {
  $('#message').text('Garment Added')
  store.user.garment = response.garment
  $('#garmentAddForm').trigger('reset')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

// On garment add  failure
const onGarmentAddFailure = function () {
  $('#message').text('Garment Not Added')
  $('#garmentAddForm').trigger('reset')
}

// on successfull  garment search
const onGarmentSearchSuccess = function (response) {
  $('#message').text('Your Requested Garment')
  const garments = response.garments
  $('#garmentView').html('')
  garments.forEach(garment => {
    $('#garmentView').append(
      `<div id="userCloset">
        <p>Type: ${garment.type}</p>
        <p>Color: ${garment.color}</p>
        <p>Cleaning Method: ${garment.cleaningMethod}</p>
        <p>Cleaning Status: ${garment.cleaningStatus}<p>
        <p>Worn Date: ${garment.wornDate}</p>
        <p>Weather: ${garment.weather}</p>
        <p>Garment ID: ${garment._id}</p>
      </div>`)
  })
  $('#garmentSearchForm').trigger('reset')
  $('#garmentView').show()
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

// alert($('#message').text())
const onGarmentIDSearchSuccess = function (response) {
  store.user.garment = response.garment
  $('#message').text('Your Requested Garment')
  const garment = response.garment
  $('#garmentView').html('')
  // garments.forEach(garment => {
  $('#garmentView').append(
      `<div id="userCloset">
        <p>Type: ${garment.type}</p>
        <p>Color: ${garment.color}</p>
        <p>Cleaning Method: ${garment.cleaningMethod}</p>
        <p>Cleaning Status: ${garment.cleaningStatus}<p>
        <p>Worn Date: ${garment.wornDate}</p>
        <p>Weather: ${garment.weather}</p>
        <p>Garment ID: ${garment._id}</p>

      </div>`)
  $('#garmentIDSearchForm').trigger('reset')
  $('#garmentView').show()

  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onGarmentSearchFailure = function () {
  $('#message').text('Garment Not Found')
  $('#garmentSearchForm').trigger('reset')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}
//
const onGarmentUpdateSuccess = function (response) {
  // document.getElementById(`${store.garment.id}`)
  // store.user.garment = response.garment
  // const garment = response.garment
  // $('#garmentView').html('')
  $('#message').text('Garment Has Been Updated')
  // $('#garmentView').append(
  //   `<div id="userCloset">
  //   <p>Cleaning Status: ${garment.cleaningStatus}<p>
  //   <p>Worn Date: ${garment.wornDate}</p>
  //   <p>Garment ID: ${garment._id}</p>
  // </div>`)
  $('#garmentUpdateForm').trigger('reset')
  $('#garmentView').hide()

  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}
//
const onGarmentUpdateFailure = function () {
  $('#message').text('Garment Not Updated')
  $('#garmentUpdateForm').trigger('reset')

  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

// on successfull  garment delete
const onGarmentDeleteSuccess = function (response) {
  $('#message').text('Garment Deleted')
  store.user.garment = null
  $('#garmentDeleteForm2').trigger('reset')
  $('#garmentView').hide()
  $('#userCloset').hide()
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

// On garment delete  failure
const onGarmentDeleteFailure = function () {
  $('#message').text('Garment Not Deleted')
  $('#garmentDeleteForm2').trigger('reset')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

module.exports = {
  onGarmentAddSuccess,
  onGarmentAddFailure,
  onGarmentSearchSuccess,
  onGarmentSearchFailure,
  onGarmentUpdateSuccess,
  onGarmentUpdateFailure,
  onGarmentIDSearchSuccess,
  onGarmentDeleteSuccess,
  onGarmentDeleteFailure

}
