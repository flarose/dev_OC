class Joueur {
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
    
  
  
}