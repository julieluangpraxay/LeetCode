/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    let currentValue = init;

    const counterObject = {
        increment: function () {
            currentValue += 1;
            return currentValue;
        },
        decrement: function () {
            currentValue -= 1;
            return currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        }
    };

    return counterObject;
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */