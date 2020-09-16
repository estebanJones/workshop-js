var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach()
villes.forEach(function(ville){
    console.log(ville);
});

//every()
var contientA = function(ville) {
    return ville.indexOf('a') >= 0;
}
var lettreADansToutesLesVilles = villes.every(contientA);
console.log("lettreADansToutesLesVilles = " + lettreADansToutesLesVilles)

//some()
var contientTiret = function(ville) {
    return ville.indexOf('-') > 0;
}
var auMoinsUneVilleAvecUnTiret = villes.some(contientTiret);
console.log("auMoinsUneVilleAvecUnTiret = " + auMoinsUneVilleAvecUnTiret);

//filter()
var sansTiretSansEspace = function(ville) {
    return ville.indexOf('-') == -1 && ville.indexOf(' ') == -1;
}
var villesSansTiretSansEspace = villes.filter(sansTiretSansEspace);
villesSansTiretSansEspace.forEach(function(ville){
    console.log(ville);
    });

//Chainer les Fonctions
var terminantParS = function(ville){
    return ville.charAt(element.length -1) == 's';
}
var villeTerminantParS = new Array();

villeTerminantParS = villes.filter(terminantParS);

var villesMajusculeSeTerminantParS = new Array(); 

villeTerminantParS.forEach(function(ville){
    villesMajusculeSeTerminantParS.push(ville.toUpperCase());
        });

villesMajusculeSeTerminantParS.forEach(function(ville){
    console.log(ville);
})