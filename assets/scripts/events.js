'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const config = require('./config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)


  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#sign-password-up').trigger('reset')

}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)


  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)

    // $('form').trigger('reset')
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)


  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
    $('#change-password-form').trigger('reset')

}

const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)


  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  // $('form').trigger('reset')
}

const onCreateDay = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)


  api.createDays(formData)
    .then(ui.createDaySuccess)
    .catch(ui.failure)
      $('#spent').trigger('reset')

  // $('form').trigger('reset')
}
const onGetDays = function () {
  event.preventDefault()
  api.getDays()
    .then(ui.getDaysSuccess)
    .catch(ui.failure)
}
const onGetUser = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getUser(store.user.id) // (formdata.user.id)
    .then(ui.getUserSuccess)
    .catch(ui.failure)


}
const onGetUserMaxToMin = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getUser(store.user.id) // (formdata.user.id)
    .then(ui.getUserMaxToMinSuccess)
    .catch(ui.failure)


}
const onGetUserMinToMax = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getUser(store.user.id) // (formdata.user.id)
    .then(ui.getUserMinToMaxSuccess)
    .catch(ui.failure)


}

const onGetUserNewToOld = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getUser(store.user.id) // (formdata.user.id)
    .then(ui.getUserNewToOldSuccess)
    .catch(ui.failure)


}

const onGetDay = function (event) {
  event.preventDefault()
 const formData = getFormFields(event.target)

  api.getDay(formData.day.id) // (formdata.user.id)
    .then(ui.getDaySuccess)
    .catch(ui.getDayFailure)


}

const onDeleteDay = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)


  api.deleteDay(formData.day.id)
    .then(ui.deleteDaySuccess) // this
    .catch(ui.failure)
    $('#delete-day-form').trigger('reset')
    $('#user-message').trigger('reset')

}

const onUpdateDay = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)


  api.updateDay(formData.day)
    .then(ui.updateDaySuccess)
    .catch(ui.failure)
    $('#update-day-form').trigger('reset')
}



const onGetAvg = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getUser(store.user.id) // (formdata.user.id)
    .then(ui.getAvgSuccess)
    .catch(ui.failure)
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateDay,
  onGetDays,
  onGetUser,
  onDeleteDay,
  onUpdateDay,
  onGetDay,
  onGetAvg,
  onGetUserMaxToMin,
  onGetUserMinToMax,
  onGetUserNewToOld
}
