cookieCount = 0
cursorCount = 0
grandmaCount = 0

const cursorBasePrice = 15
const grandmaBasePrice = 100

cursorPrice = 15
grandmaPrice = 100

window.onload = function() {
    cookie = document.getElementById('cookie')
    cookie.addEventListener('click', cookieClick)
    loadData()

    addCursorBtn = document.getElementById('add_cursor')
    addCursorBtn.addEventListener('click', addCursor)

    addGrandmaBtn = document.getElementById('add_grandma')
    addGrandmaBtn.addEventListener('click', addGrandma)
    
    totalCpsLabel = document.getElementById('total_cps')

    setInterval(function() {
        cookieCount = cookieCount + computeTotalCps(cursorCount, grandmaCount)/1000
        totalCpsLabel.innerText = computeTotalCps(cursorCount, grandmaCount)
        setCookieCounterLabel(cookieCount)
        checkBtnEnable()
    }, 1)

    setInterval(function() {
        saveData()
        console.log('data saved')
    }, 60000)
}

function cookieClick() {
    console.log('cookie clicked!')
    cookieCount = cookieCount + 1
    checkBtnEnable()
    setCookieCounterLabel(cookieCount)
    saveData()
}

function saveData() {
    localStorage.setItem('cookie', String(cookieCount))
    localStorage.setItem('cursor', String(cursorCount))
    localStorage.setItem('grandma', String(grandmaCount))
    console.log('save cookie count is:' + String(cookieCount))
}

function loadData() {
    cookieCountStr = localStorage.getItem('cookie')
    cursorCountStr = localStorage.getItem('cursor')
    grandmaCountStr = localStorage.getItem('grandma')
    if (isNaN(cookieCountStr)) {cookieCountStr = '0'}
    if (isNaN(cursorCountStr)) {cursorCountStr = '0'}
    if (isNaN(grandmaCountStr)) {grandmaCountStr = '0'}

    cookieCount = parseInt(cookieCountStr)
    cursorCount = parseInt(cursorCountStr)
    grandmaCount = parseInt(grandmaCountStr)
    cursorPrice = computePrice(cursorBasePrice, cursorCount)
    grandmaPrice = computePrice(grandmaBasePrice, grandmaCount)
    console.log('restore cookie count is:' + String(cookieCount))
    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
    setGrandmaCounterLabel(grandmaCount)
    setCursorPriceLabel(cursorPrice)
    setGrandmaPriceLabel(grandmaPrice)
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

function setCursorPriceLabel(value) {
    cursorPriceLabel = document.getElementById('cursor_price')
    cursorPriceLabel.innerText = value
}

function setGrandmaPriceLabel(value) {
    grandmaPriceLabel = document.getElementById('grandma_price')
    grandmaPriceLabel.innerText = value
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
}

function computePrice(basePrice, count) {
    return basePrice * Math.pow(1.15, count)
}

function computeTotalCps(cursorCount, grandmaCount) {
    return (0.1 * cursorCount) + (1 * grandmaCount)
}