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
  $('#garmentDeleteForm').hide()
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
  $('#garmentDelete1').hide()
  $('#deleteGarmentButton2').hide()
  $('#garmentPullAll').hide()
  $('#garmentIDPull').hide()
  $('#inspirationalMessage1').hide()
  $('#entryMessage').hide()
  $('#pullAllGarments').hide()
  $('#garmentViewAll').hide()
  $('#contactUsMessage').hide()
  $('#garmentAddForm').on('submit', garmentEvents.onGarmentAdd)
  $('#pullAllGarments').on('click', garmentEvents.onGarmentSearch)
  $('#garmentUpdateForm').on('submit', garmentEvents.onGarmentUpdate)
  $('#youTubeVideos').hide()
  $('#garmentIDSearchForm').hide()
  $('#instagramPost').hide()
  $('#returnUserSection').hide()
  $('#returnSignupSection').hide()
  $('#garmentIDSearchForm').on('submit', garmentEvents.onGarmentIDSearch)
  $('#garmentDeleteForm').on('submit', garmentEvents.onGarmentDelete)
  $('#contactUs').on('click', authEvents.onContactUsLink)
})

// user clicks to start creating outfit
const onCreateOutfit = (event) => {
  $('#garmentSearch').show()
  $('#garmentSearchForm').show()
  $('#youTubeVideos').hide()
  $('#inspirationalMessage1').hide()
  $('#change-password').hide()
  $('#garmentPullAll').show()
  $('#garmentIDSearchForm').show()
  $('#pullAllGarments').show()
  $('#garmentIDPull').show()
  $('#instagramPost').hide()
  $('#garmentView').hide()
}
$('#createOutfitButton').on('click', onCreateOutfit)

// user clicks to start garment search
const onSearchGarment1 = (event) => {
  $('#garmentSearch').show()
  $('#garmentSearchForm').show()
  $('#youTubeVideos').hide()
  $('#inspirationalMessage1').hide()
  $('#change-password').hide()
  $('#garmentIDSearchForm').show()
  $('#pullAllGarments').show()
  $('#garmentPullAll').show()
  $('#garmentAdd').hide()
  $('#garmentAddForm').hide()
  $('#garmentIDPull').show()
  $('#instagramPost').hide()
  $('#garmentView').hide()
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
  $('#garmentSearchForm').hide()
  $('#youTubeVideos').hide()
  $('#inspirationalMessage1').hide()
  $('#change-password').hide()
  $('#garmentPullAll').hide()
  $('#garmentIDPull').hide()
  $('#instagramPost').hide()
  $('#garmentView').hide()
}
$('#garmentAddButton1').on('click', onAddGarmentButton)

// user new user clicks
const onNewUser = (event) => {
  $('#signupForm').show()
  $('#sign-up').show()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
  $('#returnUserSection').show()
}
$('#newUserButton').on('click', onNewUser)

// Return User Section during Signup
const onReturnUserSection = (event) => {
  $('#signinForm').show()
  $('#sign-in').show()
  $('#signupForm').hide()
  $('#sign-up').hide()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
  $('#returnUserSection').hide()
  $('#returnSignupSection').show()
}
$('#returntoSigninButton').on('click', onReturnUserSection)

// Signup User Section during Login
const onreturnSignupSection = (event) => {
  $('#signupForm').show()
  $('#sign-up').show()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
  $('#returnUserSection').show()
  $('#returnSignupSection').hide()
  $('#signinForm').hide()
  $('#sign-in').hide()
}
$('#returntoSignupButton').on('click', onreturnSignupSection)

// user new user clicks
const onReturnUser = (event) => {
  $('#signinForm').show()
  $('#sign-in').show()
  $('#signupForm').hide()
  $('#sign-up').hide()
  $('#newUserButton').hide()
  $('#returnUserButton').hide()
  $('#returnSignupSection').show()
}
$('#returnUserButton').on('click', onReturnUser)

// user update garment
const onUpdateGarmentButton = (event) => {
  $('#garmentUpdate').show()
  $('#garmentUpdateForm').show()
}
$('#updateGarmentButton').on('click', onUpdateGarmentButton)

// user update garment
const ondeleteGarmentButton = (event) => {
  $('#garmentDelete1').show()
  $('#garmentDeleteForm').show()
  $('#deleteGarmentButton2').hide()
  $('#deleteGarmentButton').show()
}
$('#deleteGarmentButton2').on('click', ondeleteGarmentButton)

// user clicks to start creating outfit
const onChangePasswordRequest = (event) => {
  $('#passwordChangeForm').show()
  $('#change-password').show()
  $('#youTubeVideos').hide()
  $('#inspirationalMessage1').hide()
  $('#garmentPullAll').hide()
  $('#garmentAdd').hide()
  $('#garmentAddForm').hide()
  $('#garmentIDPull').hide()
  $('#garmentSearchForm').hide()
  $('#instagramPost').hide()
  $('#garmentView').hide()
}
$('#changePasswordButton1').on('click', onChangePasswordRequest)

// const onContactUsLink = (event) => {
//   $('#passwordChangeForm').hide()
//   $('#change-password').hide()
//   $('#youTubeVideos').hide()
//   $('#inspirationalMessage').hide()
//   $('#garmentPullAll').hide()
//   $('#garmentAdd').hide()
//   $('#garmentAddForm').hide()
//   $('#garmentIDPull').hide()
//   $('#garmentSearchForm').hide()
//   $('#instagramPost').hide()
//   $('#garmentView').hide()
//   $('#contactUsMessage').show()
// }

// $('#contactUs').on('click', onContactUsLink)
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

// <script>
//   $(function(){
//     $("garmentImageUpload").change(function(event) {
//       var x= URL.createObjectURL(event.target.files[0]);
//       $("#uploadImage").attr("src",x);
//       console.log(event);
//     });
//   })
// </script>
