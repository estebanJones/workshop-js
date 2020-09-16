console.log("01 - Fonctions");

const nombre1 = 10; 
const nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
} 

const resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 = " + resultat1);

//Variable de type fonction
const somme = additionner;
const resultat2 = somme(nombre1, nombre2);
console.log("resultat2 = " + resultat2);

const multiplication = function(nb1, nb2) {
    return nb1 * nb2;
}
const resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3 = " + resultat3);

//Fonction comme élément du 1er ordre
const afficherOperation = function(nomOperation, operation, nb1, nb2) {
    return nomOperation + "(" + nb1 + "," + nb2 + ") = " + operation(nb1, nb2);
}

console.log(afficherOperation("Somme", somme, 20, 40));
console.log(afficherOperation("Multiplication", multiplication, 10, 20))
console.log(afficherOperation("Soustraction", function(nb1, nb2) {return nb1 - nb2}, 15, 5))