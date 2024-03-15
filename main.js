// state

const names = ["Bethany", "Carissa", "Ben", "Erik", "Vanessa", "Tim", "Jose", "Harriet", "David", "Emma", "Craig", "Hannah"];
const occupations = ["Librarian", "Assistant", "Barista", "IT Specialist", "Customer Service", "Nurse", "Game Developer", "Babysitter", "Receptionist"];
const costs = [57, 31, 25, 83, 15, 23, 40, 45, 55, 62, 24, 17, 36, 29, 21]
const maxVisible = 5;
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


// Step 1 - render the availableFreelancers array using the showFreelancers function

// Step 2, Function 1 - create a randomGenerator function that runs randomRow every 3000 ms
    // const randomGenerator = setInterval(randomRow, 3000);

// Step 3, Function 2 - create a function called randomRow
// that delivers a new object called addFreelancerObj
    // define the variables for the new addFreelancerObj
        // a random name
            // addFreelancerObj.name = names[Math.floor(Math.random() * names.length)];
        // a random occupation
            // addFreelancerObj.occupation = occupations[Math.floor(Math.random() * occupations.length)];
        // a random cost
            // addFreelancerObj.cost = costs[Math.floor(Math.random() * costs.length)]
// push the addFreelancerObj to the availableFreelancers array
// re-render the showFreelancers function to force-update with the information just pushed
// if the availableFreelancers.length is at the maxVisible
// then clearInterval for the randomRow

// Step 4, Function 3 - create a new function that will showFreelancers
// which estabishes a DOM connection to the #mainTable
    // const tableDOM = document.querySelector(`#mainTable`);
// then creates a const newFreelancerObj
    // is a .map of the availableFreelancers array
    // this map will
        // create a freelancerRow table row (tr) at the end of the .map
        // create a rowName table cell (td) in the new row for the first key in the object
            // that sets the innerText of the cell to the availableFreelancers.name 
        // create a rowOccupation table cell (td) in the new row for the second key in the object
            // that sets the innerText of the cell to the availableFreelancers.occupation
        // create a rowCost table cell (td) in the new row for the third key in the object
            // that sets the innerText of the cell to the availableFreelancers.cost
        // append each of these new child variables into the new row
            // freelancerRow.appendChild(rowName);
            // freelancerRow.appendChild(rowOccupation);
            // freelancerRow.appendChild(`$` + rowCost);
    // return freelancerRow (goes back to newFreelancerObj)
// replaceChildren for tableDOM with a spread of newFreelancerObj

// Step 5, Function 4 - create a const averageCost
// that reduces all the availableFreelancers.cost
// into a single number

// Step 6 - append averageCost to the document.querySelector(`#averageStartingPrice`)
// as a string paired with the money symbol