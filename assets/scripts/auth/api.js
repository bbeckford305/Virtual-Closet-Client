'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (userInfo) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: userInfo
  })
}

const signIn = function (userInfo) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: userInfo
  })
}

const changePassword = function (userInfo) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: userInfo,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const contactUs1 = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/contact-us',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
  // contactUs1

}
