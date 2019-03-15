'use strict'

const config = require('./config.js')
const store = require('./store.js')

const signUp = (formData) => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',

    data: formData
  })
}

const changePassword = (formData) => {
  console.log('store: ', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const createDays = (formData) => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/days',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: formData
  })
}
// const getDays = () => {
//   return $.ajax({
// // try inputing user ID to retrieve data
//     url: config.apiUrl + '/days/',
//     method: 'GET',
//      headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//
//
//   })
// }
const getDays = function () {
  return $.ajax({
    url: config.apiUrl + '/days/',
    method: 'GET',
    headers: {
    Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUser = function (id) {
  return $.ajax({
      url: config.apiUrl + '/users/' + `${id}`,
      method: 'GET',
      headers: {
      Authorization: 'Token token=' + store.user.token
      }
    })


}

const deleteDay = function (id) {
  return $.ajax({
    url: config.apiUrl + '/days/' + `${id}`,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + store.user.token
  }

  })
}

const updateDay = function (day) {
  return $.ajax({
      url: config.apiUrl + `/days/${day.id}`,
      method: 'PATCH',
      headers: {
      Authorization: 'Token token=' + store.user.token
    },
      data: {
        day: day
      }
  })
}

const getDay = function (id) {
  return $.ajax({
      url: config.apiUrl + '/days/' + `${id}`,
      method: 'GET',
      headers: {
      Authorization: 'Token token=' + store.user.token
      }
    })


}


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createDays,
  getDays,
  getUser,
  deleteDay,
  updateDay,
  getDay

}
