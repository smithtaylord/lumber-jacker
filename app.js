// #region Variables
let logs = 0
let clickMultiplier = 0
let autoMultiplier = 0

let clickUpgrades = [
    {
        name: 'axe',
        price: 1,
        qty: 1,
        multiplier: 2
    },
    {
        name: 'super-axe',
        price: 5,
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
    logs += 1 + clickMultiplier + autoMultiplier
    console.log(logs);
    updateLogs()
}

function updateLogs() {
    let logElem = document.getElementById('log-count')
    logElem.innerText = logs

}
// NOTE Obsolete function, refactored for reusability 
// function purchaseAxe() {
//     if (logs >= clickUpgrades[0].price) {
//         logs -= clickUpgrades[0].price
//         clickMultiplier += clickUpgrades[0].multiplier
//     } else {
//         window.alert('You need more logs!')
//     }
//     updateLogs()
//     updateClickUpgradeAmount()
// }

function purchaseClickUpgrade(name) {
    let foundUpgrade = clickUpgrades.find(upgrade => upgrade.name == name)
    if (logs >= foundUpgrade.price) {
        logs -= foundUpgrade.price
        clickMultiplier += foundUpgrade.multiplier
        foundUpgrade.qty++
    } else {
        window.alert('You need more logs!')
    }
    updateLogs()
    updateClickUpgradeAmount()
}

function updateClickUpgradeAmount() {
    let clickUpgradeElem = document.getElementById('click-upgrade-amount')
    clickUpgradeElem.innerText = clickMultiplier

}


// #endregion

// #region function invocation
updateLogs()

// #endregion

