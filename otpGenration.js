
function otpGeneration(lenght) {
    let otp = "";
    for (let index = 0; index < lenght; index++) {

        otp += Math.floor(Math.random() * 10).toString()
        console.log(otp);
        
    }

    return otp 
    
}

const result = otpGeneration(6)
console.log(result);