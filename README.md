# Lab 34 Asynchronous Actions

###### PR: https://github.com/Lennerblom/34-asynchronous-actions/pull/1
---
This app uses a simple form to demonstrate the ability to update the state asynchronously to an api.  `GET` and `POST` will work; however, `PUT` and `DELETE` are not currently updating or deleting the api data.  Originally this app was set up to use a chore app backend, and will when running locally to `localhost:3014/api/v1/chores`.  It is modified slightly to use https://internets-of-thing-api.herokuapp.com/api/v1/things .  Using the form and `submit` will add to the list of 'things'.  `Get all async` will pull all the things from the api.

Thunk middleware is used to add the async functions in the action creators.