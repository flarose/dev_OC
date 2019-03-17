$(function(){
    

    
// Variables globales
//var attaque = true;
var gagne = true;
var trouve = false;
var i = 0;
var j = 0;
//var partie = "en cours";
//var joueur = "Joueur1";
let imax = 9;
let jmax = 9; 
var n = 20;
var playerX=0;
var playerY=0;
//var clique = true;
 

//Definition de la classe Joueur
class Joueur {
    constructor(nom, vie, arme) {
        this.nom =nom;
        this.vie =vie;
        this.arme=arme;
        this.i1 =0;
        this.j1 =0;
    }
    
    decrire() {
        console.log(this.nom + ' a ' + this.vie + ' points de vie, il possede le ' + this.arme);
    }
    
    repereJoueur(n) {
    var trouve = false;
    while (trouve === false) {
        for (i = 0; i < table.rows.length; i++) {
            for (j = 0; j < table.rows[i].cells.length; j++) {
                if (table.rows[i].cells[j].innerHTML === '<img src="../joueur' + n +'.png">') {
                    this.i1 = i;
                    this.j1 = j;
                    trouve = true;
                    console.log("la valeur i"+ n + " :" + this.i1);
                    
                    console.log("la valeur j" + n + " :" + this.j1);

                    }
            }
            }
        }
        
    }
   deplaceJoueur(n){
    
    trouve = false;
    var j = this.j1; 
    for (i=this.i1-1; i>=this.i1-3;i--) {
            if(trouve === false) {
                if (i<0) {
                    trouve = true;
                    } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                            table.rows[i].cells[j].style.border = "3px solid black";
                            console.log("indices i, j : " + i + ", " + j);
                            table.rows[i].cells[j].classList.add("highlight");
                            $('.highlight').on('click', function() {
            
                                var newX = $(this).closest("tr").index();
                                var newY = $(this).closest("td").index();
                                //alert("tu as cliqué sur la case : " + newX + ", " + newY);

                                var elementImage = document.createElement("img");
                                elementImage.src = "../case1.png";
                                table.rows[playerX].cells[playerY].innerHTML = '';
                                table.rows[playerX].cells[playerY].appendChild(elementImage);

                                playerX = newX;
                                playerY = newY;

                                var elementImage = document.createElement("img");
                                elementImage.src = "../joueur" + n + ".png";
                                table.rows[playerX].cells[playerY].innerHTML = '';
                                table.rows[playerX].cells[playerY].appendChild(elementImage);
                                clearHighlight();
                                
                             })
                            
                            //console.log(table.rows[i].cells[j].innerHTML);
                    }
                    else if (table.rows[i].cells[j].innerHTML !== '<img src="../case1.png">')
                    {
                        trouve = true;
                    }
            }

    }
    
    
    trouve = false; 
    var j = this.j1;
    for (i=this.i1+1; i<=this.i1+3;i++) {
        if(trouve === false) {
            if (i>(imax-1)) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        
                        table.rows[i].cells[j].style.border = "3px solid black";
                        console.log("indices i, j : " + i + ", " + j);
                        table.rows[i].cells[j].classList.add("highlight");
                        $('.highlight').on('click', function() {
            
                            var newX = $(this).closest("tr").index();
                            var newY = $(this).closest("td").index();
                            //alert("tu as cliqué sur la case : " + newX + ", " + newY);

                            var elementImage = document.createElement("img");
                            elementImage.src = "../case1.png";
                            table.rows[playerX].cells[playerY].innerHTML = '';
                            table.rows[playerX].cells[playerY].appendChild(elementImage);

                            playerX = newX;
                            playerY = newY;

                            var elementImage = document.createElement("img");
                            elementImage.src = "../joueur" + n + ".png";
                            table.rows[playerX].cells[playerY].innerHTML = '';
                            table.rows[playerX].cells[playerY].appendChild(elementImage);
                            clearHighlight();
                            
                         })
                        
                        //console.log(table.rows[i].cells[j].innerHTML);
                }
                else if (table.rows[i].cells[j].innerHTML !== '<img src="../case1.png">')
                {
                    trouve = true;
                }
        }
    }
    
        
    
    
    trouve = false;
    var i = this.i1;
    for (j=this.j1-1; j>=this.j1-3;j--) {
       if(trouve === false) {
            if (j<0) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        table.rows[i].cells[j].style.border = "3px solid black";
                        console.log("indices i, j : " + i + ", " + j);
                        table.rows[i].cells[j].classList.add("highlight");
                        $('.highlight').on('click', function() {
            
                            var newX = $(this).closest("tr").index();
                            var newY = $(this).closest("td").index();
                            //alert("tu as cliqué sur la case : " + newX + ", " + newY);

                            var elementImage = document.createElement("img");
                            elementImage.src = "../case1.png";
                            table.rows[playerX].cells[playerY].innerHTML = '';
                            table.rows[playerX].cells[playerY].appendChild(elementImage);

                            playerX = newX;
                            playerY = newY;

                            var elementImage = document.createElement("img");
                            elementImage.src = "../joueur" + n + ".png";
                            table.rows[playerX].cells[playerY].innerHTML = '';
                            table.rows[playerX].cells[playerY].appendChild(elementImage);
                            clearHighlight();
                            
                         })
                        
                        //console.log(table.rows[i].cells[j].innerHTML);
                }
                else if (table.rows[i].cells[j].innerHTML !== '<img src="../case1.png">') {
                    trouve = true;
                    }
        }
    }
    
        
    
    
    trouve = false;
    var i = this.i1;
    for (j=this.j1+1; j<=this.j1+3;j++) {
        if(trouve === false) {
            if (j>(jmax-1)) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                        table.rows[i].cells[j].style.border = "3px solid black";
                        console.log("indices i, j : " + i + ", " + j);
                        table.rows[i].cells[j].classList.add("highlight");
                        $('.highlight').on('click', function() {
            
                            var newX = $(this).closest("tr").index();
                            var newY = $(this).closest("td").index();
                            //alert("tu as cliqué sur la case : " + newX + ", " + newY);

                            var elementImage = document.createElement("img");
                            elementImage.src = "../case1.png";
                            table.rows[playerX].cells[playerY].innerHTML = '';
                            table.rows[playerX].cells[playerY].appendChild(elementImage);

                            playerX = newX;
                            playerY = newY;

                            var elementImage = document.createElement("img");
                            elementImage.src = "../joueur" + n + ".png";
                            table.rows[playerX].cells[playerY].innerHTML = '';
                            table.rows[playerX].cells[playerY].appendChild(elementImage);
                            clearHighlight();
                            
                         })
                        //console.log(table.rows[i].cells[j].innerHTML);
                }
                else if (table.rows[i].cells[j].innerHTML !== '<img src="../case1.png">') {
                    trouve = true;
                    }
        }
    }
       
    
        
    }
    
  
  
}  
 function clearHighlight() {
        for (i=0; i <imax; i++) {
            for (j=0; j <jmax; j++) {
               
                   table.rows[i].cells[j].style.border = "";
                   table.rows[i].cells[j].classList.remove("highlight"); 
                   //console.log("Indices des 'highlight' effaces : " + i + ", " +j);
                   //console.log(table.rows[i].cells[i].innerHTML);
                
                   
            }
        }
        
    }  

    
// Création du tableau HTML
var table = document.getElementById("tableau");

for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = 0;
    }
}
    
//////////////////////////////////////////////
//Definition des fonctions pour creer la carte
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
//////////////////////////////////////////////////
//Fin Definition des fonctions pour creer la carte
 
    
    
    
////////////////////////////////////////////////////////////////////////////  
// Creation de la carte
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

//On place les joueurs et les armes sur la carte
// Appel à la fonction placeJoueur() ici "2" = joueur 1
placeJoueur(2);
    
placeJoueur(3);
placeArme(4);
placeArme(5);
placeArme(6);
placeArme(7);


//Parcours de la carte, on remplace les chiffres par les images correspondantes
for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        var elementImage = document.createElement("img");
        elementTable = table.rows[i].cells[j].innerHTML;
        //alert(elementTable);
        switch (elementTable) {
            case "0" :
                elementImage.src = "../case1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            case "1" :
                elementImage.src = "../case3.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
            case "2" :
                elementImage.src = "../joueur1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "3" :
                elementImage.src = "../joueur2.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "4" :
                elementImage.src = "../arme1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "5" :
                elementImage.src = "../arme2.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "6" :
                elementImage.src = "../arme3.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                break;
                
            case "7" :
                elementImage.src = "../arme4.png";
                 table.rows[i].cells[j].innerHTML = '';
                 table.rows[i].cells[j].appendChild(elementImage);
                 break;
            
            default :
                elementImage.src = "../case1.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                
                
                }
        
    }
}
 ////////////////////////////////////////////////////////////////////////////   
// Fin Creation de la carte




    
joueur1 = new Joueur('Joueur1', 100, 'arme1');
joueur2 = new Joueur('Joueur2', 100, 'arme2');




/* 
programme principal
*/
 do {
     if ((n/10) % 2 === 0) {
         joueur1.repereJoueur(1);
         playerX = joueur1.i1;
         playerY = joueur1.j1;
         joueur1.decrire();
         //joueur1.deplaceJoueur(1);
         
         n+=10;
         
        } else {
         alert('cliquez pour continuer');
         joueur2.repereJoueur(2);
         playerX = joueur2.i1;
         playerY = joueur2.j1;
         joueur2.decrire();
         joueur2.deplaceJoueur(2);
         
         
         
         n+=10;
         gagne = false;
        }
     
 } while(gagne === true)


    
    
/* 
Fin programme principal
*/
    
    
})