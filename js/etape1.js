$(function(){
    

    
// Variables globales
var attaque = true;
var gagne = true;
var trouve = false;
var i = 0;
var partie = "en cours";


// Création du tableau HTML
var table = document.getElementById("tableau");

for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = 0;
    }
}


function placeMur(i, j){
    
        table.rows[i].cells[j].innerHTML = 1;
        
}

function placeJoueur(joueur){
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = joueur;
            trouve = true;
            } 
           
        }
    trouve = false;   
   
        
        
}

function placeArme(arme){
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = arme;
            trouve = true;
            } 
           
        }
    trouve = false;   
   
        
        
}


// initialisation de la carte 
for (i =0; i<12; i++) {
    var indiceLigne= Math.floor(Math.random()*9);
    var indiceColonne= Math.floor(Math.random()*9);
    if (table.rows[indiceLigne].cells[indiceColonne].textContent === '0') {
        placeMur(indiceLigne, indiceColonne);
    } else {
        i--;
    }
    
}

placeJoueur(2);
placeJoueur(3);
placeArme(4);
placeArme(5);
placeArme(6);
placeArme(7);



for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        var elementImage = document.createElement("img");
        tdElement = table.rows[i].cells[j].innerHTML;
        //alert(tdElement);
        switch (tdElement) {
            case "0" :
                elementImage.src = "../case1.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            case "1" :
                elementImage.src = "../case3.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            case "2" :
                elementImage.src = "../joueur1.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "3" :
                elementImage.src = "../joueur2.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "4" :
                elementImage.src = "../arme1.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "5" :
                elementImage.src = "../arme2.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "6" :
                elementImage.src = "../arme3.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "7" :
                elementImage.src = "../arme4.png";
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            
            default :
                elementImage.src = "../case1.png";
                table.rows[i].cells[j].appendChild(elementImage);
                
                
                }
        
    }
}

















//classe Joueur (définition)
class Joueur {
    init(nom, vie, arme) {
        this.nom = nom;
        this.vie = vie;
        this.arme= arme;
    }
    
    //description du joueur
    
    decrire() {
        return'${this.nom} a ${this.vie} points de vie, il possede le ${this.arme}';
    }
    joue(adversaire) {
       switch(attaque) {
           case "true" :
               if (gagne = false) {
                   this.vie = this.vie - ((adversaire.arme).degat);
                   
               }
           case "false" :
               if (gagne = false) {
                  this.vie = this.vie - ((adversaire.arme).degat)/2;
                   
               }
       }
       
   }
}


class Arme {
    init(nom) {
        this.nom = nom;
        this.degat = 10;
    }
    decrire() {
        return "je m'appelle ${this.nom}et je t'enlèves ${this.degat} de points de vie ";
    }
    
}


//début programme principal

/*while (partie !== "fini") {
    i++;
   
    if (i % 2 === 0) {
        //document.getElementById("tourRole").innerHTML = "joueur1";
        console.log("joueur1");
        
    } else {
        //document.getElementById("tourRole").innerHTML = "joueur2";
        console.log("joueur2");
        
        
    }
       
       }*/
    
    

})