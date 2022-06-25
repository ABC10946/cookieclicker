cookieCount = 0
cursorCount = 0

window.onload = function() {
    cookie = document.getElementById('cookie')
    cookie.addEventListener('click', cookieClick)
    loadData()

    addCursorBtn = document.getElementById('add_cursor')
    addCursorBtn.addEventListener('click', addCursor)

    setInterval(function() {
        cookieCount = cookieCount + (0.0001 * cursorCount)
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
    console.log('save cookie count is:' + String(cookieCount))
}

function loadData() {
    cookieCountStr = localStorage.getItem('cookie')
    cursorCountStr = localStorage.getItem('cursor')
    if (isNaN(cookieCountStr)) {cookieCountStr = '0'}
    if (isNaN(cursorCountStr)) {cursorCountStr = '0'}

    cookieCount = parseInt(cookieCountStr)
    cursorCount = parseInt(cursorCountStr)
    console.log('restore cookie count is:' + String(cookieCount))
    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
}

function setCookieCounterLabel(value) {
    cookieCounter = document.getElementById('cookie_counter')
    cookieCounter.innerText = value
}

function setCursorCounterLabel(value) {
    cursorCounter = document.getElementById('cursor_counter')
    cursorCounter.innerText = value
}

function addCursor() {
    cookieCount = cookieCount - 15
    cursorCount = cursorCount + 1
    setCookieCounterLabel(cookieCount)
    setCursorCounterLabel(cursorCount)
}

function checkBtnEnable() {
    addCursorBtn = document.getElementById('add_cursor')
    if (cookieCount >= 15) {
        addCursorBtn.disabled = false
    } else {
        addCursorBtn.disabled = true
    }
}