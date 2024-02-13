// generate a random color

const randomColor = function () {
    const hexaValue = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexaValue[Math.floor(Math.random() * 16)]
    }

    return color
};

// console.log(randomColor());

let IntervalId

const startChangingColor = function () {

    if (!IntervalId) {
        IntervalId = setInterval(changeBGColor, 1000)

    }

    function changeBGColor() {
        document.body.style.backgroundColor = randomColor()
    }
};

const stopChangingColor = function () {
    clearInterval(IntervalId)
    IntervalId = null
};

document.querySelector('#start').
    addEventListener('click', startChangingColor)

document.querySelector('#stop').
    addEventListener('click', stopChangingColor)
