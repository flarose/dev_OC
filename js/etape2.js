$(function(){
   
// Variables globales
//var attaque = true;
var gagne = true;
var trouve = false;
var i = 0;
var j = 0;
var nbre_tour=0;
//var partie = "en cours";
//var joueur = "Joueur1";
let imax = 9;
let jmax = 9; 
var N = 1;
var playerX=0;
var playerY=0;
//var clique = true;
var clear = false;
var Armes =[
    {nom_Arme :"arme1",
     degat_Arme :10
    },
    {nom_Arme :"arme2",
     degat_Arme :15
    },
    {nom_Arme :"arme3",
     degat_Arme :5
    },
    {nom_Arme :"arme4",
     degat_Arme :20
    }
    
]

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
    trouve = false;
    while (trouve === false) {
        for (i = 0; i < table.rows.length; i++) {
            for (j = 0; j < table.rows[i].cells.length; j++) {
                if (table.rows[i].cells[j].innerHTML === '<img src="../joueur' + n +'.png">') {
    
                    this.i1 = i;
                    this.j1 = j;
                    trouve = true;
                    console.log("la valeur i de "+ this.nom + " :" + this.i1);
                    
                    console.log("la valeur j de " + this.nom + " :" + this.j1);

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
                            while (nbre_tour<3) {
                            highlight(n);
                            this.i1 = playerX;
                            this.j1 = playerY;
                            clearHighlight();
                            if(n===1) {
                                n=2;
                                } else {
                                    n=1;
                                    }
                            nbre_tour++;
                            }
                            
                            
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
                        while (nbre_tour<3) {
                            highlight(n);
                            this.i1 = playerX;
                            this.j1 = playerY;
                            clearHighlight();
                            if(n===1) {
                                n=2;
                                } else {
                                    n=1;
                                    }
                            nbre_tour++;
                            }
                        
                        
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
                        while (nbre_tour<3) {
                            highlight(n);
                            this.i1 = playerX;
                            this.j1 = playerY;
                            clearHighlight();
                            if(n===1) {
                                n=2;
                                } else {
                                    n=1;
                                    }
                            nbre_tour++;
                            }
                        
                        
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
                        
                        
                        while (nbre_tour<3) {
                            highlight(n);
                            this.i1 = playerX;
                            this.j1 = playerY;
                            clearHighlight();
                            if(n===1) {
                                n=2;
                                } else {
                                    n=1;
                                    }
                            nbre_tour++;
                            }
                        
                }
                else if (table.rows[i].cells[j].innerHTML !== '<img src="../case1.png">') {
                    trouve = true;
                    }
        }
    }
       
    
        
    }
    
  
  
} 
    
function highlight(n) {
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
        
                                
        })
}
    
 function clearHighlight() {
        for (i=0; i <imax; i++) {
            for (j=0; j <jmax; j++) {
               
                   table.rows[i].cells[j].style.border = "";
                   table.rows[i].cells[j].classList.remove("highlight"); 
                   
                
                   
            }
        }
        return true;
        
    }  

/*function detecteCombat() {
    
}*/

    
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
    trouve=false;
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = joueur;
            trouve = true;
            } 
           
        }
    //trouve = false;   
   
        
        
}

function placeArme(arme){
    trouve = false;
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = arme;
            trouve = true;
            } 
           
        }
       
   
        
        
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


//joueur1 = new Joueur('Joueur1', 100, 'arme1');
//joueur2 = new Joueur('Joueur2', 100, 'arme2');
joueurBoard = new Joueur('Joueur1', 100, 'arme1');

/* 
programme principal
*/
    


 
   
        joueurBoard.decrire();
        joueurBoard.repereJoueur(N);
        
        joueurBoard.deplaceJoueur(N);
     
        

    
    
/* 
Fin programme principal
*/
    
    
})