const accountId = 11456
let accountEmail = "akhils8493@gmail.com"
var accountPassword = "12345"
accountCity = "Jammu"
let name;

// accountId = 2 // not allowed in js 

accountEmail = "akhil.sharma@spit.ac.in"
accountPassword = "@Khil"
accountCity = "Mumbai"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log("accountId")

console.table([accountId,accountEmail,accountPassword,accountCity,name])