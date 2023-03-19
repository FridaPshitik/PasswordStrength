
class AbstractBaseRule extends Error{
    _handle(password) {
        if (this.check(password)) {
           return true;
        }
    }

    check(password) {
        throw new Error('Abstract non-implemented method');
    }
}

class HasLowerCase extends AbstractBaseRule {
    check(password) {
        return /[a-z]/.test(password)
    }
}

class HasUpperCase extends AbstractBaseRule {
    check(password) {
        return /[A-Z]/.test(password)
    }
}

class HasDigit extends AbstractBaseRule {
    check(password) {
        let pass = /\d/
        return pass.test(password)
    }
}

class HasLength extends AbstractBaseRule {
    check(password) {
        return password.length>=8;
    }
}

class HasSpecialCharacter extends AbstractBaseRule {
    check(password) {
        let pass = /[@$!%*?&]/
        return pass.test(password)
    }
}

class HasRepeatMoreThanTwice extends AbstractBaseRule {
    check(password) {
        let pass = /([a-zA-Z0-9])\1{2,}/
        return pass.test(password)
    }
}

class HasSequencesOfThree extends AbstractBaseRule {
    check(password) {
        let pass=/([a-zA-Z0-9]{3})/
        return pass.test(password)
    }
}
