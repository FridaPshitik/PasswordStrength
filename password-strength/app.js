
function PasswordStrength(password) {

    let check = new checkingPasswords(password)

    return check.isDigit
    && check.isLength
    && check.isLowerCharacter
    && check.isRepeatMoreThanTwice
    && check.isSequencesOfThree
    && check.isUpperCharacter
    && check.isSpecialCharacter

}

let checkingPasswords = class {
    constructor(password) {
        this.password = password;
    }
    isLowerCharacter() {

        for (let i = 0; i < this.password.length; i++) {
            if (this.password.charCodeAt(i) >= 97 && this.password.charCodeAt(i) <= 122) return true;
        }
        return false;
    }
    isUpperCharacter() {

        for (let i = 0; i < this.password.length; i++) {
            if (this.password.charCodeAt(i) >= 65 && his.ptassword.charCodeAt(i) <= 90) return true;
        }
        return false;
    }
    isDigit() {

        for (let i = 0; i < this.password.length; i++) {
            if (this.password.charCodeAt(i) >= 49 && this.password.charCodeAt(i) <= 57) return true;
        }
        return false;
    }
    isSpecialCharacter() {

        for (let i = 0; i < this.password.length; i++) {
            if (this.password.charCodeAt(i) >= 33 && this.password.charCodeAt(i) <= 45
                || this.password.charCodeAt(i) == 63 || this.password.charCodeAt(i) == 64) return true;
        }
        return false;
    }
    isLength() {

        return this.password.length >= 8;
    }
    isRepeatMoreThanTwice() {

        let mone = 0;
    
        for (let i = 0; i < this.password.length; i++) {
            for (let j = i + 1; j < this.password.length - 1; j++) {
                if (this.password[i] == this.password[j]) mone++;
            }
            if (mone > 2) return false;
            mone = 0;
        }
        return true;
    }
    isSequencesOfThree() {

        for (let i = 0; i < this.password.length - 2; i++) {
            if (this.password.charCodeAt(i) == this.password.charCodeAt(i + 1) - 1 && this.password.charCodeAt(i) == password.charCodeAt(i + 2) - 2) return false;
        }
        return true;
    }
    
};