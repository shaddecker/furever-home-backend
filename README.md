# Furever Home
This application is designed to aid a cat/dog shelter in record keeping.  

The front end of this app is located here: (https://github.com/shaddecker/furever-home-frontend)

## Planning
The user stories take in to account both the shelter employee and the person looking to adopt a pet.
as an employee...
1. I should be able to enter all the relevant data for each animal
2. I should be able to update the data on any animal in the system
3. I should be able to view a list of all animals
4. I should be able to view one animals profile at a time
5. I should be able to view and update vaccination records
6. I should be able to view and updated test records
7. I should be able to view and updated adoption records

as an adopter...
1. I should be able to view all animals available for adoption
2. I should be able to view each animals profile
3. I should be able to flag an animal for adoption

## How It Was Designed
This app has a home page as the landing point.  From there users can select from the available menu options.
![Menu](/planning/menu.PNG) "Menu Options"

"AllAnimals" - gives you a list of all animals with records at the shelter. On this page you will be able to add a new animal or click on one of the listed animal's names to go to a details page.
"Adopt!" - gives the visitor the option of filling out an adoption form (not yet deployed)
"Photo Gallery" - gives the visitor the option of viewing a number of animals that have been at the shelter (not yet deployed)
"About Us" - to view information about the shelter(not yet deployed)
"Contact Us" - gives the visitor the ability to contact the shelter with questions. (not yet deployed)

## Technical Stuff
This project was bootstrapped with Create React App. React components used:

axios
react-router-dom
react-spreadsheet-grid
