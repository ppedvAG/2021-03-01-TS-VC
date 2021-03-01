"use strict";
var allTagsHTMLColl = document.getElementsByTagName('*'); // gibt eine HTMLCollection zurück
console.log('allTags', allTagsHTMLColl);
var allTagsArr = [].slice.call(allTagsHTMLColl); // bis 'es2015'
console.log('allTagsArr :>> ', allTagsArr);
var myStringß = 'ßßßßß';
// let newString = myStringß.replace(/ß/i, 'ss')
var newString = myStringß.replace(/ß/g, 'ss');
// let newString = myStringß.replace('ß', 'ss')
console.log('myStringß', myStringß);
console.log('newString', newString);
allTagsArr.forEach(function (element) {
    var text = element.innerText;
    // console.log('text :>> ', text);
    text = text.replace(/ß/g, 'ss');
    element.innerText = text;
});
// console.log('allTagsArr', allTagsArr)
