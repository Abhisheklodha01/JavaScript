const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }

    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        // show the result
       if(BMI < 18.6)
       {
        result.innerHTML = `<span>you are under weight ${BMI} </span>`
       }
       if(BMI > 18.6 && BMI < 24.9)
       {
        result.innerHTML = `<span>you are under normal weight ${BMI} </span>`
       }
       if(BMI > 24.9)
       {
        result.innerHTML = `<span>you are over weight ${BMI} </span>`
       }
    }

})