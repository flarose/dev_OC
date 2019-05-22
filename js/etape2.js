$(function(){
   
// Variables globales
var gagne = true;
var trouve = false;
//var i = 0;
//var j = 0;
var nbre_tour=0;
let imax = 9;
let jmax = 9; 
var rep_attaque = "";

//Definition de la classe Arme
/*class Arme {
    constructor(nom, degat) {
        this.nom = nom;
        this.degat = degat;
        this.iArme =0;
        this.jArme=0;
    }
}*/

//Definition de la classe Joueur
/*class Joueur {
    constructor(nom, vie, arme) {
        this.nom =nom;
        this.vie =vie;
        this.arme=arme;
        this.i =0;
        this.j =0;
    }
    
    repereJoueur(n) {
        trouve = false;
        while (trouve === false) {
            for (i = 0; i < table.rows.length; i++) {
                for (j = 0; j < table.rows[i].cells.length; j++) {
                    if (table.rows[i].cells[j].innerHTML === '<img src="../joueur' + n +'.png">') {

                        this.i = i;
                        this.j = j;
                      
                        trouve = true;
                        

                        }
                }
                }
            }

    }   
    
    decrire() {
        console.log(this.nom + ' a ' + this.vie + ' points de vie, il possede le ' + this.arme.nom);
        console.log("la valeur i de :" + this.i);
        console.log("la valeur j de :" + this.j);
    }
    

   deplaceJoueur(){
    
    clearHighlight();
       
    trouve = false;   
    var j = this.j; 
    for (i=this.i-1; i>=this.i-3;i--) {
        if(trouve === false) {
            if (i<0) {
                trouve = true;
                } else  {
                     trouveCase(i,j);
                }

        }
    }
    
    
    trouve = false; 
    var j = this.j;
    for (i=this.i+1; i<=this.i+3;i++) {
        if(trouve === false) {
            if (i>(imax-1)) {
                trouve = true;
                } else {
                      trouveCase(i,j);
                    }
                
        }
    }
    
    
    trouve = false;
    var i = this.i;
    for (j=this.j-1; j>=this.j-3;j--) {
       if(trouve === false) {
            if (j<0) {
                trouve = true;
                } else {
                    trouveCase(i,j);
                    }
                
        }
    }
    
    
    trouve = false;
    var i = this.i;
    for (j=this.j+1; j<=this.j+3;j++) {
        if(trouve === false) {
            if (j>(jmax-1)) {
                trouve = true;
                } else {
                     trouveCase(i,j);
                    }
                
        }
    }
         
    }
    
  
  
}*/


// on definit la fonction hightlight() du programme principal    
function highlight(n) {
        
        $('.highlight').on('click', function(){
        switch(n) {
               case 1 :
                
                var newX = $(this).closest("tr").index();
                var newY = $(this).closest("td").index();

                var elementImage = document.createElement("img");
                
                if(joueur1.i === arme1.iArme && joueur1.j === arme1.jArme) {
                    elementImage.src = "../arme1.png";
                   } else if(joueur1.i === arme2.iArme && joueur1.j === arme2.jArme) {
                    elementImage.src = "../arme2.png";
                }else if(joueur1.i === arme3.iArme && joueur1.j === arme3.jArme) {
                    elementImage.src = "../arme3.png";
                } else if(joueur1.i === arme4.iArme && joueur1.j === arme4.jArme) {
                    elementImage.src = "../arme4.png";
                }else {
                     elementImage.src = "../case1.png";    
                         }
                
                
                table.rows[joueur1.i].cells[joueur1.j].innerHTML = '';
                table.rows[joueur1.i].cells[joueur1.j].appendChild(elementImage);
                

                joueur1.i = newX;
                joueur1.j = newY;

                if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme1.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme1.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme1;
                    console.log(joueur1.arme.degat);
                    

                } else if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme2.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme2.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme2;
                    console.log(joueur1.arme.degat + " (attention : arme faible !)");
                    


                } else if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme3.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme3.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme3;
                    console.log(joueur1.arme.degat);
                    


                } else if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme4.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme4.png"></div>') {
                    
                    console.log(joueur1.arme.degat);
                    joueur1.arme = arme4;
                    console.log(joueur1.arme.degat);
                    

                }

                var elementImage = document.createElement("img");
                
                elementImage.src = "../joueur1.png";
                
                table.rows[joueur1.i].cells[joueur1.j].innerHTML = '';
                table.rows[joueur1.i].cells[joueur1.j].appendChild(elementImage);

                 
                    
                 //on detecte le combat
                if (detecteCombat(joueur1, joueur2) === true) {
                     
                    attaqueJoueur(joueur1);
                 }
                
                break;
               case 2 : 
                
                var newX = $(this).closest("tr").index();
                var newY = $(this).closest("td").index();

                var elementImage = document.createElement("img");
                
                if(joueur2.i === arme1.iArme && joueur2.j === arme1.jArme) {
                    elementImage.src = "../arme1.png";
                   } else if(joueur2.i === arme2.iArme && joueur2.j === arme2.jArme) {
                        elementImage.src = "../arme2.png";
                    }else if(joueur2.i === arme3.iArme && joueur2.j === arme3.jArme) {
                        elementImage.src = "../arme3.png";
                    } else if(joueur2.i === arme4.iArme && joueur2.j === arme4.jArme) {
                        elementImage.src = "../arme4.png";
                    }else {
                         elementImage.src = "../case1.png";    
                    }
                
                table.rows[joueur2.i].cells[joueur2.j].innerHTML = '';
                table.rows[joueur2.i].cells[joueur2.j].appendChild(elementImage);
                

                joueur2.i = newX;
                joueur2.j = newY;

                if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme1.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme1.png"></div>') {
                    console.log(joueur2.arme.degat);
                    joueur2.arme = arme1;
                    console.log(joueur2.arme.degat);

                } else if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme2.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme2.png"></div>') {
                    console.log(joueur2.arme.degat);
                    joueur2.arme = arme2;
                    console.log(joueur2.arme.degat);


                } else if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme3.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme3.png"></div>') {
                    console.log(joueur2.arme.degat);
                    joueur2.arme = arme3;
                    console.log(joueur2.arme.degat);


                } else if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme4.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme4.png"></div>') {
                    console.log(joueur2.arme.degat);
                    joueur2.arme = arme4;
                    console.log(joueur2.arme.degat);


                }

                var elementImage = document.createElement("img");
                
                elementImage.src = "../joueur2.png";
                
                table.rows[joueur2.i].cells[joueur2.j].innerHTML = '';
                table.rows[joueur2.i].cells[joueur2.j].appendChild(elementImage);

                 
                
                 //on detecte le combat
                 if (detecteCombat(joueur1, joueur2) === true) {
                     
                     attaqueJoueur(joueur2);
                 }
        
                 break;
                default :
                 break;

                }
                if(gagne===true) {
                    if(n===1) {
                        $("#tourRole").html("joueur en cours: joueur2");
                        joueur2.repereJoueur(2);
                        joueur2.deplaceJoueur();
                        highlight(2);
                    } else if(n===2) {
                        $("#tourRole").html("joueur en cours: joueur1");
                        joueur1.repereJoueur(1);
                        joueur1.deplaceJoueur();
                        highlight(1);
                    }
                }
                })
        
       
        
         
}
 


//on definit ici des fonctions du prog principal
 function clearHighlight() {
        for (i=0; i <imax; i++) {
            for (j=0; j <jmax; j++) {
               
                   table.rows[i].cells[j].style.border = "";
                   
                   if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme4.png"></div>') {
                       
                       table.rows[i].cells[j].innerHTML ='<img src="../arme4.png">';
                       
                      } else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme3.png"></div>') {
                               table.rows[i].cells[j].innerHTML ='<img src="../arme3.png">'; 
                               
                                }
                        else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme2.png"></div>') {
                                table.rows[i].cells[j].innerHTML ='<img src="../arme2.png">';
                                
                                }
                        else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../arme1.png"></div>') {
                                table.rows[i].cells[j].innerHTML ='<img src="../arme1.png">';
                                
                                }
                        else if(table.rows[i].cells[j].innerHTML==='<div class="highlight"><img src="../case1.png"></div>') {
                                table.rows[i].cells[j].innerHTML ='<img src="../case1.png">';
                                
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

function trouveCase(i,j) {
    if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                            
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

function detecteCombat(Joueur1, Joueur2) {
    if(Joueur1.i === Joueur2.i) {
        if(Math.abs(Joueur1.j-Joueur2.j) === 1) {
           return true;
           }
       
       } else if(Joueur1.j === Joueur2.j) {
           if(Math.abs(Joueur1.i-Joueur2.i) === 1) {
           return true;
           }
        
    }
    
}

function attaqueJoueur(joueur_Attaque) {
    while (gagne===true) {
    switch(joueur_Attaque) {
           case joueur1 :
            rep_attaque = prompt("Joueur1 attaque!... Joueur2(" + joueur2.vie + ") :(A)ttaquer ou (D)éfendre ?");
            if(rep_attaque==='A' || rep_attaque==='a') {
                joueur2.vie -= joueur1.arme.degat;
                if(joueur2.vie > 0) {
                    console.log("Joueur2, il  te reste : " + joueur2.vie + " points de vie.");
                }
                
            } else if((rep_attaque==='D' || rep_attaque==='d')) {
                joueur2.vie -= (joueur1.arme.degat)/2;
                if(joueur2.vie > 0) {
                    console.log("Joueur2, il  te reste " + joueur2.vie + " points de vie.");
                }
                
            }
            
           joueur_Attaque = joueur2;
           case joueur2 :
            rep_attaque = prompt("Joueur2 attaque!... Joueur1(" + joueur1.vie + ") :(A)ttaquer ou (D)éfendre ?");
            if(rep_attaque==='A' || rep_attaque==='a') {
                joueur1.vie -= joueur2.arme.degat;
                if(joueur1.vie > 0) {
                   console.log("Joueur1, il te reste : " + joueur1.vie + " points de vie."); 
                }
                
            } else if((rep_attaque==='D' || rep_attaque==='d')) {
                joueur1.vie -= (joueur2.arme.degat)/2;
                if(joueur1.vie > 0) {
                    console.log("Joueur1, il te reste : " + joueur1.vie + " points de vie.");
                }
                
            }
            joueur_Attaque = joueur1;
           
           }
    
    
        
     nbre_tour++;              
      if (joueur2.vie <=0) {
          gagne = false;
          console.log(joueur1.nom + " a gagné");
          alert(joueur1.nom + " a gagné");
          console.log("il a gagné en : " + nbre_tour + " coups.");
      } else if (joueur1.vie <=0) {
          gagne = false;
          console.log(joueur2.nom + " a gagné");
          alert(joueur2.nom + " a gagné");
          console.log("il a gagné en : " + nbre_tour + " coups.");
      } 
}
}
//FIN des fonctions du prog principal
 
    
    
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
    var trouve=false;
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
    var trouve = false;
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

arme1 = new Arme('Arme1', 10);
arme2 = new Arme('Arme2', 5);
arme3 = new Arme('Arme3', 15);
arme4 = new Arme('Arme4', 20);
    
//Parcours de la carte, on remplace les chiffres par les images correspondantes
for (i = 0; i < table.rows.length; i++) {
    for (j = 0; j < table.rows[i].cells.length; j++) {
        var elementImage = document.createElement("img");
        elementTable = table.rows[i].cells[j].innerHTML;
        
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
                arme1.iArme=i;
                arme1.jArme=j;
                break;
                
            case "5" :
                elementImage.src = "../arme2.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                arme2.iArme=i;
                arme2.jArme=j;
                break;
                
            case "6" :
                elementImage.src = "../arme3.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                arme3.iArme=i;
                arme3.jArme=j;
                break;
                
            case "7" :
                elementImage.src = "../arme4.png";
                table.rows[i].cells[j].innerHTML = '';
                table.rows[i].cells[j].appendChild(elementImage);
                arme4.iArme=i;
                arme4.jArme=j;
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


joueur1 = new Joueur('Joueur1', 100,arme1);
joueur2 = new Joueur('Joueur2', 100,arme1);


joueur1.repereJoueur(1);
joueur1.decrire();
joueur2.repereJoueur(2);
joueur2.decrire();
/* 
programme principal
*/
      // évite de débuter la partie avec un combat
      if (detecteCombat(joueur1, joueur2) === true) {
            console.log("relancer la partie.");
                 }
                
      $("#tourRole").html("joueur en cours: joueur1");
      joueur1.deplaceJoueur();
      highlight(1);
      
    

    
    
})