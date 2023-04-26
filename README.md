
# **TICKETI TAMASHA** 
----

This is an e-ticketing app that allows a user to view all current and upcoming events that have been posted by our various organizers. The app allows a user to like an event in which it is added to the favourites where they can view it later. The user is also able to buy ticket(s) to the any event of their choosing via M-Pesa.

----

## Demo
![Demo](/client/public/images/T-Tamasha.gif)

## Technologies used
  * Javascript
  * React
  * Bootsrap
  * Google Fonts
  * Custom API Server -Ruby on Rails
  * Active Record: :storage


----

## Set up and intructions
### Set Up
This app consists of a React frontend and and a Rails backend as the API. 
To ensure that the app works as intended ensure that your machine meets the following requirement

  * The ruby version should be 2.7.4
  * You have PostgressSQL installed as that is the database used in the project
  * The version of rails installed should be Rails 7.0.4.3 or higher


### Instructions
 1. Clone this project from Github to your local machine
 2. Open the project in your code editor of choice and run the following commands through the terminal:
     
       
        bundle install
        
        rails db:seed
       
        rails s
        
3. Open another terminal, don't close the previous terminal and run the following commands:
       
        cd client
       
        npm install
       
        npm start
       
4. This will start the application and ready to use in your browser.

----
## Features
 A user has the ability to:
  * Login to the app as an user
  * View all available events
  * Search for an event by name or category
  * Add an event to their favorites
  * Purchase a ticket via M-pesa
  * Remove an event from their favourites
  * Logout of the app

As an organizer, I have the ability to:
  * Login as an organizer
  * View all available events created by me, as the organizer, and all events by other organizers
  * Search for an event by name or category
  * Purchase a ticket via M-pesa
  * Create a draft event, that will be saved in the drafts section pending review to be added to all    events
  * Logout of the app

---
# Authors
 * Derrick Momanyi
 * Happiness James
 * Ian Gathui
 * Dennis Mugambi
 * Jesse Wambu


 # License
