const getTheTitles = function(bookArr) {
    let bookTitleArr = [];
    for (let i = 0; i < bookArr.length; i++) {
        bookTitleArr.push(bookArr[i].title);
    }
    return bookTitleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
