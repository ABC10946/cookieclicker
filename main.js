cookieCount = 0

window.onload = function() {
    cookie = document.getElementById('cookie')
    cookie.addEventListener('click', cookieClick)
    loadData()
    if (isNaN(cookieCount)) {
        cookieCount = 0
    }
}

function cookieClick() {
    console.log('cookie clicked!')
    cookieCount = cookieCount + 1
    cookieCounter = document.getElementById('cookie_counter')
    cookieCounter.innerText = cookieCount
    saveData()
}

function saveData() {
    localStorage.setItem('cookie', String(cookieCount))
    console.log('save cookie count is:' + String(cookieCount))
}

function loadData() {
    cookieCountStr = localStorage.getItem('cookie')
    cookieCount = parseInt(cookieCountStr)
    console.log('restore cookie count is:' + String(cookieCount))
}