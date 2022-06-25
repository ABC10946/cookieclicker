cookieCount = 0
cursorCount = 0
grandmaCount = 0

window.onload = function() {
    cookie = document.getElementById('cookie')
    cookie.addEventListener('click', cookieClick)
    loadData()

    addCursorBtn = document.getElementById('add_cursor')
    addCursorBtn.addEventListener('click', addCursor)

    addGrandmaBtn = document.getElementById('add_grandma')
    addGrandmaBtn.addEventListener('click', addGrandma)

    setInterval(function() {
        cookieCount = cookieCount + (0.0001 * cursorCount) + (0.001 * grandmaCount)
        setCookieCounterLabel(cookieCount)
        checkBtnEnable()
    }, 1)
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
    console.log('restore cookie count is:' + String(cookieCount))
    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
    setGrandmaCounterLabel(grandmaCount)
}

function setCookieCounterLabel(value) {
    cookieCounter = document.getElementById('cookie_counter')
    cookieCounter.innerText = value
}

function setCursorCounterLabel(value) {
    cursorCounter = document.getElementById('cursor_counter')
    cursorCounter.innerText = value
}

function setGrandmaCounterLabel(value) {
    grandmaCounter = document.getElementById('grandma_counter')
    grandmaCounter.innerText = value
}

function addCursor() {
    cookieCount = cookieCount - 15
    cursorCount = cursorCount + 1
    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
}

function addGrandma() {
    cookieCount = cookieCount - 100
    grandmaCount = grandmaCount + 1
    setCookieCounterLabel(cookieCount)
    setGrandmaCounterLabel(grandmaCount)
}

function checkBtnEnable() {
    addCursorBtn = document.getElementById('add_cursor')
    addGrandmaCursorBtn = document.getElementById('add_grandma')
    if (cookieCount >= 15) {
        addCursorBtn.disabled = false
    } else {
        addCursorBtn.disabled = true
    }

    if (cookieCount >= 100) {
        addGrandmaCursorBtn.disabled = false
    } else {
        addGrandmaCursorBtn.disabled = true
    }
}