'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const config = require('./config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const formData = getFormFields(form)
  console.log('formData: ', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
  $('#sign-password-up').trigger('reset')

}
const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const formData = getFormFields(form)
  console.log('formData: ', formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)

    // $('form').trigger('reset')
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const formData = getFormFields(form)
  console.log('formData: ', formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
    $('#change-password-form').trigger('reset')

}

const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const formData = getFormFields(form)
  console.log('formData: ', formData)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
  // $('form').trigger('reset')
}

const onCreateDay = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const formData = getFormFields(form)
  console.log('formDataa: ', formData)

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
  // const formData = getFormFields(event.target)

  api.getUser(store.user.id) // (formdata.user.id)
    .then(ui.getUserSuccess)


}

const onGetDay = function (event) {
  event.preventDefault()
 const formData = getFormFields(event.target)

  api.getDay(formData.day.id) // (formdata.user.id)
    .then(ui.getDaySuccess)
    .catch(ui.failure)


}

const onDeleteDay = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)

  api.deleteDay(formData.day.id)
    .then(ui.deleteDaySuccess) // this
    .catch(ui.failure)
    $('#delete-day-form').trigger('reset')
    $('#user-message').trigger('reset')

}

const onUpdateDay = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)

  api.updateDay(formData.day)
    .then(ui.getUserSuccess)
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
  onGetAvg
}
