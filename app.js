// #region Variables
let logs = 0
let clickMultiplier = 1
let autoChopAmount = 0

let clickUpgrades = [
    {
        name: 'Axe',
        price: 1,
        qty: 0,
        multiplier: 1
    },
    {
        name: 'Super Axe',
        price: 5,
        qty: 0,
        multiplier: 5
    }
]
let autoUpgrades = [
    {
        name: 'Lumberjack',
        price: 10,
        qty: 1,
        multiplier: 3,
        isPurchased: false
    },
    {
        name: 'Crew',
        price: 100,
        qty: 1,
        multiplier: 10,
        isPurchased: false
    }
]
// #endregion

// #region create functions

function chopTree() {
    logs += clickMultiplier
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
    let purchasedClickUpgrade = clickUpgrades.find(upgrade => upgrade.name == name)
    if (logs >= purchasedClickUpgrade.price) {
        logs -= purchasedClickUpgrade.price
        clickMultiplier += purchasedClickUpgrade.multiplier
        purchasedClickUpgrade.qty++
        purchasedClickUpgrade.price += (purchasedClickUpgrade.multiplier * purchasedClickUpgrade.qty)
    } else {
        window.alert('You need more 🪵! Get back to choppin!!')
    }
    updateLogs()
    updateClickUpgradeAmount()
    drawClickUpgradeButtons()
}

function updateClickUpgradeAmount() {
    let clickUpgradeElem = document.getElementById('click-upgrade-amount')
    clickUpgradeElem.innerText = clickMultiplier

}
function drawClickUpgradeButtons() {
    let updateButtonElem = document.getElementById('click-upgrade-buttons')
    let template = ''
    clickUpgrades.forEach(upgrade => {
        template += `
        <div class="d-flex justify-content-around py-3 my-3 border rounded">
        <h4>${upgrade.qty} ${upgrade.name}s purchased </h4>
        <div class="d-flex justify-content-end">
        <button class="btn btn-warning" onclick="purchaseClickUpgrade('${upgrade.name}')">Buy
        ${upgrade.name} 🪵${upgrade.price}</button>
        <h4>+${upgrade.multiplier}</h4>
        </div>
        </div>

    `
    });
    updateButtonElem.innerHTML = template
}

function purchaseAutoUpgrade(name) {
    let purchasedAutoUpgrade = autoUpgrades.find(upgrade => upgrade.name == name)
    if (logs >= purchasedAutoUpgrade.price) {
        logs -= purchasedAutoUpgrade.price
        purchasedAutoUpgrade.qty++
        purchasedAutoUpgrade.price += (purchasedAutoUpgrade.multiplier * purchasedAutoUpgrade.qty)
        purchasedAutoUpgrade.isPurchased = true
        autoChopAmount += purchasedAutoUpgrade.multiplier
    } else {
        window.alert('You need more 🪵! Get back to choppin!!')
    }
    console.log(purchasedAutoUpgrade);
    updateAutoUpgradeAmount()
    drawAutoUpgradeButtons()
    updateLogs()
}

function autoCollectLogs() {
    // console.log(`This is working ${autoChopAmount} added total Logs ${logs}`);
    logs += autoChopAmount
    updateLogs()
}

function updateAutoUpgradeAmount() {
    let autoUpgradeElem = document.getElementById('auto-upgrade-amount')
    autoUpgradeElem.innerText = autoChopAmount
}

function drawAutoUpgradeButtons() {
    let updateButtonElem = document.getElementById('auto-upgrade-buttons')
    let template = ''
    autoUpgrades.forEach(upgrade => {
        template += `
        <div class="d-flex justify-content-around py-3 my-3 border rounded">
        <h4>${upgrade.qty} ${upgrade.name}s called </h4>
        <div class="d-flex justify-content-end">
        <button class="btn btn-danger" onclick="purchaseAutoUpgrade('${upgrade.name}')">Call a
        ${upgrade.name} 🪵 ${upgrade.price}</button>
        <h4>+${upgrade.multiplier}</h4>
        </div>
        </div>
`
        updateButtonElem.innerHTML = template
    })


}


// #endregion

// #region function invocation
updateLogs()
updateAutoUpgradeAmount()
updateClickUpgradeAmount()
drawClickUpgradeButtons()
drawAutoUpgradeButtons()
setInterval(autoCollectLogs, 3000)
// #endregion

