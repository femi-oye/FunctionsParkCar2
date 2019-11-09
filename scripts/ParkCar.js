// create an empty array of Stats
const parkCarsDB = [];

// create a fixed amount of spaces in the garage
const garage = 3;

// create a class called Cars
class Cars {
    constructor (carName) {
        this.carName = carName;
    } 
}

$ (document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $ ('#submitBtn').on('click', getCarDetails);
    $ ('#checkCarBtn').on('click', checkCarPark);
} // end readyNow

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

// function to create new car and push to parkCars array for user input from getCarDetails
function addToCarDetails(carName){
    if (parkCarsDB.length < garage){
        parkCarsDB.push(new Cars (carName));
       // console.log("Your " + carName + " is parked");
        displayCarDetails();
    } 
        else{
        console.log("You cannot park here");
        $('#displayDiv').append(`<li> No Space to Park ${carName}</li>`);
        }
        
}
// function to display Cars to user
function displayCarDetails(){
    let outputEl = $('#displayDiv');
    outputEl.empty();
    for (car of parkCarsDB){
        outputEl.append(`<li>Your ${car.carName} is parked</li>`);

    }
    return true;

} // end displayCarDetails


// function to display garage size
// function garageSpace(){
    // document.getElementById($('#checkSpaceDiv')).innerHTML = garage.length;
//} // end garageSpace


function garageSpace(){
    let outputE2 = $('#displayDiv');
    if (parkCarsDB.length === garage){
        alert("There are no more spaces");   
    }

}

// function to let user enter their car to check if it's in the garage after 
function takeForSpin(car){
    $('#carListDiv').empty();
    for (kar of parkCarsDB){
        if (kar.carName === car){
            console.log("Your car is here");
            $('#carListDiv').append(`<h2>Your car ${kar.carName} is parked here</h2>`);
        }
        else{
            $('#carListDiv').append(`<h2>Your car was not parked here</h2>`);
       }
    }
} // end checkForCar

// function to get input for checking if car is the garage

function checkCarPark(){
    if ($('#carCheckIn').val() == ""){
        alert("Fields cannot be empty");
    } 
    else{
        takeForSpin($('#carCheckIn').val());
        ($('#carCheckIn').val(""));
    }
} // end getCarDetails