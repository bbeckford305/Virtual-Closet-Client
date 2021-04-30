'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const garmentEvents = require('./garment/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#signoutButton').on('click', authEvents.onSignOut)
  $('#change-password').hide()
  $('#passwordChangeForm').hide()
  $('#signoutButton').hide()
  $('#signupForm').hide()
  $('#sign-up').hide()
  $('#signinForm').hide()
  $('#sign-in').hide()
  $('#passwordChangeForm').hide()
  $('#change-password').hide()
  $('#createOutfitButton').hide()
  $('#addToOutfitButton').hide()
  $('#deleteGarmentButton').hide()
  $('#updateGarmentButton').hide()
  $('#searchGarmentButton1').hide()
  $('#restartOutfitButton').hide()
  $('#addImageButton').hide()
  $('#garmentAdd').hide()
  $('#garmentAddForm').hide()
  $('#garmentSearch').hide()
  $('#garmentSearchForm').hide()
  $('#garmentUpdate').hide()
  $('#garmentUpdateForm').hide()
  $('#garmentImage').hide()
  $('#userMessage').hide()
  $('#garmentAddButton1').hide()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
  $('#menu').hide()
  $('#entryMessage').hide()
  $('#garmentAddForm').on('submit', garmentEvents.onGarmentAdd)
  $('#garmentSearchForm').on('submit', garmentEvents.onGarmentSearch)
  $('#garmentUpdateForm').on('submit', garmentEvents.onGarmentUpdate)
})

// user clicks to start creating outfit
const onCreateOutfit = (event) => {
  $('#garmentSearch').show()
  $('#garmentSearchForm').show()
}
$('#createOutfitButton').on('click', onCreateOutfit)

// user clicks to start garment search
const onSearchGarment1 = (event) => {
  $('#garmentSearch').show()
  $('#garmentSearchForm').show()
}
$('#searchGarmentButton1').on('click', onSearchGarment1)

// user clicks to enter closet
const onEnterCloset = (event) => {
  $('#newUserButton').show()
  $('#returnUserButton').show()
  $('#entryButton').hide()
}
$('#entryButton').on('click', onEnterCloset)

// user clicks to add garment
const onAddGarmentButton = (event) => {
  $('#garmentAdd').show()
  $('#garmentAddForm').show()
  $('#searchGarmentButton1').hide()
  $('#createOutfitButton').hide()
  $('#garmentAddButton1').hide()
  $('#garmentSearchForm').show()
}
$('#garmentAddButton1').on('click', onAddGarmentButton)

// user new user clicks
const onNewUser = (event) => {
  $('#signupForm').show()
  $('#sign-up').show()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
}
$('#newUserButton').on('click', onNewUser)

// user new user clicks
const onReturnUser = (event) => {
  $('#signinForm').show()
  $('#sign-in').show()
  $('#signupForm').hide()
  $('#sign-up').hide()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
}
$('#returnUserButton').on('click', onReturnUser)

// user update garment
const onUpdateGarmentButton = (event) => {
  $('#garmentUpdate').show()
  $('#garmentUpdateForm').show()
}
$('#updateGarmentButton').on('click', onUpdateGarmentButton)
// // user new user clicks
// $('#headerLogo').on('click', <a href="https://virtual-closet-api.herokuapp.com">Continue</a>)

// function updatemenu () {
//   if (document.getElementById('responsive-menu').checked === true) {
//     document.getElementById('menu').style.borderBottomRightRadius = '0'
//     document.getElementById('menu').style.borderBottomLeftRadius = '0'
//   } else {
//     document.getElementById('menu').style.borderRadius = '43px'
//   }
// }
