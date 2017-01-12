window.onload = function(){
    document.getElementsByClassName("ajout-groupe-1")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(1);
        return false;
    };
    document.getElementsByClassName("ajout-groupe-2")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(2);
        return false;
    };/*
    document.getElementsByClassName("ajout-groupe-3")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(3);
        return false;
    };
    document.getElementsByClassName("ajout-groupe-4")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(4);
        return false;
    };
    document.getElementsByClassName("ajout-groupe-5")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(5);
        return false;
    };*/
    
    function ajoutGroupe (numGroupe) {
        var nomGroupe = "groupes-"+numGroupe;
        var nomAjoutGroupe = "ajout-groupe-"+numGroupe;
        
        var listeGroupe = document.getElementsByClassName(nomGroupe); //Liste Option
        var sautLigne = document.createElement("br");
        var lastGroupe = listeGroupe[listeGroupe.length -1];
        var parent = lastGroupe.parentNode;
        //Si on ajoute le troisieme groupe, on supprime le bouton +
        if(listeGroupe.length > 1){
            parent.removeChild(document.getElementsByClassName(nomAjoutGroupe)[0]);
        }
        var liste2 = document.createElement("select");
        liste2.setAttribute("class", nomGroupe);
        var listOption = lastGroupe.childNodes;
        //Ajout des groupes dans la liste
        //A partir de la BD ???????
       for(var i in listOption){
            var option = document.createElement("option");
            var text = document.createTextNode(listOption[i].nextSibling);
            option.appendChild(text);
            liste2.appendChild(option);
        } 
        parent.insertBefore(liste2,lastGroupe.nextSibling);
        parent.insertBefore(sautLigne,lastGroupe.nextSibling);
    };
};

