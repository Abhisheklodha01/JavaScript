// const coding = ["cpp", "rb", "js", "java", "py"]

//  const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item // for each loop don't return the value
// })

// console.log(values);

/***************************  filters in JS  *************************/

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = MyNums.filter((num) => num > 4)  // it return the value
// // console.log(newNums);

// const numbers = MyNums.filter( (value) => {
//           return value > 4
// })
// console.log(numbers);


// const newNums = []
// MyNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const book = [
    {
        title: 'book one', genre: 'fiction', publish: 1981, edition: 2004
    },

    {
        title: 'book two', genre: 'operating', publish: 1982, edition: 2005
    },

    {
        title: 'book three', genre: 'computer', publish: 1983, edition: 2006
    },

    {
        title: 'book fourth', genre: 'fiction', publish: 1984, edition: 2007
    },

    {
        title: 'book five', genre: 'history', publish: 1985, edition: 2008
    },

    {
        title: 'book six', genre: 'polity', publish: 1986, edition: 2009
    },

    {
        title: 'book seven', genre: 'history', publish: 1987, edition: 2010
    },

    {
        title: 'book eight', genre: 'fiction', publish: 1988, edition: 2011
    },

    {
        title: 'book nine', genre: 'history', publish: 1989, edition: 2012
    },
]


let UserBooks = book.filter( (bk) => bk.genre === 'history') // rewrite
UserBooks = book.filter( (bk) => bk.publish >= 1985 )
UserBooks = book.filter( (bk) => {
    return bk.publish >= 1985 && bk.genre === 'history'
})


console.log(UserBooks);





