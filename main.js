cookieCount = 0
cursorCount = 0
grandmaCount = 0
farmCount = 0
mineCount = 0

const cursorBasePrice = 15
const grandmaBasePrice = 100
const farmBasePrice = 1100
const mineBasePrice = 12000

cursorPrice = 15
grandmaPrice = 100
farmPrice = 1100
minePrice = 12000

window.onload = function() {
    cookie = document.getElementById('cookie')
    cookie.style.backgroundColor = 'white'
    cookie.addEventListener('mousedown', cookieDown)
    cookie.addEventListener('click', cookieClick)
    cookie.addEventListener('mouseup', cookieUp)
    loadData()

    addCursorBtn = document.getElementById('add_cursor')
    addCursorBtn.addEventListener('click', addCursor)

    addGrandmaBtn = document.getElementById('add_grandma')
    addGrandmaBtn.addEventListener('click', addGrandma)

    addFarmBtn = document.getElementById('add_farm')
    addFarmBtn.addEventListener('click', addFarm)

    addMineBtn = document.getElementById('add_mine')
    addMineBtn.addEventListener('click', addMine)
    
    totalCpsLabel = document.getElementById('total_cps')

    setInterval(function() {
        cookieCount = cookieCount + computeTotalCps(cursorCount, grandmaCount, farmCount, mineCount)/100
        totalCpsLabel.innerText = computeTotalCps(cursorCount, grandmaCount, farmCount, mineCount)
        setCookieCounterLabel(cookieCount)
        checkBtnEnable()
    }, 10)

    setInterval(function() {
        saveData()
        console.log('data saved')
    }, 60000)
}

function cookieDown() {
    cookie.animate(
        [
            {backgroundColor: 'white'},
            {backgroundColor: 'gray'}
        ],
        {
            duration: 250,
            fill: 'forwards'
        }
    )
}

function cookieClick() {
    console.log('cookie clicked!')
    cookieCount = cookieCount + 1
    checkBtnEnable()
    setCookieCounterLabel(cookieCount)

    saveData()
}

function cookieUp() {
    cookie.animate(
        [
            {backgroundColor: 'gray'},
            {backgroundColor: 'white'}
        ],
        {
            duration: 250,
            fill: 'forwards'
        }
    )
}


function saveData() {
    localStorage.setItem('cookie', String(cookieCount))
    localStorage.setItem('cursor', String(cursorCount))
    localStorage.setItem('grandma', String(grandmaCount))
    localStorage.setItem('farm', String(farmCount))
    localStorage.setItem('mine', String(mineCount))
    console.log('save cookie count is:' + String(cookieCount))
}

function loadData() {
    cookieCountStr = localStorage.getItem('cookie')
    cursorCountStr = localStorage.getItem('cursor')
    grandmaCountStr = localStorage.getItem('grandma')
    farmCountStr = localStorage.getItem('farm')
    mineCountStr = localStorage.getItem('mine')

    cookieCount = parseInt(cookieCountStr)
    cursorCount = parseInt(cursorCountStr)
    grandmaCount = parseInt(grandmaCountStr)
    farmCount = parseInt(farmCountStr)
    mineCount = parseInt(mineCountStr)
    if (isNaN(cookieCount)) {cookieCount = 0}
    if (isNaN(cursorCount)) {cursorCount = 0}
    if (isNaN(grandmaCount)) {grandmaCount = 0}
    if (isNaN(farmCount)) {farmCount = 0}
    if (isNaN(mineCount)) {mineCount = 0}
    cursorPrice = computePrice(cursorBasePrice, cursorCount)
    grandmaPrice = computePrice(grandmaBasePrice, grandmaCount)
    farmPrice = computePrice(farmBasePrice, farmCount)
    minePrice = computePrice(mineBasePrice, mineCount)
    console.log('restore cookie count is:' + String(cookieCount))

    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
    setGrandmaCounterLabel(grandmaCount)
    setFarmCounterLabel(farmCount)
    setMineCounterLabel(mineCount)
    setCursorPriceLabel(cursorPrice)
    setGrandmaPriceLabel(grandmaPrice)
    setFarmPriceLabel(farmPrice)
    setMinePriceLabel(minePrice)
}

function setCookieCounterLabel(value) {
    cookieCounter = document.getElementById('cookie_counter')
    cookieCounter.innerText = Math.trunc(value)
}

function setCursorCounterLabel(value) {
    cursorCounter = document.getElementById('cursor_counter')
    cursorCounter.innerText = value
}

function setGrandmaCounterLabel(value) {
    grandmaCounter = document.getElementById('grandma_counter')
    grandmaCounter.innerText = value
}

function setFarmCounterLabel(value) {
    farmCounter = document.getElementById('farm_counter')
    farmCounter.innerText = value
}

function setMineCounterLabel(value) {
    mineCounter = document.getElementById('mine_counter')
    mineCounter.innerText = value
}

function setCursorPriceLabel(value) {
    cursorPriceLabel = document.getElementById('cursor_price')
    cursorPriceLabel.innerText = Math.trunc(value)
}

function setGrandmaPriceLabel(value) {
    grandmaPriceLabel = document.getElementById('grandma_price')
    grandmaPriceLabel.innerText = Math.trunc(value)
}

function setFarmPriceLabel(value) {
    farmPriceLabel = document.getElementById('farm_price')
    farmPriceLabel.innerText = Math.trunc(value)
}

function setMinePriceLabel(value) {
    minePriceLabel = document.getElementById('mine_price')
    minePriceLabel.innerText = Math.trunc(value)
}

function addCursor() {
    cookieCount = cookieCount - cursorPrice
    cursorCount = cursorCount + 1
    cursorPrice = computePrice(cursorBasePrice, cursorCount)
    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
    setCursorPriceLabel(cursorPrice)
}

function addGrandma() {
    cookieCount = cookieCount - grandmaPrice
    grandmaCount = grandmaCount + 1
    grandmaPrice = computePrice(grandmaBasePrice, grandmaCount)
    setCookieCounterLabel(cookieCount)
    setGrandmaCounterLabel(grandmaCount)
    setGrandmaPriceLabel(grandmaPrice)
}

function addFarm() {
    cookieCount = cookieCount - farmPrice
    farmCount = farmCount + 1
    farmPrice = computePrice(farmBasePrice, farmCount)
    setCookieCounterLabel(cookieCount)
    setFarmCounterLabel(farmCount)
    setFarmPriceLabel(farmPrice)
}

function addMine() {
    cookieCount = cookieCount - minePrice
    mineCount = mineCount + 1
    minePrice = computePrice(mineBasePrice, mineCount)
    setCookieCounterLabel(cookieCount)
    setMineCounterLabel(mineCount)
    setMinePriceLabel(minePrice)
}

function checkBtnEnable() {
    addCursorBtn = document.getElementById('add_cursor')
    addGrandmaCursorBtn = document.getElementById('add_grandma')
    if (cookieCount >= cursorPrice) {
        addCursorBtn.disabled = false
    } else {
        addCursorBtn.disabled = true
    }

    if (cookieCount >= grandmaPrice) {
        addGrandmaCursorBtn.disabled = false
    } else {
        addGrandmaCursorBtn.disabled = true
    }

    if (cookieCount >= farmPrice) {
        addFarmBtn.disabled = false
    } else {
        addFarmBtn.disabled = true
    }

    if (cookieCount >= minePrice) {
        addMineBtn.disabled = false
    } else {
        addMineBtn.disabled = true
    }
}

function computePrice(basePrice, count) {
    return basePrice * Math.pow(1.15, count)
}

function computeTotalCps(cursorCount, grandmaCount, farmCount, mineCount) {
    return (0.1 * cursorCount) + (1 * grandmaCount) + (8 * farmCount) + (47 * mineCount)
}