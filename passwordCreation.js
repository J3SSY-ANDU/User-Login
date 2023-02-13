// CREATE YOUR OWN PASSWORD
// variables 
var password = document.getElementById("password");
var username = document.getElementById("username");
var checkbox = document.getElementById("checkbox");
var enterButton = document.getElementById("btn");


// 1. Create class 'Password' with password requirements
class Password {
    constructor(minLength, maxLength, capLetter = false, num, specialChar = true, value = [], numChar) {
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.capLetter = capLetter;
        this.num = num;
        this.specialChar = specialChar;
        this.value = value
        this.numChar = numChar;
    }
    reverseValue;
    create() {
        this.value.push(password.value);
        this.reverseValue = [...this.value]
        this.reverseValue = this.reverseValue.reverse();
        if (this.checkLength() && this.checkNum()) {
            password.value = "";
        } else {
            alert("Invalid Password. It has to have numbers, upper letter, lower letter, 8-20 characters and special characters.");
            this.reverseValue[0] = undefined;
        }
        
        return this.reverseValue[0];
    }

    checkLength() {
        if (this.reverseValue[0].length >= 8) {
            this.minLength = true;
        } else {
            this.minLength = false;
        }
        if (this.reverseValue[0].length <= 20) {
            this.maxLength = true;
        } else {
            this.maxLength = false;
        }
        return this.maxLength && this.minLength;
    }

    checkCapLetter() {
        
    }
    
    checkNum() {
        this.num = false;
        for (let i = 0; i < this.reverseValue[0].length; i++) {
            if (Number.isInteger(parseInt(this.reverseValue[0][i]))) {
                this.num = true;
                return this.num;
            }
        }
        return this.num;
    }
}

const passwords = new Password();
enterButton.onclick = () => {
    passwords.create();
    password.value = "";
    username.value = "";
    checkbox.checked = false;
}
password.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        enterButton.click();
    }
})


// 2. Create passwords data base with objects, letting the user create a new password

// 3. Compare the new password with previous passwords so the user cannot repeat passwords

// 4. Repeat the password for comfirmation

// 5. Save every password in a array and update "new password" with the last item in the array




// ------------------------------------------------------------------------------------------------




// CREATE RANDOM PASSWORD
// 6. Create 'RandomPassword' extended class so the user could use a random password
class RandomPassword {
    specialCharStr = "~!@#$%^&*()_+{}|:<>?-=[]\;,./";
    numbersStr = "1234567890";
    lowerLettersStr = "qwertyuiopasdfghjklzxcvbnm";
    upperLettersStr = "QWERTYUIOPASDFGHJKLZXCVBNM";
    constructor(specialCharStr, numbersStr, lowerLettersStr, upperLettersStr) {
        this.specialCharStr = specialCharStr;
        this.numbersStr = numbersStr;
        this.lowerLettersStr = lowerLettersStr;
        this.upperLettersStr = upperLettersStr;
    }
    getSpecialChar() {

    }
    getNumber() {

    }
    getLowerLetter() {

    }
    getUpperLetter() {

    }
}

// 7. Create strings with all differents characters and methods to choose randomly from the strings

// 8. Create an array that contains all methods in functions so we can call them when we want to

// 9. Create a random number max to the position of the last item in the function array

// 10. Call the functions inside of the function array randomly

// 11. Repeat part 3, 4 and 5 

// 12. Save latest password in the cache





