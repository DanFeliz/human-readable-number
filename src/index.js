module.exports = function toReadable(number) {
    const nums = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    if (number === 0) return 'zero';
    if (number <= 20) return nums[number];
    if (number > 20 && number < 100) return `${nums[Math.floor(number / 10) * 10]} ${nums[number % 10]}`.trim();
    if (number >= 100 && number < 1000) {
        let result = `${nums[Math.floor(number / 100)]} hundred`;
        const secNumber = number % 100;
        if (secNumber <= 20 && secNumber > 0) result += ` ${(nums[secNumber])}`;
        if (secNumber > 20 && secNumber < 100) result += ` ${nums[Math.floor(secNumber / 10) * 10]} ${nums[secNumber % 10]}`;
        return result.trim();
    };
}
