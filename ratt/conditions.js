/*
    >
    >=
    <
    <=
    ==
    ===
    !=
*/
var age = 20;
if (age >= 18 && age <= 30)
    /**
 OR: ||
 AND : &&
 */

    var age = 18;
if (age == 18) {
} // true
if (age === 18) {
} // true
if (age == "18") {
} // true
if (age === "18") {
} // false

var note = 12;
var resultat = null;
var couleur = null;
if (note >= 10) {
    resultat = "Admis";
    couleur = "green";
} else if (note > 0) {
    resultat = "Non admis";
    couleur = "orange";
} else {
    resultat = "Nooooon admis";
    couleur = "red";
}

var result = null;
if (note >= 10) {
    result = "Admis";
} else {
    result = "Non admis";
}
// Inline IF
var resultat = note >= 10 ? "Admis" : "Non admis";

if (note >= 16) {
    resultat = "Très bien";
} else if (note >= 14) {
    resultat = "Bien";
} else if (note >= 10) {
    resultat = "Passable";
} else {
}

var age = 50;

if (age >= 18 && age < 40) {
    // Entre 18 et 39
}

var supportaire = {
    name: "Said",
    age: 12,
    parent: true
};

// if (supportaire.parent) = if (supportaire.parent == true)
// if (!supportaire.parent) = if (supportaire.parent == false)
if (supportaire.age >= 18 || supportaire.parent) {
}

var resultat = age >= 18 && age < 40 && "Jeune";
console.log(resultat);

false && true && false; // = false
false || true || false; // = true
