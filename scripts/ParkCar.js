// create an empty array of Stats
const parkCarsDB = [];

// create a fixed amount of spaces in the garage
const garage = 2;

// create a class called Cars
class Cars {
    constructor (carName) {
        this.carName = carName;
    } 
}

// function that grabs user input
function getCarDetails(){
    if ($('#carNameIn').val() == ""){
        alert("Fields cannot be empty");
    } 
    else{
        addToCarDetails($('#carNameIn').val());
        ($('#carNameIn').val(""));
    }
} // end getCarDetails

$ (document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $ ('#submitBtn').on('click', getCarDetails);
 
} // end readyNow

// function to create new car and push to parkCars array for user input from getCarDetails
function addToCarDetails(carName){
    parkCarsDB.push(new Cars (carName));
    console.log(parkCarsDB);
    displayCarDetails();

    return true;

}
// function to display Cars to user
function displayCarDetails(){
    let outputEl = $('#displayDiv');
    outputEl.empty();
    for (car of parkCarsDB){
        outputEl.append(`<li> ${car.carName} </li>`);

    }
    return true;

} // end displayCarDetails

