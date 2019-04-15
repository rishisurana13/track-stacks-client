'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const api = require('./api.js')
const Plotly = require('plotly.js-dist')
const store = require('./store.js')
const ui = require('./ui.js')

$(() => {
$('#get-user-days').hide('click')
$('#sign-up-form').on('submit', events.onSignUp)
$('#sign-in-form').on('submit', events.onSignIn)
$('#change-password-form').hide('submit')
$('#delete-day-form').hide('click')
$('#update-day-form').hide('click')
$('#update-entry-toggle').hide('click')
$('#change-password-form').on('submit', events.onChangePassword)
$('#sign-out').on('submit', events.onSignOut)
$('#update-day-form').on('submit', events.onUpdateDay)
$('#update-meal-form').on('submit', events.onUpdateMeal)

$('#expense-toggle').hide('click')
$('#logout-toggle').hide('click')
$('#delete-toggle').hide('click')
$('#update-toggle').hide('click')
$('#log-expense-toggle').hide('click')
$('#change-pw-toggle').hide('click')
$('#get-day-button').on('submit', events.onGetDay)
$('#get-day-form').hide('click')
$('#get-avg-toggle').hide('click')
$('#get-avg-btn').on('click', events.onGetAvg)




$('#sign-out').hide('click')

$('#spent').hide('click')
$('#delete-day-form').on('submit', events.onDeleteDay)
$('#delete-meal-form').on('submit', events.onDeleteMeal)



$('#spent').on('submit', events.onCreateDay)
$('#log-meal').on('submit', events.onCreateMeal)
$('#get-user-days').on('submit', events.onGetUser)
$('#get-user-meals').on('submit', events.onGetMeals)
$('#get-meal').on('submit', events.onGetMeal)
$('#get-max-min-btn').on('click', events.onGetUserMaxToMin)
$('#get-min-max-btn').on('click', events.onGetUserMinToMax)
$('#get-new-old-btn').on('click', events.onGetUserNewToOld)












})
