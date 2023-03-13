// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// input: an array
// output: an array that has the first item removed and the remaining items randomly shuffled into a differant index location

// pseudo: 

// test:
// describe("removeAndShuffle", () => {
//     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     const colors2 = [
//         "chartreuse",
//         "indigo",
//         "periwinkle",
//         "ochre",
//         "aquamarine",
//         "saffron"
//       ]
//     it("remove the first item from the array and shuffles the remaining content" , () => {
//         expect(removeAndShuffle(colors1)).not.toEqual(expect.arrayContaining(colors1))
//         expect(removeAndShuffle(colors2)).not.toEqual(expect.arrayContaining(colors2))
//     })
// })
// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// jest-test-1:
// FAIL  ./code-challenges.test.js
// removeAndShuffle
//   ✕ remove the first item from the array and shuffles the remaining content

// ● removeAndShuffle › remove the first item from the array and shuffles the remaining content

//   ReferenceError: removeAndShuffle is not defined

//     32 |       ]
//     33 |     it("remove the first item from the array and shuffles the remaining content" , () => {
//   > 34 |         expect(removeAndShuffle(colors1)).not.toEqual(expect.arrayContaining(colors1))
//        |         ^
//     35 |         expect(removeAndShuffle(colors2)).not.toEqual(expect.arrayContaining(colors2))
//     36 |     })
//     37 | })

//     at Object.expect (code-challenges.test.js:34:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:

// b) Create the function that makes the test pass.

// const removeAndShuffle = (array) => {
//         return array.slice([1]).sort(() => Math.random() - 0.5)
// }
// refactored 
// const removeAndShuffle = (array) => array.slice([1]).sort(() => Math.random() - 0.5)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// input: an object that contains both upvotes and down votes.
// output: a number that has tallied all votes, both up and down and returns the aggrigate value of those votes. 

// pseudo: Create a function called tallyTotalVotes. Passing the given object variable through as the parameters use Object.value to pull the values from key:value pairs and return them as an array. Use .reduce to iterate over each item in the array is assending index order. By using Math.abs(absolute), setting it as negative for the second value and setting the .reduce starting point at 0, this will allow the downvotes to be subtracted from the upvotes, even if the return is a negative number. 

// test: 
// describe("tallyTotalVotes", () => {
//     const votes1 = { upVotes: 13, downVotes: 2 }
//     const votes2 = { upVotes: 2, downVotes: 33 }
//     it("take in an object that contains up votes and down votes and returns the end tally" , () => {
//         expect(tallyTotalVotes(votes1)).toEqual(11)
//         expect(tallyTotalVotes(votes2)).toEqual(-31)
//     })
// })

// jest-test-1:
// FAIL  ./code-challenges.test.js
// tallyTotalVotes
//   ✕ take in an object that contains up votes and down votes and returns the end tally (1 ms)

// ● tallyTotalVotes › take in an object that contains up votes and down votes and returns the end tally

//   ReferenceError: tallyTotalVotes is not defined

//      99 |     const votes2 = { upVotes: 2, downVotes: 33 }
//     100 |     it("take in an object that contains up votes and down votes and returns the end tally" , () => {
//   > 101 |         expect(tallyTotalVotes(votes1)).toEqual(11)
//         |         ^
//     102 |         expect(tallyTotalVotes(votes2)).toEqual(-31)
//     103 |     })
//     104 | })

//     at Object.expect (code-challenges.test.js:101:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-2:
// FAIL  ./code-challenges.test.js
// tallyTotalVotes
//   ✕ take in an object that contains up votes and down votes and returns the end tally (2 ms)

// ● tallyTotalVotes › take in an object that contains up votes and down votes and returns the end tally

//   expect(received).toEqual(expected) // deep equality

//   Expected: 11
//   Received: undefined

//      99 |     const votes2 = { upVotes: 2, downVotes: 33 }
//     100 |     it("take in an object that contains up votes and down votes and returns the end tally" , () => {
//   > 101 |         expect(tallyTotalVotes(votes1)).toEqual(11)
//         |                                         ^
//     102 |         expect(tallyTotalVotes(votes2)).toEqual(-31)
//     103 |     })
//     104 | })

//     at Object.toEqual (code-challenges.test.js:101:41)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// jest-test-3:
// PASS  ./code-challenges.test.js
// tallyTotalVotes
//   ✓ take in an object that contains up votes and down votes and returns the end tally (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// const tallyTotalVotes = obj => Object.values(obj).reduce((a, b) => -Math.abs(b) - a, 0)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// const dataArray3 = ["string", "test"]
// const dataArray4 = ["number", "test", "Boolean", "Gene", "null", "Nicole"]
// const dataArray5 = ["Aplha", "test", "2023", "Gene", "null", "Nicole"]

    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// input: 2 seperate arrays
// output: 1 array with any dulicate values from the input arrays removed

// pseudo: Create a functional called oneUniqueArray. Pass two seperate array arguments as the parameters. Create a new variable called combinedArrays. In this variable use the spread operator with new to create a new instance of the input arrays and the Set which will only store unique values. This will return the arrays with all duplicate values removed. .concat is then used to combine the two arrays. The new variable combinedArrays in then returned. 

// test:
    // describe("oneUniqueArray", () => {
    //     const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    //     const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    //     // const dataArray3 = ["string", "test"]
    //     // const dataArray4 = ["number", "test", "Boolean", "Gene", "null", "Nicole"]
    //     // const dataArray5 = ["Aplha", "test", "2023", "Gene", "null", "Nicole"]
    //     it("take in two arrays as arguments and returns one array with no duplicate values." , () => {
    //         expect(oneUniqueArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    //         // expect(oneUniqueArray(dataArray1, dataArray2, dataArray3, dataArray4, dataArray5)).toEqual([
    //         //     'array',     'object',
    //         //     'number',    'string',
    //         //     'Boolean',   'null',
    //         //     'undefined', 'test',
    //         //     'Gene',      'Nicole',
    //         //     'Aplha',     '2023'
    //         //   ])

    //     })
    // })

    // jest-test-1:
//     FAIL  ./code-challenges.test.js
//     oneUniqueArray
//       ✕ take in two arrays as arguments and returns one array with no duplicate values. (1 ms)
  
//     ● oneUniqueArray › take in two arrays as arguments and returns one array with no duplicate values.
  
//       ReferenceError: oneUniqueArray is not defined
  
//         188 |         // const dataArray5 = ["Aplha", "test", "2023", "Gene", "null", "Nicole"]
//         189 |         it("take in two arrays as arguments and returns one array with no duplicate values." , () => {
//       > 190 |             expect(oneUniqueArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//             |             ^
//         191 |             // expect(oneUniqueArray(dataArray1, dataArray2, dataArray3, dataArray4, dataArray5)).toEqual([
//         192 |             //     'array',     'object',
//         193 |             //     'number',    'string',
  
//         at Object.expect (code-challenges.test.js:190:13)
  
//   Test Suites: 1 failed, 1 total
//   Tests:       1 failed, 1 total

    // jest-test-2:
//  FAIL  ./code-challenges.test.js
//   oneUniqueArray
//     ✕ take in two arrays as arguments and returns one array with no duplicate values. (2 ms)

//   ● oneUniqueArray › take in two arrays as arguments and returns one array with no duplicate values.

//     expect(received).toEqual(expected) // deep equality

//     Expected: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//     Received: undefined

//       188 |         // const dataArray5 = ["Aplha", "test", "2023", "Gene", "null", "Nicole"]
//       189 |         it("take in two arrays as arguments and returns one array with no duplicate values." , () => {
//     > 190 |             expect(oneUniqueArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//           |                                                            ^
//       191 |             // expect(oneUniqueArray(dataArray1, dataArray2, dataArray3, dataArray4, dataArray5)).toEqual([
//       192 |             //     'array',     'object',
//       193 |             //     'number',    'string',

//       at Object.toEqual (code-challenges.test.js:190:60)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


    // jest-test-3:
//     PASS  ./code-challenges.test.js
//     oneUniqueArray
//       ✓ take in two arrays as arguments and returns one array with no duplicate values. (1 ms)
  
//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total
//   Snapshots:   0 total

    // b) Create the function that makes the test pass.

    // const oneUniqueArray = (array1, array2) => {
    //     let combinedArrays = [...new Set(array1.concat(array2))]
    //     return combinedArrays
    // }


// Stretch Goal: Refactored the above function when adding the spread operator and rest parameter to accomidate a dynamic number of arguments
// const oneUniqueArray = (array, ...arrays) => [...new Set(array.concat(...arrays))]

