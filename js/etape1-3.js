$(function(){
    

    
// Variables globales
var attaque = true;
var gagne = true;
var trouve = false;
var i = 0;
var j = 0;
var partie = "en cours";
var joueur = "Joueur1";



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
        tdElement = table.rows[i].cells[j].innerHTML;
        //alert(tdElement);
        switch (tdElement) {
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
imax = 9;
jmax = 9; 



//classe Joueur (définition)
class Joueur {
    init(nom, vie, arme) {
        this.nom = nom;
        this.vie = vie;
        this.arme= arme;
        this.i1 = 0;
        this.j1 = 0;
    }
    
    //description du joueur
    
    decrire() {
        return'${this.nom} a ${this.vie} points de vie, il possede le ${this.arme}';
    }
    
    repereJoueur(n) {
    var trouve = 'false';
    while (trouve === 'false') {
        for (i = 0; i < table.rows.length; i++) {
            for (j = 0; j < table.rows[i].cells.length; j++) {
                if (table.rows[i].cells[j].innerHTML === '<img src="../joueur' + n +'.png">') {
                    this.i1 = i;
                    this.j1 = j;
                    trouve = 'true';
                    console.log("la valeur i"+ n + " :" + this.i1);
                    
                    console.log("la valeur j" + n + " :" + this.j1);

                    }
            }
            }
        }
        
    }
    deplaceJoueur(n) {
    trouve = 'false';
   
    while(trouve === 'false') {
    var j = this.j1;
    for (i=this.i1-1; i>=this.i1-3;i--) {
        if (trouve === 'false') {
            if (i<0) {
                trouve = 'true';
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {
                    table.rows[i].cells[j].style.border = "3px solid black";
                
                    //eltImage = document.createElement("img");
                    //eltImage.src = '<img src="../case1.png">';
                    //eltImage.classList.add("focus");
                    //table.rows[i].cells[j].appendChild(eltImage);
                    
                    $("img").on("click", function() {
                        //table.rows[i1].cells[j1].innerHTML = '<img src="../case1.png">';
                        //table.rows[i].cells[j].remove(eltImage);
                        alert("tu viens de cliquer en haut du joueur ! , les parametres sont (i1, J1, i, j, n) : " + i1+ ", "+ j1+ ", "+ i+ ", "+ j+ ", "+ n);
                        //console.log("tu viens de cliquer en haut du joueur !");
                        //table.rows[i].cells[j].innerHTML = '<img src="../joueur' + n +'.png">';
                        
                        //table.rows[i].cells[j].style.border = "";
                    });
                    
                    //$(".focus").addEventListener("click", clic);
                    
                    
                    } else {
                            trouve = 'true';
                            }
            
             }
        


        }
    }
    
    trouve = 'false';
    
    while(trouve === 'false') {
    var j = this.j1;
    for (i=this.i1+1; i<=this.i1+3;i++) {
        if (trouve === 'false') {
        
            if (i>(imax-1)) {
                trouve = 'true';
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {

                        //console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                        table.rows[i].cells[j].style.border = "3px solid black";


                        } else {
                            trouve = 'true';
                        }
            }

        } 
    }

    trouve = 'false';
    
    while(trouve === 'false') {
    var i =this.i1;
    for (j=this.j1-1; j>=this.j1-3;j--) {
        if (trouve === 'false') {
        
        if (j<0) {
            trouve = 'true';
            } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {

                    //console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                    table.rows[i].cells[j].style.border = "3px solid black";


                    } else {
                        trouve = 'true';
                    }
            }

        }
    }

    trouve = 'false';
    
    while(trouve === 'false') {
    var i =this.i1;
    for (j=this.j1+1; j<=this.j1+3;j++) {
        if (trouve === 'false'){
        

        if (j>(jmax-1)) {
            trouve = 'true';
            } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">') {

                    //console.log("A l'emplacement "+ i + ", " + j + " : border = 3");
                    table.rows[i].cells[j].style.border = "3px solid black";


                    } else {
                        trouve = 'true';
                    }
            }

        } 
    }
    
    }
    

}


/*class Arme {
    init(nom) {
        this.nom = nom;
        this.degat = 10;
    }
    decrire() {
        return "je m'appelle ${this.nom}et je t'enlèves ${this.degat} de points de vie ";
    }
    
}*/


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
/*var nb_tour = 1;


do while(nb_tour <= 3) {
    if (nb_tour % 2 !== 0) {
    
    } else {
    
    }
    
    
    nb_tour++;     
         }*/

joueur1 = new Joueur("Joueur1", 100, "arme1");
 
msg = ' ' + joueur + ' (' + joueur1.decrire() + ' )';
document.getElementById("tourRole").after(msg);

joueur1.repereJoueur(1);
joueur1.deplaceJoueur(1);
})