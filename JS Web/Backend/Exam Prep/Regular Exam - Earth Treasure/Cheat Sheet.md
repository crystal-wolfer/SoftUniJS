# Skeleton what to change

## Setup Project
  1. Comment Models, Managers and Services except homeManager
  2. Comment the router except homeManager
  3. Change name of the DB to be created
  4. Add new resources to the views and public
  5. Change main and home pages
  6. Change PORT if needed to 3000
  7. Change project name in package.json

## Home Page
  1. Make the auth navigation for guests and logged in users

## Register Functionality
  1. Update the User Model
  2. Update the userManager
  3. Update the userController
  4. Add them back to the router
  5. Update the hbs page
  6. Add isLoggenIn from authMiddleware

## Login Functionality
  1. Update the userManager
  2. Update the userController
  3. Add them back to the router
  4. Update the hbs page
  5. Add isLoggenIn from authMiddleware

## Create Functionality
  1. Update the Model for the specific thing
  2. Update the htmls to hbs and edit generateOptions in utils
  3. Update the manager
  4. Update the controller
  5. Add isAuth where needed to safeguard server req
  6. Update the router and the routes

## Catalog Page
  1. Adapt the controller to have a request
  2. Update the html to hbs the partial

## Details Page
  1. Update the controller
  2. Update the manger if needed

## Vote functionality
  1. Update the html and hbs
  2. Create validators for the hbs conditionals 
  3. Add the conditionals to hbs use nested ifs

## Edit page
  1. Update the html and hbs
  2. Update the controller and the options generation

## Delete page
  1. Update the controller

## Search page
  1. Update the html and hbs
  2. Update the controller

## Test the route saveguards