'use strict'

const store = require('./store.js')
// const app = require('../app.js')

const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
  $('#sign-up-form').trigger('reset')
}
const signInSuccess = (responseData) => {
  $('#user-message').text('successfully signed In!')
  store.userId = responseData.user.id
  store.user = responseData.user
  $('#sign-in-form').hide('submit')
  $('#sign-up-form').hide('click')
  $('#sign-out').show('click')
  $('#change-password-form').show('click')
  $('#delete-day-form').show('click')
  $('#update-day-form').show('click')
  $('#logout-toggle').show('click')
  $('#sign-up-toggle').hide('click')
  $('#delete-toggle').show('click')
  $('#get-day-form').show('click')
  $('#get-avg-toggle').show('click')
  $('#avg').show('click')


  $('#resetButton').show('click')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#spent').show('click')
  $('#display').show('click')
  $('#get-user-days').show('click')
  $('#expense-toggle').show('click')
  $('#login-toggle').hide('click')
  $('#update-toggle').show('click')
  $('#log-expense-toggle').show('click')
  $('#change-pw-toggle').show('click')
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
  $('#expense-toggle').hide('click')
  $('#sign-up-toggle').show('click')
  $('#logout-toggle').hide('click')
  $('#log-expense-toggle').hide('click')
  $('#change-pw-toggle').hide('click')
  $('#get-day-form').hide('click')
  $('#get-avg-toggle').hide('click')
  $('#avg').hide('click')
  $('#avg').html(' ')



  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#spent').hide('click')
  $('#display').hide('click')
  setTimeout(function () {
    $('#display').text('')
  }, 2000)
  $('#get-user-days').hide('click')
  $('#login-toggle').show('click')
  $('#delete-toggle').hide('click')
  $('#update-toggle').hide('click')
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
  $('#sign-up-form').trigger('reset')
}

const signInFailure = () => {
  $('#user-message').text('error on sign in')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-in-form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').text('error in changing password')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-up-form').trigger('reset')
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
// const averageSpend = function (responseData) {
//   const user = responseData.user
//   let total = 0
//   for (let i = 0; i <= user.days.length; i++) {
//     total += user.days[i].spend
//
// }
// const numberOfIds = user.days.length
// const avg = total / numberOfIds
// const aa = (`
//
//
// <h1> Avg Spend : $${avg} </h1>
//
//
//
//
//
// `)
// $('#display').append(aa)
//
//
// }

const createDaySuccess = (responseData) => {
  $('#user-message').text('successfully logged expense!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const getUserSuccess = function (responseData) {
  const user = responseData.user
  $('#display').html(' ')

const bb = user.days.sort(function (a, b) {
    return b.id - a.id
})

const aa = bb.sort(function (a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.date) - new Date(b.date)
})






  for (let i = 0; i < (aa.length); i++) {


    const userHtml = (`

      <div class="col-sm-4 col-lg-3 box"">
    <p>
          ID: ${aa[i].id}
          <br>
        Date: ${aa[i].date}
        <br>
 Expenditure: $${aa[i].spend}.00

     </p>





    </div>
    `)

    $('#display').append(userHtml)
  }
}





const getDaySuccess = function (responseData) {
  const day = responseData.day

  $('#display').html(' ')

  const userHtml = (`
            <div class="div class="col-sm-4 col-lg-3 box">
          <p> ID : ${day.id} </p>
          <br>
          <p> Date : ${day.date}</p>
          <br>
          <p> Spend : ${day.spend} </p>



          <div>
          `)

  $('#display').append(userHtml)
}
const updateDaySuccess = function (responseData) {
  $('#user-message').html('DAY Updated')

}

const deleteDaySuccess = function (responseData) {
  $('#user-message').html('ITEM DELETED')



}

const getAvgSuccess = function (responseData) {
  const user = responseData.user

  let total = 0

  for (let i = 0; i < (user.days.length); i++) {
    total += (user.days[i].spend)
  }

  const avg = (total / user.days.length)
  // + (total % user.days.length)
  const aa = (`
        <div class="col-sm-4 col-lg-3 box">
        <p class="avg-num">
      Average:
        ${avg}
        </p>





      </div>
      `)
  $('#avg').html(aa)

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
  updateDaySuccess,
  getDaySuccess,
  getAvgSuccess

}
