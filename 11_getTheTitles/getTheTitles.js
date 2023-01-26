const getTheTitles = function(bookArr) {
    // let bookTitleArr = [];
    // for (let i = 0; i < bookArr.length; i++) {
    //     bookTitleArr.push(bookArr[i].title);
    // }
    // return bookTitleArr;
    // More efficient / cleaner approach
    // array.map takes each element in the array and you 
    // alter the element however you want and returns it as an array
    let bookTitleArr = bookArr.map(book => book.title);
    return bookTitleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
