'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const api = require('./api.js')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
$('#sign-in-form').on('submit', events.onSignIn)

$('#change-password-form').on('submit', events.onChangePassword)
$('#sign-out').on('submit', events.onSignOut)


$('#sign-out').hide('click')
$('#change-password-form').hide('click')
$('#spent').hide('click')

$('#spent').on('submit', events.onCreateDay)
})
