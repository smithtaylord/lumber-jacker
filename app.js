// #region Variables
let logs = 0

let clickUpgrades = [
    {
        name: 'axe',
        price: 1,
        qty: 1,
        multiplier: 2
    },
    {
        name: 'super-axe',
        price: 2,
        qty: 1,
        multiplier: 5
    }
]
let autoUpgrades = [
    {
        name: 'buddy',
        price: 1,
        qty: 1,
        multiplier: 2
    },
    {
        name: 'crew',
        price: 2,
        qty: 1,
        multiplier: 5
    }
]
// #endregion

// #region create functions

function chopTree() {
    logs++
    console.log(logs);
    updateLogs()
}

function updateLogs() {
    let logElem = document.getElementById('log-count')
    logElem.innerText = logs

}


// #endregion

// #region function invocation
updateLogs()

// #endregion

