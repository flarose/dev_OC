$(function(){
   
// Variables globales
var gagne = true;

var nbre_tour=0;

var rep_attaque = "";

//Definition de la classe Arme >> "Arme.js"

//Definition de la classe Joueur >> "Joueur.js"


//////////////////////////////////////////////////////////////////////////// 
// on definit la fonction hightlight() du programme principal    
function highlight(n) {
        
        $('.highlight').on('click', function(){
        switch(n) {
               case 1 :
                
                var newX = $(this).closest("tr").index();
                var newY = $(this).closest("td").index();

                var elementImage = document.createElement("img");
                
                //TODO : récuperer l'ancienne arme du joueur1
                // si le joueur se situe sur la position d'une arme, il depose son arme.
                if(joueur1.i === arme1.iArme && joueur1.j === arme1.jArme) {
                    elementImage.src = "../" + joueur1.arme.nom + ".png";
                    } else if(joueur1.i === arme2.iArme && joueur1.j === arme2.jArme) {
                        elementImage.src = "../" + joueur1.arme.nom + ".png";
                    } else if(joueur1.i === arme3.iArme && joueur1.j === arme3.jArme) {
                        elementImage.src = "../" + joueur1.arme.nom + ".png";
                    } else if(joueur1.i === arme4.iArme && joueur1.j === arme4.jArme) {
                        elementImage.src = "../" + joueur1.arme.nom + ".png";
                    } else {
                         elementImage.src = "../case1.png";    
                         }
               
                table.rows[joueur1.i].cells[joueur1.j].innerHTML = '';
                table.rows[joueur1.i].cells[joueur1.j].appendChild(elementImage);
                

                joueur1.i = newX;
                joueur1.j = newY;

                if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme1.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme1.png"></div>') {
                    
                    console.log("Ancienne Force : " + joueur1.arme.degat);
                    joueur1.arme = arme1;
                    console.log("Nouvelle Force : " + joueur1.arme.degat);
                    

                } else if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme2.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme2.png"></div>') {
                    
                    console.log("Ancienne Force : " + joueur1.arme.degat);
                    joueur1.arme = arme2;
                    console.log("Nouvelle Force : " + joueur1.arme.degat + " (attention : arme faible !)");
                    


                } else if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme3.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme3.png"></div>') {
                    
                    console.log("Ancienne Force : " + joueur1.arme.degat);
                    joueur1.arme = arme3;
                    console.log("Nouvelle Force : " + joueur1.arme.degat);
                    


                } else if (table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<img src="../arme4.png">' || table.rows[joueur1.i].cells[joueur1.j].innerHTML === '<div class="highlight"><img src="../arme4.png"></div>') {
                    
                    console.log("Ancienne Force : " + joueur1.arme.degat);
                    joueur1.arme = arme4;
                    console.log("Nouvelle Force : " + joueur1.arme.degat);
                    

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
                
                // si le joueur se situe sur la position d'une arme, il depose son arme.
                if(joueur2.i === arme1.iArme && joueur2.j === arme1.jArme) {
                    elementImage.src = "../${joueur2.arme}.png";
                    } else if(joueur2.i === arme2.iArme && joueur2.j === arme2.jArme) {
                        elementImage.src = "../${joueur2.arme}.png";
                    } else if(joueur2.i === arme3.iArme && joueur2.j === arme3.jArme) {
                        elementImage.src = "../${joueur2.arme}.png";
                    } else if(joueur2.i === arme4.iArme && joueur2.j === arme4.jArme) {
                        elementImage.src = "../${joueur2.arme}.png";
                    } else {
                         elementImage.src = "../case1.png";    
                    } 
                table.rows[joueur2.i].cells[joueur2.j].innerHTML = '';
                table.rows[joueur2.i].cells[joueur2.j].appendChild(elementImage);
                

                joueur2.i = newX;
                joueur2.j = newY;

                if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme1.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme1.png"></div>') {
                    console.log("Ancienne Force : " + joueur2.arme.degat);
                    joueur2.arme = arme1;
                    console.log("Nouvelle Force : " + joueur2.arme.degat);

                } else if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme2.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme2.png"></div>') {
                    console.log("Ancienne Force : " + joueur2.arme.degat);
                    joueur2.arme = arme2;
                    console.log("Nouvelle Force : " + joueur2.arme.degat + " (attention : arme faible !)");


                } else if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme3.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme3.png"></div>') {
                    console.log("Ancienne Force : " + joueur2.arme.degat);
                    joueur2.arme = arme3;
                    console.log("Nouvelle Force : " + joueur2.arme.degat);


                } else if (table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<img src="../arme4.png">' || table.rows[joueur2.i].cells[joueur2.j].innerHTML === '<div class="highlight"><img src="../arme4.png"></div>') {
                    console.log("Ancienne Force : " + joueur2.arme.degat);
                    joueur2.arme = arme4;
                    console.log("Nouvelle Force : " + joueur2.arme.degat);


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
 


//on definit ici des fonctions du prog principal : detecteCombat(), attaqueJoueur()
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
    
//////////////////////////////////////////////////////////////////////////// 
//FIN des fonctions du prog principal
 
     
      
    
////////////////////////////////////////////////////////////////////////////  
// Creation de la carte
    
//creation du tableau HTML + definition des fonctions pour creer la carte (placeMur(), placeJoueur(), placeArme()) >> Carte.js

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