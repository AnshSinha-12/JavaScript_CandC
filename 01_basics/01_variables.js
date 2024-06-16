const accountId = 35354
let accountEmail = "ansh@google.com"
var accountPassword = "354566"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "as@as.com"
accountPassword = "265356"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])