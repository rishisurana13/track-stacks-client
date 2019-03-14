'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const api = require('./api.js')

$(() => {
  $('#get-user-days').hide('click')
  $('#sign-up-form').on('submit', events.onSignUp)
$('#sign-in-form').on('submit', events.onSignIn)
$('#change-password-form').hide('submit')
$('#delete-day-form').hide('click')
$('#update-day-form').hide('click')
$('#change-password-form').on('submit', events.onChangePassword)
$('#sign-out').on('submit', events.onSignOut)
$('#update-day-form').on('submit', events.onUpdateDay)


$('#sign-out').hide('click')

$('#spent').hide('click')
$('#delete-day-form').on('submit', events.onDeleteDay)


$('#spent').on('submit', events.onCreateDay)
$('#get-user-days').on('submit', events.onGetUser)
})
