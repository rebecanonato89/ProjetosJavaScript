'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'findSum' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. 2D_INTEGER_ARRAY queries
 */

function findSum(numbers, queries) {

    // let sum = [];

    // for (let i = 0; i < queries.length; i++) {
    //     let auxSum = 0;
    //     for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
    //         auxSum += numbers[j];
    //         if (numbers[j] == 0) {
    //             auxSum += queries[i][2];
    //         }
    //     }
    //     sum[i] = auxSum;
    // }
    // return sum;


    queries.map((query) => {
        const setOfNumbersToCheckAndSum = numbers.slice(query[0], query[0] + query[1])
        const checkedSet = setOfNumbersToCheckAndSum.map((number) => number === 0 ? query[2] : number)
        return checkedSet.reduce((sum, number) => { return sum + number })
    })

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    const queriesRows = parseInt(readLine().trim(), 10);

    const queriesColumns = parseInt(readLine().trim(), 10);

    let queries = Array(queriesRows);

    for (let i = 0; i < queriesRows; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = findSum(numbers, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
