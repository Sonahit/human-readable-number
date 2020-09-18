const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
};

const decimals = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    2: "twen",
    3: "thir",
    5: "fif",
    4: "for",
    8: "eigh",
};

/**
 *
 * @param {number} number
 */
const toDecimal = (number) => {
    if (number in decimals) {
        return decimals[number];
    }
    const decimal = Math.floor(number / 10);
    const primal = Math.floor(number % 10);
    /**
     * @type {string}
     */
    let strDecimal = decimals[decimal] ? decimals[decimal] : numbers[decimal];
    return `${strDecimal}ty${
        numbers[primal] && primal > 0 ? ` ${numbers[primal]}` : ""
    }`;
};

/**
 *
 * @param {number} number
 */
const toHunderds = (number) => {
    const hundred = Math.floor(number / 100);
    const decimal = Math.floor(number % 100);
    if (numbers[decimal] && decimal !== 0) {
        return `${numbers[hundred]} hundred ${numbers[decimal]}`;
    }

    return `${numbers[hundred]} hundred${
        decimal > 0 ? " " + toDecimal(decimal) : ""
    }`;
};

/**
 *
 * @param {number} number
 */
const suffixes = (number) => {
    if (number in numbers) {
        return numbers[number];
    }
    if (number in decimals) {
        return decimals[number];
    }
    if (number >= 20 && number < 100) {
        return toDecimal(number);
    } else if (number >= 100 && number < 1000) {
        return toHunderds(number);
    }
};

function toReadable(number) {
    return suffixes(+number);
}

module.exports = toReadable;
