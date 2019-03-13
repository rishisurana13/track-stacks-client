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
  // $('form').trigger('reset')

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
  // $('form').trigger('reset')
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
     console.log(formData)

     api.getUser(formData.user.id) // (formdata.user.id)
    .then(ui.getUserSuccess)
    .catch(ui.failure)


 }



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateDay,
  onGetDays,
  onGetUser
}
