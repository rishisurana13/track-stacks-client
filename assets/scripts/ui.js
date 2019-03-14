'use strict'

const store = require('./store.js')
// const app = require('../app.js')

const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
   $('#sign-up-form').text('')
}
const signInSuccess = (responseData) => {

$('#user-message').text('successfully signed In!')
  store.userId = responseData.user.id
  store.user = responseData.user
  $('#sign-in-form').hide('submit')
  $('#sign-up-form').hide('submit')
  $('#sign-out').show('click')
  $('#change-password-form').show('click')
  $('#delete-day-form').show('click')
  $('#update-day-form').show('click')

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
  $('#delete-day-form').hide('click')
  $('#update-day-form').hide('click')

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



const getUserSuccess = function (responseData) {
  const user = responseData.user



$('#display').html(' ')

  // const userId = responseData.user.id


for (let i = 0; i <= user.days.length; i++) {
    const userHtml = (`
      <div class="col-6 col-md-12 box">
    <p> ID : ${user.days[i].id} </p>
    <br>
    <p> Date : ${user.days[i].date}</p>
    <br>
    <p> Day : ${user.days[i].today}</p>
    <br>
    <p> Spend : ${user.days[i].spend} </p>



    <div>
    `)

  // a = $('#display').remove(userHtml) to remove before updating
   $('#display').append(userHtml)
    // $('#get-user-days').hide('submit')

  }




}
const deleteDaySuccess = function (responseData) {
      $('#user-message').html('ITEM DELETED')



    }

    const updateDaySuccess = function (responseData) {
          $('#user-message').html('DAY Updated')

          $('#display').html('Request Days again')
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

getUserSuccess,
deleteDaySuccess,
updateDaySuccess


}
