# DinoNgrx - Create your own Collection of Dinosaurs with NgRx

Project created to practice NgRx and its libraries. The aim of this repository is to show the main features of the NgRx libraries.
There are different branches created with the same functionality but using extra libraries.
For example, the main-entity branch uses the @ngrx/entity library.

## Run the application
To get a development server up, use the `ng serve` command. This will be available at `http://localhost:4200/`.
We use `json-server` library to simulate http calls, really useful for effects testing. In order to run it, you should launch:
`json-server --watch src/assets/db/dinosdb.json`
