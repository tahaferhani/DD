// var => fonction
// let => bloc (if, for, while)

/*
 caractere
 _
 $
 */

function test() {
    if (true) {
        var b = 20;
        let c = 10;
    }

    //console.log(b);
    console.log(c);
}

test();

// Types primitifs (par valeur)
/**
 Nombre
 String
 Boolean
 */

// function duplicateAge(age) {
//     age = age * 2;
// }

// var age = 10;
// duplicateAge(age);
// console.log(age);

// objets (par référence)

// var d = 10;
// var e = d;
// d = 20;

// var baseUser = {
//     nom: null,
//     age: null
// };

// var user = baseUser;

// user.nom = "Aziz";

// console.log("BASE USER", baseUser);
// console.log("USER", user);
