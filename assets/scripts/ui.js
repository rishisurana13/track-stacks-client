'use strict'

const store = require('./store.js')
// const app = require('../app.js')

const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
}
const signInSuccess = (responseData) => {

$('#user-message').text('successfully signed In!')

  store.user = responseData.user
  $('#sign-in-form').hide('click')
  $('#sign-up-form').hide('click')
  $('#sign-out').show('click')
  $('#change-password-form').show('click')

  $('#resetButton').show('click')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#spent').show('click')
  $('#display').show('click')
  $('#get-user-days').show('click')


}
const signOutSuccess = (responseData) => {
  $('#user-message').text('successfully signed Out!')
  $('form').trigger('reset')
  store.user = null
  console.log('store: ', store)
  $('#sign-in-form').show('click')
  $('#sign-up-form').show('click')
  $('#sign-out').hide('click')
  $('#change-password-form').hide('click')

  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#spent').hide('click')
  $('#display').hide('click')
  setTimeout(function () {
    $('#display').text('')
  }, 2000)
  $('#get-user-days').hide('click')




}




const signOutFailure = () => {
$('#user-message').text('error on sign out')
setTimeout(function () {
  $('#user-message').text('')
}, 2000)
}

const signUpFailure = () => {
$('#user-message').text('error on sign up')
setTimeout(function () {
$('#user-message').text('')
}, 2000)
}

const signInFailure = () => {
$('#user-message').text('error on sign in')
setTimeout(function () {
$('#user-message').text('')
}, 2000)
}

const changePasswordFailure = () => {
$('#user-message').text('error in changing password')
setTimeout(function () {
$('#user-message').text('')
}, 2000)
}
const changePasswordSuccess = () => {
$('#user-message').text('successfully changed password!')
setTimeout(function () {
$('#user-message').text('')
}, 2000)

}

const failure = () => {

  $('#user-message').text('something went wrong')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')



}

const createDaySuccess = (responseData) => {
  $('#user-message').text('successfully logged expense!')
}


const getDaysSuccess = function (responseData) {

    responseData.days.forEach(day => {
    console.log(responseData.user_id)
    const dayHtml = (`
    <p>Date : ${day.date}</p>
    <p>DAY: ${day.today}</p>
    <p>SPEND: ${day.spend}</p>
    <p>user ID: ${day.id}</p>
    <br>
    `)
    $('#display').append(dayHtml)

  })

}
const getUserSuccess = function (responseData) {
  const user = responseData.user


for (let i = 0; i <= user.days.length; i++) {
    const userHtml = (`
    <p>Spend : ${user.days[i].spend} </p>
    <p>Day : ${user.days[i].today}</p>
    <p>Day : ${user.days[i].date}</p>

    <br>
    `)
    $('#display').append(userHtml)
  }
}






module.exports = {
signUpSuccess,
signUpFailure,
signInFailure,
signInSuccess,
changePasswordFailure,
changePasswordSuccess,
signOutFailure,
signOutSuccess,
failure,
createDaySuccess,
getDaysSuccess,
getUserSuccess

}
