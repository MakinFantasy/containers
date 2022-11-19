class ErrorRepository {
    constructor () {
        this.errors = new Map (
            [
                ['1', 'SyntaxError'],
                ['2', 'ReferenceError'],
                ['3', 'RangeError'],
                ['4', 'TypeError']
            ]
        )
    }
    translateError (code) {
        if (this.errors.has(code)) {
           return this.errors.get(code)
        } else {
            throw new Error ('Unknown error')
        }
    }
}

const errors = new ErrorRepository();
const result = errors.translateError('1');
console.log(result)