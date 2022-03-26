var a = 10;
let b = 20;
const c = 30;

// var => fonction
// let => bloc (if, for, while)

/*
 caractere
 _
 $
 */

function test(age) {
    var a = 10;

    if (age > 18) {
        var b = 20;
        let c = 10;
    }

    console.log(b);
    console.log(c);
}

// Types primitifs (par valeur)
/**
 Nombre
 String
 Boolean
 */

// objets (par référence)

var d = 10;
var e = d;
d = 20;

var baseUser = {
    nom: null,
    age: null
};

var user = baseUser;

user.nom = "Aziz";

console.log("BASE USER", baseUser);
console.log("USER", user);
