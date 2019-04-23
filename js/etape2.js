$(function(){
   
// Variables globales

var gagne = true;
var trouve = false;
var i = 0;
var j = 0;
var nbre_tour=0;
let imax = 9;
let jmax = 9; 
var playerX1=0;
var playerY1=0;
var playerX2=0;
var playerY2=0;
var rep_attaque = "";


class Arme {
    constructor(nom, degat) {
        this.nom = nom;
        this.degat = degat;
    }
}

//Definition de la classe Joueur
class Joueur {
    constructor(nom, vie, arme) {
        this.nom =nom;
        this.vie =vie;
        this.arme=arme;
        this.i1 =0;
        this.j1 =0;
    }
    
    repereJoueur(n) {
        trouve = false;
        while (trouve === false) {
            for (i = 0; i < table.rows.length; i++) {
                for (j = 0; j < table.rows[i].cells.length; j++) {
                    if (table.rows[i].cells[j].innerHTML === '<img src="../joueur' + n +'.png">') {

                        this.i1 = i;
                        this.j1 = j;
                        if(n===1) {
                            playerX1 = i;
                            playerY1 = j;
                            
                        }else if(n===2) {
                            playerX2 = i;
                            playerY2 = j;
                            
                        }
                        
                        trouve = true;
                        console.log("la valeur i de :" + this.i1);

                        console.log("la valeur j de :" + this.j1);

                        }
                }
                }
            }

    }   
    
    decrire() {
        console.log(this.nom + ' a ' + this.vie + ' points de vie, il possede le ' + this.arme.nom);
    }
    

   deplaceJoueur(){
    
    trouve = false;
    clearHighlight();
       
    var j = this.j1; 
    for (i=this.i1-1; i>=this.i1-3;i--) {
            if(trouve === false) {
                if (i<0) {
                    trouve = true;
                    } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                            
                        //Alors mettre en surbrillance
                        switch (table.rows[i].cells[j].innerHTML) {
                            case '<img src="../case1.png">' :
                                table.rows[i].cells[j].style.border = "3px solid black";
                                var divElement = document.createElement("div");
                                divElement.classList.add("highlight");
                                divElement.innerHTML = '<img src="../case1.png">';
                                table.rows[i].cells[j].innerHTML='';
                                table.rows[i].cells[j].appendChild(divElement);
                                break;
                                
                            case '<img src="../arme1.png">' :
                                collisionArme(i,j,'arme1');
                                break;
                            case '<img src="../arme2.png">' :
                                collisionArme(i,j,'arme2');
                                break;
                            case '<img src="../arme3.png">' :
                                collisionArme(i,j,'arme3');
                                break;
                            case '<img src="../arme4.png">' :
                                collisionArme(i,j,'arme4');
                                break;
                            default :
                                trouve = true;
                                break;
                                }
                      
                            
                    } else {
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
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                            
                        //Alors mettre en surbrillance
                        switch (table.rows[i].cells[j].innerHTML) {
                            case '<img src="../case1.png">' :
                                table.rows[i].cells[j].style.border = "3px solid black";
                                var divElement = document.createElement("div");
                                divElement.classList.add("highlight");
                                divElement.innerHTML = '<img src="../case1.png">';
                                table.rows[i].cells[j].innerHTML='';
                                table.rows[i].cells[j].appendChild(divElement);
                                break;
                                
                            case '<img src="../arme1.png">' :
                                collisionArme(i,j,'arme1');
                                break;
                            case '<img src="../arme2.png">' :
                                collisionArme(i,j,'arme2');
                                break;
                            case '<img src="../arme3.png">' :
                                collisionArme(i,j,'arme3');
                                break;
                            case '<img src="../arme4.png">' :
                                collisionArme(i,j,'arme4');
                                break;
                            default :
                                trouve = true;
                                break;
                                }
                      
                            
                    } else {
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
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                            
                        //Alors mettre en surbrillance
                        switch (table.rows[i].cells[j].innerHTML) {
                            case '<img src="../case1.png">' :
                                table.rows[i].cells[j].style.border = "3px solid black";
                                var divElement = document.createElement("div");
                                divElement.classList.add("highlight");
                                divElement.innerHTML = '<img src="../case1.png">';
                                table.rows[i].cells[j].innerHTML='';
                                table.rows[i].cells[j].appendChild(divElement);
                                break;
                                
                            case '<img src="../arme1.png">' :
                                collisionArme(i,j,'arme1');
                                break;
                            case '<img src="../arme2.png">' :
                                collisionArme(i,j,'arme2');
                                break;
                            case '<img src="../arme3.png">' :
                                collisionArme(i,j,'arme3');
                                break;
                            case '<img src="../arme4.png">' :
                                collisionArme(i,j,'arme4');
                                break;
                            default :
                                trouve = true;
                                break;
                                }
                      
                            
                    } else {
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
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                            
                        //Alors mettre en surbrillance
                        switch (table.rows[i].cells[j].innerHTML) {
                            case '<img src="../case1.png">' :
                                table.rows[i].cells[j].style.border = "3px solid black";
                                var divElement = document.createElement("div");
                                divElement.classList.add("highlight");
                                divElement.innerHTML = '<img src="../case1.png">';
                                table.rows[i].cells[j].innerHTML='';
                                table.rows[i].cells[j].appendChild(divElement);
                                break;
                                
                            case '<img src="../arme1.png">' :
                                collisionArme(i,j,'arme1');
                                break;
                            case '<img src="../arme2.png">' :
                                collisionArme(i,j,'arme2');
                                break;
                            case '<img src="../arme3.png">' :
                                collisionArme(i,j,'arme3');
                                break;
                            case '<img src="../arme4.png">' :
                                collisionArme(i,j,'arme4');
                                break;
                            default :
                                trouve = true;
                                break;
                                }
                      
                            
                    } else {
                        trouve = true;
                    }
                
        }
    }
       
    
        
    }
    
  
  
} 


    
function highlight(n) {
        
        $('.highlight').on('click', function(){
        switch(n) {
               case 1 :
                
                var newX = $(this).closest("tr").index();
                var newY = $(this).closest("td").index();

                var elementImage = document.createElement("img");
                elementImage.src = "../case1.png";
                table.rows[playerX1].cells[playerY1].innerHTML = '';
                table.rows[playerX1].cells[playerY1].appendChild(elementImage);
                console.log("Ancienne position du Joueur1: " + playerX1 + " " + playerY1 + " : " + table.rows[playerX1].cells[playerY1].innerHTML);

                playerX1 = newX;
                playerY1 = newY;

                if (table.rows[playerX1].cells[playerY1].innerHTML === '<img src="../arme1.png">' || table.rows[playerX1].cells[playerY1].innerHTML === '<div class="highlight"><img src="../arme1.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme1;
                    console.log(joueur1.arme.degat);
                    

                } else if (table.rows[playerX1].cells[playerY1].innerHTML === '<img src="../arme2.png">' || table.rows[playerX1].cells[playerY1].innerHTML === '<div class="highlight"><img src="../arme2.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme2;
                    console.log(joueur1.arme.degat);
                    


                } else if (table.rows[playerX1].cells[playerY1].innerHTML === '<img src="../arme3.png">' || table.rows[playerX1].cells[playerY1].innerHTML === '<div class="highlight"><img src="../arme3.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme3;
                    console.log(joueur1.arme.degat);
                    


                } else if (table.rows[playerX1].cells[playerY1].innerHTML === '<img src="../arme4.png">' || table.rows[playerX1].cells[playerY1].innerHTML === '<div class="highlight"><img src="../arme4.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme4;
                    console.log(joueur1.arme.degat);
                    

                }

                var elementImage = document.createElement("img");
                //elementImage.src = "../joueur" + n + ".png";
                
                elementImage.src = "../joueur1.png";
                
                table.rows[playerX1].cells[playerY1].innerHTML = '';
                table.rows[playerX1].cells[playerY1].appendChild(elementImage);

                 console.log("Nouvelle position du Joueur1: " + table.rows[playerX1].cells[playerY1].innerHTML);
                    
                 //detecteCombat()
                if (detecteCombat() === true) {
                     //alert("combat !");
                    attaqueJoueur(joueur1);
                 }
                
                break;
               case 2 : 
                
                var newX = $(this).closest("tr").index();
                var newY = $(this).closest("td").index();

                var elementImage = document.createElement("img");
                elementImage.src = "../case1.png";
                table.rows[playerX2].cells[playerY2].innerHTML = '';
                table.rows[playerX2].cells[playerY2].appendChild(elementImage);
                console.log("Ancienne position du Joueur2: " + playerX2 + " " + playerY2 + " : " + table.rows[playerX2].cells[playerY2].innerHTML);

                playerX2 = newX;
                playerY2 = newY;

                if (table.rows[playerX2].cells[playerY2].innerHTML === '<img src="../arme1.png">' || table.rows[playerX2].cells[playerY2].innerHTML === '<div class="highlight"><img src="../arme1.png"></div>') {
                    console.log(joueur1.arme.degat);
                    joueur2.arme = arme1;
                    console.log(joueur1.arme.degat);

                } else if (table.rows[playerX2].cells[playerY2].innerHTML === '<img src="../arme2.png">' || table.rows[playerX2].cells[playerY2].innerHTML === '<div class="highlight"><img src="../arme2.png"></div>') {
                    console.log(joueur1.arme.degat);
                    joueur2.arme = arme2;
                    console.log(joueur1.arme.degat);


                } else if (table.rows[playerX2].cells[playerY2].innerHTML === '<img src="../arme3.png">' || table.rows[playerX2].cells[playerY2].innerHTML === '<div class="highlight"><img src="../arme3.png"></div>') {
                    console.log(joueur1.arme.degat);
                    joueur2.arme = arme3;
                    console.log(joueur1.arme.degat);


                } else if (table.rows[playerX2].cells[playerY2].innerHTML === '<img src="../arme4.png">' || table.rows[playerX2].cells[playerY2].innerHTML === '<div class="highlight"><img src="../arme4.png"></div>') {
                    console.log(joueur1.arme.degat);
                    joueur2.arme = arme4;
                    console.log(joueur1.arme.degat);


                }

                var elementImage = document.createElement("img");
                //elementImage.src = "../joueur" + n + ".png";
                
                elementImage.src = "../joueur2.png";
                
                table.rows[playerX2].cells[playerY2].innerHTML = '';
                table.rows[playerX2].cells[playerY2].appendChild(elementImage);

                 console.log("Nouvelle position du Joueur2: " + table.rows[playerX2].cells[playerY2].innerHTML);
                
                 //detecteCombat()
                 if (detecteCombat() === true) {
                     //alert("combat !");
                     attaqueJoueur(joueur2);
                 }
        
                 break;
                default :
                 break;

                }
                if(gagne===true) {
                    if(n===1) {
                        $("#tourRole").html("joueur2");
                        joueur2.repereJoueur(2);
                        joueur2.deplaceJoueur();
                        highlight(2);
                    } else if(n===2) {
                        $("#tourRole").html("joueur1");
                        joueur1.repereJoueur(1);
                        joueur1.deplaceJoueur();
                        highlight(1);
                    }
                }
                })
        
       
        
         
}
 
 //on annule les cases de classe 'hightlight' - appelée en debut de deplaceJoueur()
 function clearHighlight() {
        for (i=0; i <imax; i++) {
            for (j=0; j <jmax; j++) {
               
                   table.rows[i].cells[j].style.border = "";
                   //table.rows[i].cells[j].classList.remove("highlight");
                   if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme4.png"></div>') {
                       console.log("indicesi,j apres clearhighlight() : " + i +", " + j);
                       table.rows[i].cells[j].innerHTML ='<img src="../arme4.png">';
                       console.log(table.rows[i].cells[j].innerHTML);
                      } else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme3.png"></div>') {
                               table.rows[i].cells[j].innerHTML ='<img src="../arme3.png">'; 
                               console.log(table.rows[i].cells[j].innerHTML);
                                }
                        else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme2.png"></div>') {
                                table.rows[i].cells[j].innerHTML ='<img src="../arme2.png">';
                                console.log(table.rows[i].cells[j].innerHTML);
                                }
                        else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme1.png"></div>') {
                                table.rows[i].cells[j].innerHTML ='<img src="../arme1.png">';
                                console.log(table.rows[i].cells[j].innerHTML);
                                }
                        else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../case1.png"></div>') {
                                table.rows[i].cells[j].innerHTML ='<img src="../case1.png">';
                                console.log(table.rows[i].cells[j].innerHTML);
                                } 
                        
                   
            }
        }
        
    }  

function collisionArme(i_Arme,j_Arme,nom_Arme) {
    table.rows[i_Arme].cells[j_Arme].style.border = "3px solid black";
    var divElement = document.createElement("div");
    divElement.classList.add("highlight");
    divElement.innerHTML = '<img src="../' + nom_Arme + '.png">';
    table.rows[i_Arme].cells[j_Arme].innerHTML='';
    table.rows[i_Arme].cells[j_Arme].appendChild(divElement);
    
}    

function detecteCombat(joueur1, joueur2) {
    if(playerX1 === playerX2) {
        if(Math.abs(playerY1-playerY2) === 1) {
           return true;
           }
       
       } else if(playerY1 === playerY2) {
           if(Math.abs(playerX1-playerX2) === 1) {
           return true;
           }
        
    }
    
}
//joueur1 attaque jooueur2
function attaqueJoueur(joueur_Attaque) {
    while (gagne===true) {
    switch(joueur_Attaque) {
           case joueur1 :
            rep_attaque = prompt("joueur1 :(A)ttaquer ou (D)éfendre ?");
            if(rep_attaque==='A' || rep_attaque==='a') {
                joueur2.vie = joueur2.vie - joueur1.arme.degat;
                if(joueur2.vie !== 0) {
                    alert("joueur2 : " + joueur2.vie + " points de vie.");
                }
                
            } else if((rep_attaque==='D' || rep_attaque==='d')) {
                joueur2.vie = joueur2.vie - (joueur1.arme.degat)/2;
                if(joueur2.vie !== 0) {
                    alert("joueur2 : " + joueur2.vie + " points de vie.");
                }
                
            }
           
           case joueur2 :
            rep_attaque = prompt("joueur2 :(A)ttaquer ou (D)éfendre ?");
            if(rep_attaque==='A' || rep_attaque==='a') {
                joueur1.vie = joueur1.vie - joueur2.arme.degat;
                if(joueur1.vie !== 0) {
                   alert("joueur1 : " + joueur1.vie + " points de vie."); 
                }
                
            } else if((rep_attaque==='D' || rep_attaque==='d')) {
                joueur1.vie = joueur1.vie - (joueur2.arme.degat)/2;
                if(joueur1.vie !== 0) {
                    alert("joueur1 : " + joueur1.vie + " points de vie.");
                }
                
            }
           
           }
        
    if(joueur_Attaque===joueur1) {
        joueur_Attaque = joueur2;
    } else if(joueur_Attaque===joueur2) {
        joueur_Attaque = joueur1;
    }
    
        
     nbre_tour++;              
      if (joueur2.vie <=0) {
          gagne = false;
          console.log(joueur1.nom + " a gagné");
          console.log("il a gagné en : " + nbre_tour + " coups.");
      } else if (joueur1.vie <=0) {
          gagne = false;
          console.log(joueur2.nom + " a gagné");
          console.log("il a gagné en : " + nbre_tour + " coups.");
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
    trouve=false;
    while (trouve !== true) {
        var i= Math.floor(Math.random()*9);
        var j= Math.floor(Math.random()*9);
        if (table.rows[i].cells[j].textContent === '0') {
            table.rows[i].cells[j].innerHTML = joueur;
            trouve = true;
            } 
           
        }   
   
        
        
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
arme1 = new Arme('Arme1', 10);
arme2 = new Arme('Arme2', 5);
arme3 = new Arme('Arme3', 15);
arme4 = new Arme('Arme4', 20);

joueur1 = new Joueur('Joueur1', 100,arme1);
joueur2 = new Joueur('Joueur2', 100,arme1);


joueur1.repereJoueur(1);
joueur2.repereJoueur(2);
/* 
programme principal
*/

    
      $("#tourRole").html("joueur1");
      joueur1.deplaceJoueur();
      highlight(1);
      
    

    
    
})