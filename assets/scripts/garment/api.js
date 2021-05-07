'use strict'

const config = require('./../config')
const store = require('./../store')

const garmentAdd = function (garmentData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/garments',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: garmentData
  })
}

const garmentSearch = function (garmentData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/garments',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: garmentData
  })
}

//
const garmentUpdate = function (garmentData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/garments',
    data: garmentData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const garmentIDSearch = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/garments/' + id,
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
  garmentUpdate,
  garmentIDSearch
  // signIn,
  // changePassword,
  // signOut

}
