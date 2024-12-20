const accountId = 144553
let accountEmail = "simi36941@gmail.com"

var accountPassword = "12345"
accountCity = "Jaipur"

/* Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2

console.log(accountId);
accountEmail = "hc@hc.com"
accountPassword = "21212121"

console.table([accountId, accountEmail, accountPassword, accountCity])