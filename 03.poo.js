function Personne(nom, prenom, pseudo, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.age = "NON RENSEIGNE";

    this.getNomComplet = function() {
        return console.log(this.nom + " " + this.prenom + " " + this.pseudo);
    }
}

const jules = new Personne("jules", "LEMAIRE", "jules77");
const paul = new Personne("Paul", "LEMAIRE", "paul44");


const afficherPersonne = function(personne) {
    console.log(personne.getNomComplet());
}

afficherPersonne(jules);
// jules.pseudo = "julietta";
// afficherPersonne(jules);
// console.log(jules.age);
// Personne.__proto__.age = "NON RENSEIGNE";
// console.log(jules.age);
// jules.age = 30;
// console.log(jules.age);

Personne.__proto__.getInitial = function() {
    return this.nom.substring(0, 1).toUpperCase() + "." + this.prenom.substring(0,1).toUpperCase();
}

console.log(jules.getInitial());

const robert = {
    "prenom" : "Robert",
    "nom" : "LEPREFET",
    "pseudo" : "robert77",
    getNomComplet = function() {
        return console.log(this.nom + " " + this.prenom + " " + this.pseudo);
    }
}
robert.getNomComplet();
afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client(numeroClient){
    this.numeroClient = numeroClient;
    this.getInfo = function(){
        return this.prenom + " " + this.nom + " " + this.numeroClient;
    }
}

Client.prototype = new Personne;

var steve = new Client('A01');
steve.prenom = 'Steve';
steve.nom = 'LUCAS';
steve.pseudo = 'steve44';
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());