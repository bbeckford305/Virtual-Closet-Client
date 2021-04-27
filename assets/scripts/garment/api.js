'use strict'

const config = require('./../config')
const store = require('./../store')

const garmentAdd = function (garmentInfo) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/garments',
    data: garmentInfo,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const garmentSearch = function (garmentInfo) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/garments',
    data: garmentInfo,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

//
const garmentUpdate = function (garmentInfo) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/garments',
    data: garmentInfo,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// const signOut = function () {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/sign-out',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  garmentAdd,
  garmentSearch,
  garmentUpdate
  // signIn,
  // changePassword,
  // signOut

}
