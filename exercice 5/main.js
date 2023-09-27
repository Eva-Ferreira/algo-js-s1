let a = "Jean"
let b = "Paul"
let result = checkName( a, b )
let c = 1
let d = 2
let teste = soustraction( c, d )

function checkName ( a, b ) {
    if ( a === b ) {
      return true  
    }
    else {
        return false
    }
}

result = checkName( a, b )

console.log ( result )   

function soustraction ( c, d ) {
    return c - d  
}
console.log ( teste )