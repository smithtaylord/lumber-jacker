// #region Variables
let logs = 0
let clickMultiplier = 1
let autoChopAmount = 0

let clickUpgrades = [
    {
        name: 'Axe',
        mdiIcon: 'mdi mdi-axe',
        price: 1,
        qty: 0,
        multiplier: 1
    },
    {
        name: 'Super Axe',
        mdiIcon: 'mdi mdi-axe-battle',
        price: 5,
        qty: 0,
        multiplier: 5
    }
]
let autoUpgrades = [
    {
        name: 'Lumberjack',
        mdiIcon: 'mdi mdi-human-greeting',
        price: 10,
        qty: 1,
        multiplier: 3,
        isPurchased: false
    },
    {
        name: 'Crew',
        mdiIcon: 'mdi mdi-human-queue',
        price: 100,
        qty: 1,
        multiplier: 10,
        isPurchased: false
    }
]

let pancakePowerUp = {
    price: 1000,
    qty: 1,
    multiplier: 2,
    timer: 0,

}
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


// SECTION Purchase Functions
function purchaseClickUpgrade(name) {
    let purchasedClickUpgrade = clickUpgrades.find(upgrade => upgrade.name == name)
    if (logs >= purchasedClickUpgrade.price) {
        logs -= purchasedClickUpgrade.price
        clickMultiplier += purchasedClickUpgrade.multiplier
        purchasedClickUpgrade.qty++
        purchasedClickUpgrade.price += (purchasedClickUpgrade.multiplier * purchasedClickUpgrade.qty)
    } else {
        window.Swal.fire({
            title: 'You need more 🪵!',
            text: 'Get back to choppin!!',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0516b753-4518-4daf-a659-5df6b89effbc/d6i5ttd-69f269d5-9074-4219-8ec8-f74bff3f1b71.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1MTZiNzUzLTQ1MTgtNGRhZi1hNjU5LTVkZjZiODllZmZiY1wvZDZpNXR0ZC02OWYyNjlkNS05MDc0LTQyMTktOGVjOC1mNzRiZmYzZjFiNzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nrtAqV_oyv1RdpOIk3Uk5WhMqlvmT7ISiGF9OHVg5Ps',
            imageWidth: 300,
            imageHeight: 400,
            imageAlt: 'Lumber Jack Img',
        })
    }
    // commented out window alert, replaced with sweet alert
    // } else {
    //     window.alert('You need more 🪵! Get back to choppin!!')
    // }
    updateLogs()
    updateClickUpgradeAmount()
    drawClickUpgradeButtons()
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
        window.Swal.fire({
            title: 'You need more 🪵!',
            text: 'Get back to choppin!!',
            imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0516b753-4518-4daf-a659-5df6b89effbc/d6i5ttd-69f269d5-9074-4219-8ec8-f74bff3f1b71.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1MTZiNzUzLTQ1MTgtNGRhZi1hNjU5LTVkZjZiODllZmZiY1wvZDZpNXR0ZC02OWYyNjlkNS05MDc0LTQyMTktOGVjOC1mNzRiZmYzZjFiNzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nrtAqV_oyv1RdpOIk3Uk5WhMqlvmT7ISiGF9OHVg5Ps',
            imageWidth: 300,
            imageHeight: 400,
            imageAlt: 'Lumber Jack Img',
        })
    }
    // commented out window alert and added sweet alert. 
    // } else {
    //     window.alert('You need more 🪵! Get back to choppin!!')
    // }
    console.log(purchasedAutoUpgrade);
    updateAutoUpgradeAmount()
    drawAutoUpgradeButtons()
    updateLogs()
}


// SECTION Update Amounts Function
function updateClickUpgradeAmount() {
    let clickUpgradeElem = document.getElementById('click-upgrade-amount')
    clickUpgradeElem.innerText = clickMultiplier

}
function updateAutoUpgradeAmount() {
    let autoUpgradeElem = document.getElementById('auto-upgrade-amount')
    autoUpgradeElem.innerText = autoChopAmount
}

// SECTION Draw Functions
function drawClickUpgradeButtons() {
    let updateButtonElem = document.getElementById('click-upgrade-buttons')
    let template = ''
    clickUpgrades.forEach(upgrade => {
        template += `
        <div class="d-flex justify-content-around py-3 my-3 border rounded">
        <h5>${upgrade.qty} ${upgrade.name}s purchased </h5>
        <div class="d-flex justify-content-end">
        <button class="btn btn-warning" onclick="purchaseClickUpgrade('${upgrade.name}')">Buy 
        ${upgrade.name} <i class="${upgrade.mdiIcon}"></i>🪵${upgrade.price}</button>
        <h4>+${upgrade.multiplier}</h4>
        </div>
        </div>

    `
    });
    updateButtonElem.innerHTML = template
}

function drawAutoUpgradeButtons() {
    let updateButtonElem = document.getElementById('auto-upgrade-buttons')
    let template = ''
    autoUpgrades.forEach(upgrade => {
        template += `
        <div class="d-flex justify-content-around py-3 my-3 border rounded">
        <h5>${upgrade.qty} ${upgrade.name}s called </h5>
        <div class="d-flex justify-content-end">
        <button class="btn btn-danger" onclick="purchaseAutoUpgrade('${upgrade.name}')">Call a 
        ${upgrade.name} <i class="${upgrade.mdiIcon}"></i> 🪵 ${upgrade.price}</button>
        <h4>+${upgrade.multiplier}</h4>
        </div>
        </div>
`
        updateButtonElem.innerHTML = template
    })


}


// SECTION Auto Collect Functions
function autoCollectLogs() {
    // console.log(`This is working ${autoChopAmount} added total Logs ${logs}`);
    logs += autoChopAmount
    updateLogs()
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






