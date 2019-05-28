class Joueur {
    constructor(nom, vie, arme) {
        this.nom =nom;
        this.vie =vie;
        this.arme=arme;
        this.i =0;
        this.j =0;
    }
    
    repereJoueur(n) {
        var trouve = false;
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
    let imax = 9;
    let jmax = 9; 
    var trouve = false;
       
    clearHighlight();
       
       
    var j = this.j; 
    for (i=this.i-1; i>=this.i-3;i--) {
        if(trouve === false) {
            if (i<0) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">'){
                 trouveCase(i,j);
                } else {
                    trouve = true;
                }

        }
    }
    
    
    trouve = false; 
    var j = this.j;
    for (i=this.i+1; i<=this.i+3;i++) {
        if(trouve === false) {
            if (i>(imax-1)) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">'){
                  trouveCase(i,j);
                } else {
                    trouve = true;
                }
                
        }
    }
    
    
    trouve = false;
    var i = this.i;
    for (j=this.j-1; j>=this.j-3;j--) {
       if(trouve === false) {
            if (j<0) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">'){
                trouveCase(i,j);
                } else {
                    trouve = true;
                }
                
        }
    }
    
    
    trouve = false;
    var i = this.i;
    for (j=this.j+1; j<=this.j+3;j++) {
        if(trouve === false) {
            if (j>(jmax-1)) {
                trouve = true;
                } else if (table.rows[i].cells[j].innerHTML === '<img src="../case1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme1.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme2.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme3.png">' || table.rows[i].cells[j].innerHTML === '<img src="../arme4.png">') {
                 trouveCase(i,j);
                } else {
                    trouve = true;
                }
                
        }
    }
         
    }
    
  
  
}

 function clearHighlight() {
        let imax = 9;
        let jmax = 9;
     
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
                //trouve = true;
                break;
                }
                      
                            
         
}