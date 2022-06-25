cookieCount = 0

window.onload = function() {
    cookie = document.getElementById('cookie')
    cookie.addEventListener('click', cookieClick)

}

function cookieClick() {
    console.log('cookie clicked!')
    cookieCount++
    cookieCounter = document.getElementById('cookie_counter')
    cookieCounter.innerText = cookieCount
}