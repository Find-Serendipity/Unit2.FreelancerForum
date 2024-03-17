// state
// delcare const variables to feed randomizer 
// names, occupations and costs
// set a maxVisible value
// create array to insert via DOM

const names = ["Bethany", "Carissa", "Ben", "Erik", "Vanessa", "Tim", "Jose", "Harriet", "David", "Emma", "Craig", "Hannah"];
const occupations = ["Librarian", "Assistant", "Barista", "IT Specialist", "Customer Service", "Nurse", "Game Developer", "Babysitter", "Receptionist"];
const costs = [57, 31, 25, 83, 15, 23, 40, 45, 55, 62, 24, 17, 36, 29, 21]
const maxVisible = 10;
const availableFreelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    cost: 30
  },
  {
    name: "Bob",
    occupation: "Teacher",
    cost: 50
  },
  {
    name: "Carol",
    occupation: "Programmer",
    cost: 70
  },
];


// render the availableFreelancers array using the showFreelancers function
showFreelancers ();

// create a randomGenerator function that runs randomRow every 3000 ms
const randomGenerator = setInterval(randomRow, 3000);

// create a function called randomRow
function randomRow () {
// that delivers a new object called addFreelancerObj
const addFreelancerObj = {};
// define the variables for the new addFreelancerObj
// a random name
addFreelancerObj.name = names[Math.floor(Math.random() * names.length)];
// a random occupation
addFreelancerObj.occupation = occupations[Math.floor(Math.random() * occupations.length)];
// a random cost
addFreelancerObj.cost = costs[Math.floor(Math.random() * costs.length)]
// push the addFreelancerObj to the availableFreelancers array
availableFreelancers.push(addFreelancerObj);
// re-render the showFreelancers function to force-update with the information just pushed
showFreelancers ();
// if the availableFreelancers.length is at the maxVisible
if (availableFreelancers.length === maxVisible) {
// then clearInterval for the randomRow
    clearInterval(randomGenerator);
}
}

// create a const averageCost
function averageCost () {
    // reduce the availableFreelancers array
    // to caluclate the totalCosts of eachFreelancer
    return availableFreelancers.reduce ((totalCosts, eachFreelancer) =>
    // where eachFreelancer.cost is added back to the totalCosts
    // then divided by the availableFreelancers.length to generate the average
    (totalCosts + eachFreelancer.cost), 0) / availableFreelancers.length;

}

// create a new function that will showFreelancers
function showFreelancers () {
// which estabishes a DOM connection to the #mainTable
// which establises a DOM connection to the #averageStartingPrice
const tableDOM = document.querySelector(`#mainTable`);
const averageStartingPrice = document.querySelector(`#averageStartingPrice`);
// then creates a const newFreelancerObj
    // that is a .map of the availableFreelancers array
    // which takes in eachRow of the availableFreelancers map
const newFreelancerObj = availableFreelancers.map ((eachRow) => {
    // and performs the following functions
        // create a freelancerRow table row (tr) at the end of the .map
        const freelancerRow = document.createElement('tr');
        // create a rowName table cell (td) in the new row for the first key in the object
        const rowName = document.createElement('td');
            // that sets the innerText of the cell to the availableFreelancers .name
            rowName.innerText = eachRow.name;
        // create a rowOccupation table cell (td) in the new row for the second key in the object
        const rowOccupation = document.createElement('td');
            // that sets the innerText of the cell to the availableFreelancers .occupation
            rowOccupation.innerText = eachRow.occupation;
        // create a rowCost table cell (td) in the new row for the third key in the object
        const rowCost = document.createElement('td');
            // that sets the innerText of the cell to the availableFreelancers .cost
            rowCost.innerText = "$" + eachRow.cost;
        // append each of these new child variables into the new row
            freelancerRow.appendChild(rowName);
            freelancerRow.appendChild(rowOccupation);
            freelancerRow.appendChild(rowCost);
        // return freelancerRow (goes back to newFreelancerObj)
            return freelancerRow;
}) 
// replaceChildren for tableDOM with a spread of newFreelancerObj
tableDOM.replaceChildren(...newFreelancerObj);

// insert the averageCost into the DOM for averageStartingPrice
averageStartingPrice.innerText = "$" + averageCost ();
}