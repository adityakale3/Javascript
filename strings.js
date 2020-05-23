/*
                        STRING Methods
length                  indexOf();              concat();
toLowerCase();          lastIndexOf();          split();
toUpperCase();          replace();              repeat();
includes();             trim();                 slice();
startsWith();           charAt();               substr();
endsWith();             charAt();               substring();
search();               charCodeAt();           toString();
match();                fromCharCode();         valueOf(); 
*/

var str = "They don't know that we know that they know";
var str2 = "    How you Doin !!!                ";

/* LENGTH  */
console.log('Length        : ',str.length);
// Outputs length of sentence including spaces


/* toLowerCase();  */
console.log('toLowerCase() : ',str.toLowerCase());
// Outputs string with all lower case letters


/* toUpperCase();  */
console.log('toUpperCase() : ',str.toUpperCase());
// Outputs string with all UPPER case letters


/* includes();  */
console.log('includes()    : ',str.includes('we'));
// Outputs boolean if passed argument word is avaliable in string, ITS CASE SENSATIVE


/* startsWith();  */
console.log('startsWith()  : ',str.startsWith('They'));
// Outputs boolean if passed argument word is in the Start of the string, ITS CASE SENSATIVE


/* endsWith();  */
console.log('endsWith()    : ',str.endsWith('know'));
// Outputs boolean if passed argument word is in the End of the string, ITS CASE SENSATIVE


/* search();  */
console.log('search()      : ',str.search('know'));
// Outputs start of INDEX number of the searched word. outputs, when first found ELSE returns -1, ITS CASE SENSATIVE


/* match();  */
console.log('match()       : ',str.match('know'));
// Outputs array ['Word',index,String,groups] ELSE RETURNS NULL, ITS CASE SENSATIVE
console.log('match()       : ',str.match(/o/g));
// Outputs array of repeating of all instances. g Stands for Global ELSE RETURNS NULL, ITS CASE SENSATIVE


/* indexOf()  */
console.log('indexOf()     : ',str.indexOf('know'));
// Outputs start of INDEX number of the searched word. outputs, when first found ELSE returns -1, ITS CASE SENSATIVE


/* lastIndexOf()  */
console.log('lastIndexOf() : ',str.lastIndexOf('adi'));
// Outputs start of INDEX number. Starts searching from reserse, ELSE returns -1, ITS CASE SENSATIVE


/* replace()  */
console.log('replace()     : ',str.replace('know','knew'));
// Replaces 1st occurance of 1st word with 2nd, WORKS with single instance only


/* trim()  */
console.log('trim()        : ',str2.trim());
// Removes all the spaces at Start and end of String


/* charAt()  */
console.log('charAt()      : ',str.charAt(2));
// Outputs Character at given Index, Else returns Blank


/* charCodeAt()  */
console.log('charCodeAt()  : ',str.charCodeAt(2));
// Outputs number, representing the unicode of the character at the specified index. Used in keyboard detection


/* fromCharCode()  */
console.log('fromCharCode(): ',String.fromCharCode(65));
// Outputs A as ASCII representation of keyboard 65 give Capital A.
// Opposite of charCodeAt. Should be applied on Global String, 


/* concat()  */
console.log('concat()      : ',str.concat(str2.trim(),', Nooooo!'));
// Adds as many strings need to be attached


/* split()  */
console.log('split()       : ',str.split(' '));
var str3 = "Oh, umm, Joey was born, and then 28 years later, I was robbed!";
console.log('split() 2     : ',str3.split(','));
// Splits strings into Array at passed argument.


/* repeat()  */
console.log('repeat()      : ',str.repeat(2));
console.log('repeat()      : ',"Aditya ! ".repeat(4));
// Repeats Strings times the argument is passed with.


/* slice()  */
console.log('slice()       : ',str.slice(3));
// Slices the String and outputs from giving number(Index) till end
console.log('slice()       : ',str.slice(3,10));
// If 2 arguments are passed, Outputs all index Charaters at between given numbers including 1st index, excludes last.


/* substr()  */
console.log('substr()      : ',str.substr(2));
// Adds as many strings need to be attached